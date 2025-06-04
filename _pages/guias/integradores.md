---
layout: single
permalink: /guia-integradora
title: Guía de Ejercicios Integradores
---

## Ejercicios multi-paradigmas

### Teóricas

1. 	Los paradigmas de programación pueden abordar diferentes dimensiones de la programación, tales como el modelo de ejecución (es decir, cómo se ejecutan las instrucciones, o qué consecuencias genera en la ejecución) o la forma de organizar y agrupar el código (por ejemplo, en objetos o funciones).

	Teniendo esto en cuenta, ¿Sobre qué eje de la programación opera el paradigma concurrente? Justificar. Mencionar ventajas y desventajas de aplicar los lineamientos de dicho paradigma en un programa.

2. 	“Con un diseño apropiado, los features cuestan poco. Este enfoque es arduo, pero continúa siendo exitoso”. - Dennis Ritchie

	¿Qué opinas de esta frase? ¿A cuál concepto visto en clase se puede relacionar? ¿En qué parte de la materia crees que se vió más presente esto? Mostrar código o ejemplificar en caso de considerarlo necesario.


### Eleccion de Paradigmas

1. 	“Se quiere diseñar un juego en línea, donde múltiples jugadores interactúan en tiempo real en un mundo virtual persistente, con estado y eventos dinámicos que afectan la experiencia de juego. El juego consiste en varios jugadores, enemigos, un mundo, items, etc.”

	¿Cuál(es) paradigma(s) de programación crees más conveniente(s) para resolver este problema? Explicar que ventajas y desventajas tendria utilizar cada uno de los siguientes paradigmas:
	- POO
	- Funcional
	- P. orientada a eventos
	Tip: Mencionar ventajas/desventajas de cada paradigma aplicado al problema propuesto, no mencionar ventajas/desventajas generales de ellos.

2. 	Se tienen que resolver los siguientes 3 problemas:
    - Se quiere crear un lector de archivos en formato JSON, que se caracteriza por tener una estructura que sigue la siguiente gramática:
		```
		<json-item> = <map> || <array> || string || number || boolean
		<map> = { key1: <json-item>, key2: <json-item>, … }
		<array> = [ <json-item>, <json-item>,  }]
		```
	- Se quiere modelar una red social, donde se quiere tomar en cuenta muchas entidades, como Usuarios, Páginas, Locales, Influencers, Medios de pago, etc etc, y todas las posibles formas de relacionarse que tengan entre ellas.
	- Se quiere brindar, mediante la información de un ciudadano, si está apto para un crédito hipotecario. La lógica se basa en deducciones del estilo del régimen laboral del usuario, si tienen co-conviviente o no, si los hijos reciben asistencia social, que el valor de los bienes que posea exceda cierto monto, etc.

	Considerando la Programación Lógica, Funcional y Orientada a Objetos, indicar cuál es el que más sentido utilizar para resolver cada uno de estos problemas, justificando la decisión.



### Avanzados y miscelaneos 

####  Concurrencia en Scala

1. 	Una librería de Scala ofrece la función mapAsync que, al igual que el map que ya conocemos, ejecuta una transformación pasada por parámetro, pero las ejecuta concurrentemente. Entonces, en lugar de retornar directamente el tipo T, retorna un Future[T] (que es el mismo concepto de CompletableFutures en Java). Al Future se le puede pedir el resultado una vez termine de realizar la tarea su thread de ejecución:
	```scala
	val unFuture: Future[T] = Future { /* hace cosas y retorna algo de tipo T */ }
	val resultado: T = Await.result(unFuture, 1.seconds)    // Se queda esperando a que termine,con un timeout de 1s; si pasa ese tiempo lanza una Exception
	```
	Teniendo eso en cuenta, se pide implementar en Scala una función:

		def contarLetrasConcurrente(List[String]]): List[Int]

	que recibe un listado de palabras, y de aquellas con menos de 5 letras, retorne la suma total de letras. El comportamiento de la función debe ser concurrente, con la utilización de mapAsync y Await.result.
	NOTA: se pueden ignorar los errores por timeout.

2. 	En Scala, el concepto de Futures es similar al de Java y sus “CompletableFutures”: ejecutan una tarea asincrónicamente y tiene un return type, y su resultado (una vez obtenido) puede ser de tipo Success o Failure:
	```scala
	val unFuture: Future[T] = Future { /* hace cosas y retorna algo de tipo T */ }
	val resultado: Success(T) | Failure(Error) 
		= Await.ready(unFuture, 5.seconds)    // Se queda esperando a que termine, con un timeout de 5s; si pasa ese tiempo sin completar resulta en un Failure
	```

	Teniendo eso en cuenta:

    1. Implementar en Scala la función def sumarOperacionesExitosas(List[Future[Int]]): Int que recibe un listado de Future[Int] (ya starteados), y que retorne la suma de aquellos cuyo resultado sea exitoso (es decir, sea de tipo Success). 
    2. Suponiendo que tenemos un timeout de 10 segundos en cada “await”, y que tenemos una lista de 100 futures ¿estimadamente cuánto tardaría como máximo una llamada a la función sumarOperacionesExitosas? Justificar la respuesta.
