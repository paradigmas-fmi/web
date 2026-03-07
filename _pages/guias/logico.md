---
layout: single
permalink: /guia-logico
title: Guía de programación lógica
---

## Guía programación lógica

Los siguientes ejercicios deben ser pensados dentro del paradigma lógico. Pueden ser resueltos utilizando otros paradigmas, pero el objetivo es resolverlos en dicho paradigma, específicamente utilizando el lenguaje Prolog.
Para resolverlos se deben utilizar los conceptos y las herramientas vistas en clase, aunque puede ser necesario investigar otras herramientas por cuenta propia.

### Ejercicios básicos

1. (★) Identificar la base de conocimientos y sus partes (hechos y reglas de inferencia) y las consultas.

   ```
   vehiculo(auto).
   vehiculo(bicicleta).
   vehiculo(moto).

   tieneMotor(auto).
   tieneMotor(moto).

   vehiculoConMotor(X) :- vehiculo(X), tienemotor(X).

   ?- vehiculoConMotor(auto).
   ```

2. (★) Clasificar los siguientes términos en variables, números, átomos o términos compuestos. Explicar brevemente cada uno.

   1. X.
   2. juan.
   3. Persona.
   4. persona(juan).
   5. 20.
   6. pedro.


3. (★) Sea la siguiente base de conocimiento:

   ```
   cursa(emiliano, paradigmas).
   cursa(camila, algo2).
   cursa(ramiro, tda).
   cursa(micaela, paradigmas).

   dicta(martin, algo2).
   dicta(martin, tda).
   dicta(mati, paradigmas).
   dicta(fede, paradigmas).
   dicta(nacho, paradigmas).

   profesor(X,Y) :- dicta(X, Z), cursa(Y, Z).
   ```

   ¿Cómo responde Prolog a las siguientes consultas?

   ```
   ?- cursa(emiliano, algo2).
   ?- cursa(emiliano, paradigmas).
   ?- cursa(emiliano, algo3).
   ?- dicta(mati, paradigmas).
   ?- dicta(fede, X).
   ?- dicta(X, paradigmas).
   ?- profesor(martin, emiliano).
   ?- profesor(nacho, X)
   ```

4. (★★) Partiendo de la relación `progenitor(a, b)` que representa que `a` es padre o madre de `b`, y la siguiente base de conocimiento:
   ```
      progenitor(a,b).  
      progenitor(a,c). 
      progenitor(b,d).
      progenitor(b,e). 
      progenitor(c,f). 
   ```

   Definir los siguientes predicados:

   * hermano(X, Y) que se cumple si X e Y son hermanos
   * primo(X, Y) que se cumple si X e Y son primos
   * nieto(X, Y) que se cumple si X es nieto de Y
   * descendiente(X, Y) que se cumple si X es descendiente de Y

   Realizar las consultas correspondientes para determinar:

   * Todos los hermanos
   * Todos los primos de `e`
   * Todos los nietos de `a`
   * Todos los descendientes de `b`

5. (★★★) Sean las siguientes palabras en italiano:

   ```
   astante , astoria , baratto , cobalto , pistola , statale .
   ```

   Se desea aplicarlas en el siguiente crucigrama:

   <img src="{{site.baseurl}}/assets/images/crucigrama.png">

   Escribir una base de datos y una consulta que encuentre una solución al problema.

6. (★★★) Dadas la siguiente base de conocimiento:

   ```
   byCar(auckland,hamilton).
   byCar(hamilton,raglan).
   byCar(valmont,saarbruecken).
   byCar(valmont,metz).

   byTrain(metz,frankfurt).
   byTrain(saarbruecken,frankfurt).
   byTrain(metz,paris).
   byTrain(saarbruecken,paris).

   byPlane(frankfurt,bangkok).
   byPlane(frankfurt,singapore).
   byPlane(paris,losAngeles).
   byPlane(bangkok,auckland).
   byPlane(singapore,auckland).
   byPlane(losAngeles,auckland).
   ```

   Escribir un predicado `travel` que permita averiguar si es posible o no viajar de una ciudad a otra, ya sea en uno o más tramos.

