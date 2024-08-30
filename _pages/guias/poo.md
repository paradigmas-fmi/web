---
layout: single
permalink: /guia-poo
title: Guía programación orientada a objetos
---

## Principios de diseño

Identificar y justificar todos los *principios de diseño* que se violan.
Proponer e implementar una posible solución que respete dichos principios. Justificar por que el patrón elegido resuelve los problemas identificados.

1.
```
class Zoológico {
    private Jaula jaula;

    public Zoológico(Jaula jaula) {
        this.jaula = jaula;
    }

    public void hacerSonidoDelAnimalEnJaula() {
        jaula.getHabitante().hacerSonido();
    }
}
```

2.
```
class CuentaBancaria {
    private double saldo;

    public CuentaBancaria(double saldoInicial) { this.saldo = saldoInicial; }

    public double tieneSaldoSuficiente(double monto) { return monto <= saldo; }

    public void retirar(double monto) { saldo -= monto; }
}

public class Cliente {
    public static void main(String[] args) {
        CuentaBancaria cuenta = new CuentaBancaria(1000);

        double montoSolicitado = 500;
        if (!cuenta.tieneSaldoSuficiente(montoSolicitado)) {
            throws MontoInsuficienteException("No se puede retirar. Fondos insuficientes.");
        }


        cuenta.retirar(montoSolicitado);
    }
}
```

3.
```
public class Deposito {
    public static void main(String[] args) {
        Inventario inventario = new Inventario(2000);

        int requerido= 50;
        if (!inventario.hayStock(requerido)) {
            throws StockInsuficienteException("No se puede retirar. Stock insuficiente.");
        }
        cuenta.retirar(requerido);
    }
}

class Inventario {
    private int stock;

    public Inventario(int stockInicial) { this.stoc = stockInicial; }

    public double hayStock(int requerido) { return requerido <= stock; }

    public void retirar(int requerido) { stock -= requerido; }
}
```

4.
```
public class GeneradorDeReportes {
    public void generarReporteExcel(String texto, Metadata metadata) {
        // Crea el reporte en formato Excel en base al texto recibido
        Excel excel = new Excel(texto);
        // Agrega metadata al reporte
        excel.agregarMetadata(metadata);
        // Guarda el archivo en el sistema de archivos
        excel.guardar();
    }

    public void generarReporteGoogleSheet(String texto, Metadata metadata) {
        // Crea el reporte en formato GoogleSheets en base al texto recibido
        GoogleSheet sheet = new GoogleSheet(texto);
        // Agrega metadata al reporte
        sheet.agregarMetadata(metadata);
        // Guarda el archivo en Google Drive
        sheet.guardar();
    }
}
```

## Diseño

Analizar y modelar la solución al problema usando los conceptos de diseño y programación orientada a objetos vistos en clase, realizando un diagrama de clases UML. Explicar y justificar las decisiones de diseño que creas conveniente

### (★) Dibujando
Dibujar un posible diagrama de clases y uno de secuencia para el siguiente fragmento de código:

Compas unCompas = new Compas();
Circulo unCirculo = unCompas.dibujarCirculoConRadio(5);
Cartuchera unaCartuchera = new Cartuchera();
Pincel unPincel = unaCartuchera.getPinceles().get(2);
Color unColor = new Rojo();
unPincel.seleccionarColor(unColor);
unPincel.pintar(unCirculo);
Integer superficie = unCirculo.calcularSuperficie();


### (★★) Feriados
Implementar un calendario de feriados. El calendario debe tener la siguiente funcionalidad:

- Permitir especificar feriados semanales (ejemplo: todos los domingos son feriados)
- Permitir especificar feriados anuales (ejemplo: el 25/12 es feriado, todos los años)
- Permitir especificar feriados puntuales (ejemplo: el 24/09/2050 es feriado, solo el 2050)
- Permitir especificar feriados anuales a partir de un año (ejemplo: el 24/3 es feriado todos los años a partir del 2050)

