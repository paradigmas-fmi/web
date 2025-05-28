---
layout: single
permalink: /guia-concurrencia
title: Guía de programación concurrente
---

> “Objects are abstractions of processing. Threads are abstractions of schedule.”
> —James O. Coplien

## Ejercicios básicos

### 1. Creación de threads y recursos compartidos

a. Escribir un programa que cree un hilo a partir de la clase Thread y otro hilo implementando la interfaz Runnable. Ambos hilos deben imprimir mensajes en la consola en un ciclo infinito. Observar el orden en que se imprimen los mensajes.

b. Modificar el programa anterior para que los hilos compartan el acceso a un contador de tipo int. Ambos hilos deben, en un ciclo infinito, imprimir el valor actual del contador y luego incrementarlo.

c. ¿Qué operaciones mencionadas arriba deben ser sincronizadas para evitar condiciones de carrera? Usar bloques synchronized para ello. <b>Pista:</b> Keep Synchronized Sections Small

d. Definí en tus palabras qué es cada concepto en el contexto de la programación concurrente:
i. una race condition
ii. el principio de exclusión mutua
iii. un monitor

<b>BONUS:</b> Investigar sobre la clase <a src="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/atomic/AtomicInteger.html">AtomicInteger</a> de Java. Utilizar los métodos proporcionados por la clase para asegurar el comportamiento esperado en el punto b.

### 2. Pares e impares

Escribir un programa que utiliza 2 threads, uno imprimiendo números pares y el otro números impares, alternándose desde 1 hasta un número dado.

a. Leer sobre el funcionamiento de la clase <a src="https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/locks/ReentrantLock.html">ReentrantLock</a> y la clase <a src="https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/locks/Condition.html">Condition</a>.

b. Resolver el problema utilizando instancias de ambas clases

### 3. Movimientos de inventario

Modela un sistema de control de inventario donde varias sucursales pueden transferir stock entre sí. Haz una clase Sucursal con un campo stock, y una clase MovimientoStock para mover stock de una sucursal a otra. Implementa una simulación con N sucursales, M movimientos y T threads, asegurando la integridad del stock total.

## Ejercicios intermedios

### 4. Vendedores y zapatillas

Reformulamos el ejercicio anterior para el caso específico de una sucursal de un local de zapatillas. Deben existir vendedores, quienes tienen a disposición un sistema de control de inventario por talle de zapatillas. Dicho sistema debe contemplar tanto ingresos de talles como ventas.

- Con él, pueden chequear si hay existencias de un determinado talle de zapatillas en la sucursal.
- Múltiples vendedores pueden consultar simultáneamente el stock de un determinado talle de zapatillas.
- Pero, solamente 1 vendedor puede bajar al depósito a la vez a buscar el talle solicitado por el cliente o a la puerta trasera a recibir al camión con los ingresos.
- Mientras ese vendedor se encuentra en el depósito o en el camión, ningún vendedor puede consultar por el stock de ningún par de zapatillas, es decir, debe decir al cliente “Mmm talle 43? Cuando vuelva mi compañero te digo si me queda” (se queda esperando a que se vuelva a habilitar el sistema).

Para simplificar el problema, abstraer al cliente, solamente realizar consultas de stock y acciones por parte del vendedor. Debe existir una clase Vendedor y una clase SistemaDeInventario. Se supone que cada vendedor atiende un hilo de pedidos de varios clientes.

<b>Preguntas</b>

1. ¿Cuáles son los potenciales problemas del comportamiento pedido?

2. ¿Qué pasaría si no paran de llegar camiones de ingresos o si un vendedor estrella no parara de bajar al depósito a buscar pares?

3. De lo contrario, ¿qué pasaría si el local recibe muchísimas consultas de clientes?

4. Justificar qué operación de movimiento de stock debería verse favorecida en esta situación y cuál debería postergarse lo máximo posible.

### 5. May the Force be with you

Se desea diseñar un sistema para la reserva de asientos en una proyección especial de <b>'Star Wars: Episodio III’</b> por su 20° aniversario, donde múltiples usuarios se enfrentan en un duelo Jedi por seleccionar y reservar asientos de forma concurrente para una misma función.

- El sistema debe garantizar que cada asiento sea asignado a un único usuario, evitando condiciones de carrera mediante mecanismos de sincronización adecuados.
- Cada asiento puede estar en estado disponible, bloqueado (cuando un usuario lo selecciona temporalmente) o reservado (cuando se confirma la compra), y los bloqueos deben tener una duración limitada para liberar automáticamente los asientos no confirmados.
- Las operaciones deben ser atómicas y reflejarse en tiempo real para todos los usuarios conectados, asegurando la integridad del proceso de reserva bajo concurrencia.