### Ejercicios árbol de ejecución

1. Dada la siguiente base de conocimiento y predicados:

   ```
   apruebaParcial(ricardo).
   apruebaParcial(juana).
   profesorAmigo(ricardo, profesor1).
   profesorAmigo(ricardo, profesor2).
   profesorAmigo(santiago, profesor2).
   esProfesor(profesor1).

   apruebaCursada(X) :- apruebaParcial(X), profesorAmigo(X, Y), esProfesor(Y).
   ```

   Escribir el árbol de ejecución de Prolog para la pregunta `apruebaCursada(ricardo)`.

2. Dada la siguiente base de conocimiento y predicados:

   ```
   apruebaParcial(juana).
   apruebaParcial(ricardo).
   profesorAmigo(ricardo, profesor2).
   profesorAmigo(ricardo, profesor1).
   profesorAmigo(santiago, profesor1).
   esProfesor(profesor1).

   apruebaCursada(X) :- apruebaParcial(X), profesorAmigo(X, Y), esProfesor(Y).
   ```

   Escribir el árbol de ejecución de Prolog para la pregunta `apruebaCursada(ricardo)`.

### Ejercicios sobre operadores aritméticos

1. (★) Indicar si las siguientes consultas dan true o false. Justificar.

   1. `2 is 2.`
   2. `2 is 1 + 1.`
   3. `2 = 2.`
   4. `2 = 1 + 1.`
   5. `3 + 2 = 3 + 2.`
   6. `4 =:= 4.`
   7. `4 =:= 2 + 2.`
   8. `2 < 6.`
   9. `3 > 4.`
   10. `2 =/= 2.`
   11. `6 =/= 100.`

2. (★) ¿Cuál es la diferencia entre `is`, `=:=` y `=`? ¿Cuál usarías para asignar un resultado a una variable? Asignar a X el resultado de 2 + 2 (o bien cualquier cosa que se necesite).

### Ejercicios aritmética

1. (★) Definir la relación `máximo(X,Y,Z)` que se verifique si Z es el máximo de X e Y.

2. (★★) Definir la relación `fatorial(X,Y)` que se verifique si Y es el factorial de X.

3. (★★★) La sucesión de Fibonacci es `0,1,1,2,3,5,8,13,21,. . .` en la que cada término, salvo los dos primeros, es la suma de los dos anteriores. Definir la relación `fibonacci(N,X)` que se verifique si X es el N–ésimo término de la sucesión de Fibonacci.

4. (★★★) Definir la relación potencia(Base, Exp, Resultado) que se verifique si el Resultado es igual a Base elevado al Exp.

### Ejercicios listas

1. (★) Definir la relación `cons(X,L1,L2)` que se verifique si L2 es la lista obtenida añadiéndole X a L1 como primer elemento.

2. (★) Un palíndromo es una palabra que se lee igual en los dos sentidos, por ejemplo “oso”. Definir la relación `palíndromo(L)` que se verifique si la lista L es un palíndromo.

3. (★) Definir la relación `todos_iguales(L)` que se verifique si todos los elementos de la lista L son iguales entre sí.

4. (★★) Definir la relación `max_lista(L,X)` que se verifique si X es el máximo de la lista de números L.

5. (★★★) Definir la relación `elemento_en(K,L,X)` que se verifique si X es el K–ésimo elemento de la lista L (se empieza a numerar en 1).

### Ejercicios avanzados

1. (★★★) Dada la siguiente base de conocimientos:

   ```
   supervisa(ana,bruno).
   supervisa(bruno,carla).
   supervisa(bruno,dario).
   supervisa(dario,elena).
   supervisa(carla,franco).
   ```

   1. Definir una regla `esJefe(X,Y)` que devuelva verdadero si X supervisa directa o indirectamente a Y.
   2. Mostrar el árbol DFS de ejecución de la pregunta `esJefe(ana,franco)`.


