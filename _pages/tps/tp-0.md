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
Mandar un mail a algoritmos3.fiuba@gmail.com donde el asunto tenga el formato `TP0 - <padron>`. El mail debe contener adjunto un archivo único el cual debe tener extension `.pl`. So el formato no es el pedido la entrega no será tenida en cuenta.

## Fecha de entrega
La entrega debe estar completa teniendo en cuenta todo lo mencionado en este documento y debe realizarse con anterioridad a las 23:59hs del 02/09/2025. El TP se considera aprobado una vez que se recibe un mail con la respuesta de la entrega, dicho mail NO es automático. La nota también puede revisarse en la página de notas de la materia.

## Enunciado

Hay 4 músicos de los Beatles: John, Paul, George y Ringo. Cada uno tocaba un instrumento diferente y tenía un día de nacimiento distinto. El objetivo es determinar qué instrumento tocaba cada uno y en qué día nació, a partir de las siguientes pistas:

- Los instrumentos son: Guitarra rítmica, Bajo, Guitarra solista y Batería.
- Los días son: 7, 9, 18 y 25.
- Paul tocaba el Bajo.
- La persona que tocaba la guitarra solista nació el día 25 o 7.
- La persona que tocaba la guitarra rítmica nació antes que Paul.
- La persona que tocaba la batería tiene un día de nacimiento anterior al de George.
- La persona que tocaba el bajo nació 9 días después que la que tocaba la guitarra rítmica.
- Ringo tiene un día de nacimiento anterior que la persona que tocaba la guitarra rítmica.
- John nació el día 7.

El sistema debe responder la pregunta `?-musicos(P, J, G, R)`
