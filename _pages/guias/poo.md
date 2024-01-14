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

## Patrones

Dado el siguiente código identificar y justificar todos los *principios de diseño* se violan.
Proponer e implementar una posible solución usando los *patrones* vistos en clase. Justificar por qué el patrón elegido resuelve los problemas mencionados.\

1.
```
class Producto {
   private double precio;

   Producto(String nombre, double precio) {
       this.precio = precio;
   }

   double getPrecio() {
       return precio;
   }
}

class Caja {
   private List<Producto> productos;

   Caja(List<Producto> productos) {
       this.productos = productos;
   }

   double getPrecio() {
       double total = 0;
       for (int i = 0; i < productos.size(); i++) {
           total += productos[]
       }
       return total;
   }
}

class CarritoCompra {
   private List<Producto> productos = new ArrayList<>();
   private List<Caja> cajas = new ArrayList<>();

   // ...

   double calcularTotal() {
       double total = 0;
       for (Producto producto : productos) {
           total += producto.getPrecio();
       }
       for (Caja caja : cajas) {
           total += caja.getPrecio();
       }
       return total;
   }
}
```

2.
```
class PedidoRestaurant {
    private String principal;
    private String entrada;
    private String bebida;
    private String postre;

    public PedidoRestaurant(String entrada, String principal, String bebida, String postre) {
        this.entrada = entrada;
        this.principal = principal;
        this.bebida = bebida;
        this.postre = postre;
    }

    // Código asociado a responsabilidades del pedido de restaurant
}

public class Main {
    public static void main(String[] args) {
        Cocina cocina = new Cocina();

        PedidoRestaurant pedidoNacho = PedidoRestaurant new PedidoRestaurant(null, "Milanesa", "Coca", "Flan");
        PedidoRestaurant pedidoMati = PedidoRestaurant new PedidoRestaurant("Empanada de Carne", "Pastel de Papa", "Agua", null);
        PedidoRestaurant pedidoFede = PedidoRestaurant new PedidoRestaurant(null, "Asado", "Agua saborizada", null);

        cocina.prepararPedido(pedidoNacho);
        cocina.prepararPedido(pedidoMati);
        cocina.prepararPedido(pedidoFede);
    }
}
```

3.
```
interface Servicio {
    void realizarOperacion();
}

class ServicioReal implements Servicio {
    public void realizarOperacion(Usuario usuario) {
        if (!validarUsuarioAutorizadoParaOperacion(usuario)) {
            System.out.println("Usuario no autorizado");
            return;
        }

        // Lógica de la operación
        System.out.println("Operación realizada.");
    }

    private boolean validarUsuarioAutorizadoParaOperacion(Usuario usuario) {
        // devuelve si el usuario está autorizado o no
    }
}

public class Cliente {
    public static void main(String[] args) {
        Servicio servicio = new ServicioReal();
        servicio.realizarOperacion();
    }
}
```

4.
```
enum Color {
    ROJO,
    AMARILLO,
    VERDE
}
public class Semaforo {

    private Color colorActual;

    public Semaforo() {
        colorActual = Color.ROJO;
    }

    public void cambiarColor() {
        if (this.colorActual == Color.ROJO) {
            this.colorActual = Color.VERDE;
        } else if (this.colorActual == Color.AMARILLO) {
            this.colorActual = Color.ROJO;
        } else if (this.colorActual == Color.VERDE) {
            this.colorActual = Color.AMARILLO;
        }
    }
}
```

5.
```
class PedidoRestaurant {
    private String principal;
    private String entrada;
    private String bebida;
    private String postre;
    private String acompanamento;

    public PedidoRestaurant(String entrada, String principal, String acompanamento, String bebida, String postre) {
        this.entrada = entrada;
        this.principal = principal;
        this.acompanamento = acompanamento;
        this.bebida = bebida;
        this.postre = postre;
    }

    // Código asociado a responsabilidades del pedido de restaurant
}

public class Main {
    public static void main(String[] args) {
        Cocina cocina = new Cocina();

        PedidoRestaurant pedidoNacho = PedidoRestaurant new PedidoRestaurant(null, "Milanesa", null, "Coca", "Flan");
        PedidoRestaurant pedidoMati = PedidoRestaurant new PedidoRestaurant("Empanada de Carne", "Pastel de Papa", null, "Agua", null);
        PedidoRestaurant pedidoFede = PedidoRestaurant new PedidoRestaurant(null, "Asado", "Ensalada", "Agua saborizada", null);
        PedidoRestaurant pedidoNico = PedidoRestaurant new PedidoRestaurant(null, "Entraña", null, "Soda", "Ensalada de fruta");

        cocina.prepararPedido(pedidoNacho);
        cocina.prepararPedido(pedidoMati);
        cocina.prepararPedido(pedidoFede);
        cocina.prepararPedido(pedidoNico);
    }
}
```

## Diseño
Analizar y modelar la solución al problema usando los conceptos de diseño y programación orientada a objetos vistos en clase, realizando un diagrama de clases UML. Explicar y justificar las decisiones de diseño que creas conveniente

1. Tras la pandemia del COVID-19, la gente empezó a valorar mucho más el deporte y la actividad al aire libre. Es por eso que ha incrementado el número de clubes y polideportivos en la ciudad, que alquilan canchas para realizar deportes. Desde Algoritmos3 notamos una oportunidad de mercado de proveer a estas instituciones un sistema para el alquiler de canchas de distintos deportes. Dicho sistema tiene como requerimientos:
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

2. Dada la popularidad de las plataformas tipo Rappi o PedidosYa, desde una pequeña ciudad se planea armar un sistema similar para realizar repartos de comida dentro de la ciudad. Dicho sistema deberá contar con lo siguiente:
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