2. (★★★) Se tiene el siguiente mapa compuesto por 5 regiones (A, B, C, D y E). Se desea identificar si es posible colorear el
mapa usando solo 4 colores, de forma tal que ninguna región sea adyacente a otra región con el mismo color.

   <img src="{{site.baseurl}}/assets/images/4-color-problem.png">

3. (★★★★) Hay 4 estudiantes: Carrie, Erna, Ora y Tracy.
   Todos ellos estudian una carrera de grado y están becados (todos tienen
   becas distintas y estudian distintas carreras).
   El objetivo es identificar cual es la beca que recibe cada estudiante
   y cual es la carrera de grado que estudia a partir de las siguientes
   pistas:

   - Las becas disponibles son: 25000, 30000, 35000 and 40000 USD.
   - Las carreras disponibles son: Astronomía, Inglés, Filosofía y Física.
   - El estudiante que estudia Astronomía tiene una beca menor que la de Ora.
   - Ora estudia Ingles o Filosofía
   - El estudiante que estudia Física, tiene una beca 5000 USD mayor que la beca de Carrie.
   - Erna tiene una beca 10000 USD mayor que la beca de Carrie.
   - Tracy tiene una beca mayor que la que tiene el que estudia Ingles.


## Ejercicios de parcial

1. Dado el siguiente problema, escribir una base de conocimientos y al menos una regla en Prolog que permita resolverlo:

   > “En el mundo existen múltiples formas de viajar de un punto a otro. A partir de conocer los viajes posibles entre diferentes puntos y su costo se quiere poder responder si se puede viajar de un punto V1 a otro punto V2 disponiendo de X dinero. El viaje entre los nodos pedidos puede ser de forma directa o indirecta recorriendo varios puntos entre V1 y V2.  
   > Se conoce, por ejemplo, que el viaje para ir de Buenos Aires a Rosario tiene un costo de 100.”

2. Se dispone de los siguientes conocimientos:

   - `X` viaja en subte (hay solo uno).  
   - `X` viaja en el colectivo de la línea `N`.

   Se pide proponer una base de conocimientos y una regla `viaja_acompañado(X, Y)` que sea verdadera si y solo si `X` e `Y` comparten medio de transporte (ambos viajan en subte o toman un mismo colectivo).

3. Se dispone de una base de conocimientos con el siguiente formato:

   ```prolog
   padre(juan, ana).
   padre(ana, pedro).
   padre(pedro, lucia).
   padre(lucia, carla).
   ```

   Donde `padre(X, Y)` indica que “Y es progenitor (padre o madre) de X”. La base de conocimiento presentada es únicamente a modo de ejemplo; se requiere proponer una base de conocimientos más completa.

   Definir en Prolog el predicado `ancestroConLimite(Y, X, N)` que se cumple si `Y` es ancestro de `X` (padre, abuelo, etc.) y hay a lo sumo `N` personas en el medio entre `Y` y `X`. Por ejemplo:

   - Con `N = 0`, solo sería verdadero si `Y` es padre de `X`.  
   - Con `N = 1`, sería verdadero si `Y` es padre o abuelo de `X`.

4. Un hincha puede comprar entradas para un partido de una determinada fecha de campeonato si cumple alguna de las siguientes dos condiciones:

   - Es socio de alguno de los dos clubes que disputan el partido.  
   - Fue a ver al menos un partido en alguna de las dos fechas anteriores (sin importar a qué equipos fue a ver; pueden ser partidos entre equipos cualesquiera).

   Dada la siguiente base de conocimientos:

   ```prolog
   socio(Hernan, Atlanta).               % socio(hincha, club)
   socio(Juan, Ferro).

   asistio(Hernan, Atlanta, Almagro, 6). % asistio(hincha, club1, club2, nrofecha)
   asistio(Juan, Ferro, Brown, 5).
   asistio(Juan, Chacarita, Chicago, 8).
   ```

   Se pide escribir una regla `puedeComprar(X, C1, C2, F)` que responda si un hincha `X` está en condiciones de comprar una entrada para el partido entre `C1` y `C2` por la fecha `F`.
