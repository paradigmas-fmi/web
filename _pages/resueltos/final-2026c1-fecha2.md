---
layout: single
permalink: /final-2026c1-fecha2
title: Final resuelto - 2ª fecha (07/07/2026)
toc: true
toc_label: Ejercicios
---

Enunciado completo: [Final 2 - 07/07/2026](/assets/pdf/Final-2026c1-Fecha2.pdf)

> _La idea de esta página no es dar "la respuesta correcta" para copiar, sino mostrar **cómo pensar** cada ejercicio: qué está evaluando, qué señales del enunciado hay que leer y cómo llegar a una resolución. Casi siempre hay más de una respuesta válida; lo que se corrige es la justificación._

## 1. "Has de favorecer la composición sobre la herencia"

**Qué evalúa:** que entiendas qué es la composición, qué es la herencia, y por qué conviene usar una en lugar de la otra.

**Cómo pensarlo.** La frase no dice "prohibí la herencia", dice *favorecer*. Entonces la respuesta tiene tres partes: por qué la herencia trae problemas, qué gana la composición, y cuándo igual conviene heredar.

**Resolución.**

Heredar es la forma más fuerte de acoplamiento que existe entre dos clases: la subclase depende de los detalles internos de la superclase. Eso trae:

- **Clase base frágil:** un cambio en la superclase rompe subclases que ni tocamos. Por eso escala mal con el tiempo: cuanto más crece la jerarquía, más clases hijas quedan expuestas a cualquier modificación de la clase padre, y tocar la base se vuelve cada vez más riesgoso.
- **Rigidez:** la relación se fija en tiempo de compilación y no se puede cambiar en runtime.
- **Se rompe el encapsulamiento**, y con jerarquías forzadas ("un Cuadrado *es un* Rectángulo") se termina violando **LSP**.

La composición delega en un objeto que se recibe por interfaz: el objeto colaborador se puede cambiar en runtime, se testea por separado y agregar una variante nueva es agregar una clase, no tocar la jerarquía (**OCP**). Es lo que hacen **Strategy**, **Decorator** o **State**.

**Cuándo sí heredar:** cuando hay una verdadera relación de subtipo *es-un* que respeta LSP y queremos polimorfismo sobre una interfaz común. Herencia = **es un**; composición = **tiene un / usa un**. La regla de oro: si estás heredando sólo para reutilizar código, quería ser composición.

## 2. Cálculo Lambda

```
func gana_arg(z, empata_messi, lo_gana_enzo) {
    if (!empata_messi(z) or lo_gana_enzo(z))
        return z
    else
        return NONE
}
```

**Cómo pensarlo.** Tres observaciones desarman el ejercicio:

1. En Cálculo Lambda **no hay funciones de varios argumentos**: se currifica, una lambda por parámetro.
2. **No hace falta un `if`**. Un booleano de Church *es* el `if`: `TRUE a b → a` y `FALSE a b → b`. Así que alcanza con aplicar la condición a las dos ramas: `COND z NONE`.
3. Sólo hay que definir lo que realmente uso: `TRUE`, `FALSE`, `NOT` y `OR`. Números de Church no se usan acá, y `NONE` se deja como está en el enunciado.

**Definiciones previas.**

```
TRUE  = λx.λy.x
FALSE = λx.λy.y
NOT   = λb. b FALSE TRUE
OR    = λp.λq. p TRUE q
```

**Resolución.**

```
GANA_ARG = λz. λem. λle. (OR (NOT (em z)) (le z)) z NONE
```

Se asume que `em` y `le` devuelven booleanos de Church, igual que en el código original devuelven booleanos.

**Verificación** (empata Messi y no lo gana Enzo → debería dar `NONE`), con `em z → TRUE` y `le z → FALSE`:

```
OR (NOT TRUE) FALSE  →  OR FALSE FALSE  →  FALSE
FALSE z NONE         →  NONE  ✓
```

## 3. Paquetes turísticos (Java)

**Cómo pensarlo.** El enunciado está lleno de *code smells* explícitos; no hay que adivinar el patrón, hay que dejar que los síntomas lo nombren:

