---
layout: single
permalink: /tp0
title: Trabajo Práctico 0
---

## Indicaciones

### Grupos de trabajo
El trabajo se desarrollará de forma individual.

### Tecnología
El trabajo debe realizarse en Prolog siguiendo los lineamientos vistos en clase. Las únicas clausulas disponibles van a ser las clausulas de Horn.

### Tiempo de trabajo
Se contará con 1 semana completa para llevar a cabo el desarrollo del TP.


## Modalidad de entrega
Mandar un mail a algoritmos3.fiuba@gmail.com donde el asunto tenga el formato `TP0 - <padron>`, por ejemplo `TP0 - 12345`. El mail debe contener adjunto un archivo único el cual debe tener extension `.pl`. Si el formato no es el pedido la entrega no será tenida en cuenta.

## Fecha de entrega
La entrega debe estar completa teniendo en cuenta todo lo mencionado en este documento y debe realizarse con anterioridad a las 23:59hs del 26/03/2026. El TP se considera aprobado una vez que recibe una respuesta con nota "Aprobado" de la entrega, dicho mail NO es automático. La nota también puede revisarse en la página de notas de la materia.

## Enunciado

Hay 4 amigos fanáticos de los juegos de mesa: Ana, Bruno, Carla y Diego.  
Cada uno tiene un juego favorito distinto y obtuvo un puntaje distinto en un torneo.  
El objetivo es determinar qué juego prefiere cada uno y qué puntaje obtuvo, a partir de las siguientes pistas:

- Los juegos son: `ajedrez`, `go`, `catan` y `carcassonne`.
- Los puntajes posibles son: `10`, `20`, `30` y `40`.
- El juego favorito de Bruno es el `catan` o el `ajedrez`. 
- La persona que juega a `ajedrez` obtuvo menos puntos que Carla.
- Diego obtuvo exactamente 10 puntos más que quien juega a `carcassonne`.
- La persona que juega a `catan` obtuvo exactamente 20 puntos menos que Carla.
- Ana obtuvo más puntos que Bruno.

El sistema debe responder la pregunta `?-jugadores(A, B, C, D)`.  
Cada elemento devuelto tiene que tener la estructura `jugador(Nombre, Juego, Puntaje)`.