El calendario debe permitir consultar si una fecha determinada es un feriado.

### (★★★) Tenis

Nos centramos sólo en el manejo del marcador de un partido de tenis. La puntuación en el tenis tiene una tendencia del tipo “tira y afloja”. En un partido de tenis, un jugador empieza con una puntuación de 0. Con cada pelota exitosa, el jugador gana más puntos de la siguiente manera:

<div style="text-align: center;">0 → 15 → 30 → 40</div>

Si un jugador llega a los 40 puntos y vuelve a obtener una pelota exitosa, ganará un game. (En la medida que el otro jugador no tenga 40 puntos también).  Si ambos jugadores alcanzan 40 puntos que se conoce como deuce.

**Deuce**

Una pelota exitosa obtenida en estado de deuce, otorga una ventaja al jugador. Si el jugador contrario marcará nuevamente el marcador vuelve a deuce. Si un jugador se encuentra en ventaja y marca otra vez, ese jugador gana el game.

**Tie Break**

La partida gana cuando un jugador gana 3 sets. Cada set se gana si un jugador llega a 6 games, siempre y cuando tenga diferencia de 2 games con su contrincante. En caso de que ambos lleguen a 6 games ese set se definirá por Tie break. Aquí la secuencia de puntos es de 1 en 1 y gana el primero que llega a 7 puntos con diferencia de 2. En caso de llegar a 6-6 el ganador deberá estirarse hasta 8-6 y así sucesivamente.

Escriba un programa para manejar cada uno de estos requisitos de puntuación:
- Los jugadores deben ser capaces de sumar puntos.
- El juego debe ser capaz de terminar con un ganador.
- El caso de "deuce" debe ser manejado.
- El caso de "Tie Brake" debe ser manejado también.
- Después de que un juego haya sido ganado, se debe poder determinar al ganador.
- Se debe poder obtener la puntuación actual de cualquier jugador en cualquier momento durante el juego.

### (★★★) Librería

Una librería vende productos que se dividen en las siguientes categorías: libros, artículos de librería, revistas y periódicos. Las revistas y periódicos tienen una periodicidad que mediremos en cantidad de veces al mes que se publican. Todos los productos tienen un precio asociado. Los artículos de librería tienen además del precio de venta, llevan IVA en la venta. Además el kiosco tiene clientes, de los cuales almacena los datos esenciales incluyendo la dirección, y que productos han comprado en un determinado mes y que suscripciones (a revistas o periódicos) ha adquirido el cliente, los productos que compran los clientes se anotan en su cuenta corriente y se les cobra a fin de mes. El kiosco necesita como funcionalidad saber para un determinado mes cuánto debe cobrarle a cada cliente, y lo mismo para un año entero. Para los clientes registrados en el sistema hay un 5% de descuento sobre todas sus compras y además quienes realizan una suscripción anual existe un 20% de descuento sobre el precio del producto (revista o periódico) al cual se suscriben (este descuento es sobre el precio del producto y no se acumula a otros descuentos).
- Realizar el diagrama de clases correspondiente, detallando los métodos y atributos más importantes.
- Realizar un diagrama de secuencia sobre la obtención de la suma de los importes a cobrarles a los clientes registrados, para un mes determinado.

### (★★★) Truco

Escriba las clases que considere necesarias para representar un juego de Truco que permita jugar a dos personas. ¿Cómo modificaría su diseño si debiera permitir que una persona juegue contra la máquina?

### (★★) Batalla de Botes
Para el juego de la Batalla de Botes (similar a Batalla Naval, pero con barcos que ocupan un solo casillero), se requiere una cuadrícula con filas numeradas de 1 a 8 y letras de A hasta la H. Implementar las clases Bote y Tablero con los siguientes métodos, que provea las siguientes funcionalidades:
1. Agregar un bote en un casillero.
2. Saber si un casillero está ocupado o no .
3. Sacar un bote de un casillero (hundirlo).
4. Reiniciar el tablero con todos los casilleros vacíos. 
5. Ubicar 8 botes en lugares aleatorios del tablero.