| Síntoma en el enunciado | Problema |
| --- | --- |
| Constructor con 15+ parámetros | *Long parameter list* / constructor telescópico: ilegible y fácil de equivocar el orden |
| Se pasa `null` o listas vacías | Objetos en estado inconsistente y `if (x != null)` desparramados |
| `armarPaqueteAventura()`, `armarPaqueteCaribe()`... | El armado de cada oferta está duplicado y hardcodeado |
| Validaciones dentro del `ArmadorDeViajes` | Viola **SRP**: la clase ensambla *y* valida; las reglas no se reutilizan ni se testean solas |
| "Periódicamente piden agregar servicios opcionales" | Viola **OCP**: cada servicio nuevo obliga a tocar el constructor, todos los métodos y todos los llamadores |

**Resolución.** Tres movimientos:

1. **Builder** para construir el paquete paso a paso. Se elimina el constructor gigante: sólo se setea lo que el paquete tiene, y `build()` devuelve un `PaqueteTuristico` ya válido e inmutable.
2. **Cada oferta comercial pasa a ser un objeto** (un *Director* / receta) en vez de un método del armador. Agregar el "Paquete Ski" es agregar una clase, sin tocar nada existente (OCP).
3. **Las validaciones salen a objetos `ReglaDeValidacion`** componibles, que el builder aplica en `build()`. Reglas nuevas = clases nuevas.

Bonus: los servicios opcionales conviene modelarlos como una `List<Servicio>` polimórfica en vez de un atributo por servicio; así el catálogo crece sin tocar `PaqueteTuristico`.

**Diagrama de clases.**

```
  <<interface>>                         PaqueteTuristicoBuilder
  ArmadorDeViajes  ─────── usa ──────▶  ---------------------------
  + armar(): PaqueteTuristico           + conDestino(d)
        △                               + conVuelos(ida, vuelta)
        │ implementan                   + agregarServicio(s)
        ├── ArmadorAventura             + build(): PaqueteTuristico
        ├── ArmadorCaribe                    │            │
        └── ArmadorEjecutivo         valida  │            │ construye
                                             ▼            ▼
                              <<interface>>        PaqueteTuristico
                              ReglaValidacion      -----------------
                              + validar(p)         - destino
                                    △              - fechas
                                    ├── ReglaFechas          ◇ 0..*
                                    ├── ReglaSeguro          │
                                    └── ReglaExcursiones     ▼
                                                       <<interface>>
                                                         Servicio
                                                            △
                                                            ├── AlquilerAuto
                                                            ├── Excursion
                                                            └── SeguroMedico
```

Leído en una línea: **cada oferta comercial es un `ArmadorDeViajes`** que configura un **Builder**; el `build()` corre las **reglas de validación** y devuelve un `PaqueteTuristico` válido, cuyos opcionales son una lista polimórfica de **`Servicio`**.

## 4. Smart Grid: ¿cuales paradigma(s)?
La pregunta es **por qué** conviene cada paradigma, no **cómo** lo diseñarías con él. Son dos cosas distintas y se confunden todo el tiempo. Una respuesta como *"uso POO porque `Nodo` es una clase abstracta y `PlantaSolar` hereda de ella"* no responde nada: describe un diseño, pero no dice qué problema del sistema queda resuelto gracias a eso. Lo mismo con *"conviene funcional porque me da inmutabilidad y funciones puras"*: enumera propiedades del paradigma sin decir para qué sirven **acá**.

Entonces la respuesta se arma en dos pasos, y el primero es el que más se saltea:

1. **Nombrar los problemas** que plantea el enunciado. Si no los nombrás, no hay nada contra qué justificar.
2. **Atar cada paradigma a un problema**: por qué ese paradigma me lo resuelve. Las **desventajas**, en cambio, sí pueden ser más generales: son el costo que se paga por incorporarlo.

**Cómo pensarlo.** El otro error clásico es elegir *uno solo*. El enunciado plantea **tres problemas distintos**, y cada uno pide algo diferente. Primero separalos:

1. Hay que **manejar el estado de miles de nodos heterogéneos**, y ese estado es dinámico y crítico: si se corrompe, se cae la red.
2. Hay que **absorber decenas de miles de lecturas por segundo y reaccionar de inmediato** a picos, caídas de tensión y alertas.
3. Hay que **correr un cálculo matemático pesado y continuo** sobre matrices, sin interrumpir el servicio.

**Resolución: un híbrido.**

- **POE — resuelve (2).** El problema es que los eventos llegan cuando quieren: nadie sabe de antemano cuándo va a haber una ráfaga de viento o un pico de demanda, y hay que responder al toque. Un programa secuencial no sirve, porque tendría que estar preguntando todo el tiempo si pasó algo. POE invierte eso: el sistema queda a la espera y sólo hace trabajo cuando llega el evento, que es lo que permite sostener ese caudal y reaccionar sin demora. Y como quien emite el evento no sabe quién lo va a atender, mañana se puede sumar una alerta nueva sin tocar lo que ya funciona. *Desventaja:* el flujo del programa deja de leerse de arriba hacia abajo, y eso lo hace más difícil de seguir y de debuggear.
- **Funcional — resuelve (3).** El problema es que el cálculo es pesado, continuo, y no puede frenar el servicio: la única forma de que dé abasto es repartirlo en paralelo. Ahí es donde importan la inmutabilidad y las funciones puras: como nada depende de un estado que otro pueda estar modificando al mismo tiempo, el trabajo se puede partir entre varios procesadores sin que se pisen entre sí. Además, la misma entrada da siempre el mismo resultado, así que un cálculo que salió mal se puede reproducir tal cual para entender qué pasó, algo nada menor en un sistema crítico. *Desventaja:* representar cosas que cambian todo el tiempo sin poder modificarlas es incómodo, porque hay que ir creando copias en lugar de actualizar.
- **POO — resuelve (1).** El problema es doble: hay estado crítico que no se puede corromper, y hay cuatro tipos de nodos que se comportan distinto pero que el sistema central necesita comandar igual. El encapsulamiento ataca lo primero, porque cada nodo controla su propio estado y nadie de afuera puede dejarlo inconsistente. El polimorfismo ataca lo segundo, porque el sistema puede activar o desactivar un nodo sin preguntar de qué tipo es, y así el algoritmo de balanceo no se llena de casos especiales ni hay que tocarlo cada vez que aparece un tipo de nodo nuevo. *Desventaja:* el estado es mutable y muchas partes lo tocan a la vez, lo que abre la puerta a errores de concurrencia.
- **Lógico — no usarlo.** No aporta nada a este problema. Su fuerte es encontrar respuestas explorando posibilidades (búsqueda con backtracking), y ninguno de los tres problemas es de ese tipo: acá hay que absorber un flujo enorme de datos, mantener estado y hacer cálculo numérico, que es justamente lo que un motor de inferencia hace peor. Incorporarlo sólo agregaría complejidad.

**Conclusión:** POE para la ingesta y la reacción, POO para el estado de los nodos, y Funcional para el cálculo de optimización. Lógico se descarta.

## 5. Scala: `curry` y `uncurry`

**Cómo pensarlo.** Este ejercicio se resuelve **mirando los tipos**, no pensando en la lógica: una vez escrita la firma, hay una sola forma razonable de construir el resultado.

- `curry` recibe `(A, B) => C` y debe devolver `A => (B => C)`: hay que producir una función que tome `a`, y que devuelva otra que tome `b`. Adentro sólo tenemos `f`, así que lo único posible es `f(a, b)`.
- `uncurry` es el camino inverso: recibe `A => (B => C)` y devuelve `(A, B) => C`, así que hay que aplicar en dos pasos: `f(a)(b)`.

**Resolución.**

```scala
def curry[A, B, C](f: (A, B) => C): A => (B => C) =
  a => b => f(a, b)

def uncurry[A, B, C](f: A => (B => C)): (A, B) => C =
  (a, b) => f(a)(b)
```

**Verificación de que son inversas:**

```scala
val suma: (Int, Int) => Int = (x, y) => x + y

curry(suma)(2)(3)            // 5
uncurry(curry(suma))(2, 3)   // 5  → uncurry ∘ curry == identidad
```