### 6. Cola sincronizada

Implementar una clase ColaSincronizada, que recibe como parámetro un número entero N indicando su capacidad máxima. Si la cola está llena, el método encolar debe bloquear hasta que haya lugar y el elemento haya sido encolado satisfactoriamente. Si la cola está vacía, desencolar debe bloquear hasta que haya un elemento para desencolar.

### 7. Suma en paralelo

Crea un programa en Java que calcule la suma de un gran arreglo de números en paralelo utilizando varios hilos. Dividir el arreglo en partes iguales y asignar cada parte a un hilo para que calcule su suma. Luego, sumar los resultados parciales para obtener el resultado final.

Analizar diferencias entre realizarlo con:

1. Threads (SO)
2. VirtualThreads + Executors (JVM)

### 7. Productor-Consumidor

Implementar el ejercicio anterior utilizando un modelo de productor-consumidor, utilizando dos colas sincronizadas Q1 y Q2:

1. En 1 thread: Separar el arreglo en partes iguales. Encolar en Q1 cada una de las secciones.
2. En K threads: Desencolar de Q1 una sección del arreglo y sumar los elementos. Encolar en Q2 el resultado.
3. En 1 thread: Desencolar todos los resultados parciales de Q2 y sumarlos.

## Ejercicios avanzados

### 8. La criba de Eratóstenes

Existe un algoritmo muy simple para encontrar todos los números primos menores que un número natural dado ideado por el matemático griego Eratóstenes.

El algoritmo consiste en eliminar los múltiplos de cada número primo, dejando solo los números primos restantes.

<b>Proceso:</b>

1. Se crea una lista de números naturales desde 2 hasta el número límite que se desea usar.
2. Se marca el primer número primo (2) y se eliminan todos sus múltiplos (4, 6, 8, 10, etc.) de la lista.
3. Se toma el siguiente número no marcado (3) y se eliminan todos sus múltiplos (9, 15, 21, etc.). Se continúa este proceso con los números no marcados hasta que el cuadrado del número primo actual sea mayor que el número límite.
4. Los números que quedan sin marcar son los números primos menores que el número límite.

Plantear este mismo algoritmo de manera concurrente, creando <b>Filtros</b> simultáneos y conectados a través de una <b>BlockingQueue</b>.

- Cada Filtro deberá ejecutarse en su propio thread y encargarse de filtrar los múltiplos del factor primo actual, descartandolos en el mismo thread.
- En caso de que un número no sea múltiplo del factor primo, deberá encolarse para ser atendido por el siguiente Filtro.
- Se espera que se impriman todos los primos hasta el número n por pantalla, sin necesariamente devolver esa lista.

### 9. Problema de los filósofos cenando

Implementar una solución al problema de los filósofos cenando utilizando hilos en Java. En este problema, varios filósofos comparten una mesa redonda y alternan entre pensar y comer. Sin embargo, solo pueden comer si pueden agarrar dos tenedores adyacentes. Sincronizar correctamente para evitar deadlocks.

### 10. Problema del barbero durmiente

Imagine una barbería hipotética con un barbero, un sillón y una sala de espera con n sillas (n puede ser 0) para los clientes. Se aplican las siguientes reglas:

1. Si no hay clientes, el barbero se duerme en el sillón.
2. Si un cliente duerme, debe despertar al barbero.
3. Si un cliente llega mientras el barbero está trabajando, se marcha si todas las sillas están ocupadas y se sienta en una silla vacía si está disponible.
4. Cuando el barbero termina de cortar el pelo, inspecciona la sala de espera para ver si hay clientes esperando y se duerme si no hay ninguno.

Estas reglas suponen los siguientes posibles problemas:

1. Existe el riesgo de que el barbero duerma mientras un cliente espera a que lo atienda para un corte de pelo, porque todas las acciones (revisar la sala de espera, entrar en la tienda, tomar una silla en la sala de espera) toman una cierta cantidad de tiempo. un cliente puede llegar y encontrar al barbero cortando el pelo, por lo que regresa a la sala de espera para tomar asiento, pero mientras camina de regreso a la sala de espera, el barbero termina el corte de pelo y se dirige a la sala de espera, que encuentra vacía (porque el cliente camina lentamente o fue al baño) y, por lo tanto, se queda dormido en la silla del barbero.
2. Cuando dos clientes llegan al mismo tiempo cuando solo hay un asiento vacío en la sala de espera y ambos intentan sentarse en la única silla; solo la primera persona en llegar a la silla podrá sentarse.

Modelar el problema y proponer una solución utilizando Locks, Conditions, Semaphores o cualquier otra herramienta de sincronización provista por Java.