### (★★) Batalla de Botes II

Extender el juego Batalla de Botes para que soporte tanto los tipos de botes y disparos como las reglas enumeradas a continuación.

**Barcos**

- Lancha
- Bote a Remo
- Yate

**Disparos**

- Convencional
- Misil

**Reglas**

Los yates solo son afectados solo por los Misiles.
Se necesitan dos disparos convencionales para hundir una Lancha.

### (★★★★) Clubes
Tras la pandemia del COVID-19, la gente empezó a valorar mucho más el deporte y la actividad al aire libre. Es por eso que ha incrementado el número de clubes y polideportivos en la ciudad, que alquilan canchas para realizar deportes. Desde Paradigmas notamos una oportunidad de mercado de proveer a estas instituciones un sistema para el alquiler de canchas de distintos deportes. Dicho sistema tiene como requerimientos:
- El sistema debe funcionar tanto para clubes de fútbol como de basquet y tenis, o cualquier combinación de estos.
- Dentro de cada deporte, puede haber variaciones, como el tipo de suelo (ejemplo, polvo de ladrillo o cemento para tenis y cemento o madera para basquet) y el tamaño de la cancha (F5 o F8, por ejemplo para futbol, cada deporte tiene sus respectivos tamaños).
- Los clubes pueden tener una cierta cantidad de canchas:
- Cada cancha tiene un nombre, un número asociado, un precio por hora y un deporte asociado.
- El propietario de cada club debe poder agregar o eliminar canchas.
- Los alquileres de cancha tienen una cancha asociada, una hora de inicio y una duración, de mínimo 1 hora, y están asociadas al nombre de un usuario.
- El precio de los alquileres depende del costo de la cancha y de la duración del alquiler. Además, se cobra un monto fijo extra de $400 si es después de las 19hs (por la luz).
- Una misma cancha no puede estar alquilada por más de una persona en un mismo momento.
- Los alquileres pueden ser cancelados en caso de ser necesario.
- Las canchas de basquet y las de fútbol deben incluir una seña de al menos 20% del costo total al momento de alquilar.
- Se debe poder consultar el monto que resta abonar de cada alquiler (puede ser la totalidad o menos, según lo pagado de seña).

### (★★★★) Pedidos

Dada la popularidad de las plataformas tipo Rappi o PedidosYa, desde una pequeña ciudad se planea armar un sistema similar para realizar repartos de comida dentro de la ciudad. Dicho sistema deberá contar con lo siguiente:
- El sistema cuenta con múltiples locales de comida, que contienen un nombre, un horario de apertura, una dirección y un puntaje.
- Cada local ofrecerá platos de comida para pedir. Cada uno debe contar con un nombre, una descripción y un costo.
- El local puede agregar, remover o editar platos de su menú.
- Un usuario puede agregar o quitar platos a su carrito de compras, al cual se le puede consultar los platos que contiene, y el costo acumulado hasta el momento.
- Los platos se pueden dividir en principales, entradas y postres. Los postres pueden tener descuentos y pueden ser compartidos entre distintos restaurantes.
- Un usuario puede realizar el pago de su pedido mediante diferentes medios de pago, efectivo, débito o billetera virtual, cada uno de los cuales tiene una lógica distinta para ejecutar el pago.
- Al momento de confirmada la compra, se genera un pedido, el cual contiene el listado de platos pedidos, el usuario, el local de comida, una hora de pedido y hora de entrega estimada
- A cada pedido se le asigna un repartidor que esté disponible (es decir, un repartidor no puede estar asignado a más de un pedido a la vez en el mismo rango horario).
- Cada repartidor tiene un nombre y un puntaje.
- Un usuario puede puntuar un local de comida y dejar un comentario
- Un usuario puede puntuar a un repartidor y dejar un comentario
