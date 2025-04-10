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
Mandar un mail a algoritmos3.fiuba@gmail.com indicando donde el asunto tenga el formato `<padron> - TP0`. El mail debe contener adjunto un archivo único.

## Fecha de entrega
La entrega que debe estar completo teniendo en cuenta todo lo mencionado en este documento debe realizarse con anterioridad a las 23:59hs del 26/03/2025.

## Enunciado

Hay 4 científicos: Newton, Tesla, Curie y Darwin. Cada uno hizo un descubrimiento diferente y nació en un año distinto. El objetivo es determinar qué descubrimiento hizo cada uno y en qué año nació, a partir de las siguientes pistas:

- Los descubrimientos son: Gravitación, Electricidad, Radiactividad y Evolución.
- Los años de nacimiento son: 1643, 1809, 1856 y 1867.
- La persona que descubrió la Radiactividad nació después que Tesla.
- Curie nació en 1867 o 1856.
- El que descubrió la Gravitación nació 166 años antes que quien estudió la Evolución.
- Newton nació antes que la persona que descubrió la Electricidad.
- Darwin descubrió la evolución.
- El año de Curie es mayor al de la persona que invento la electricidad.

El sistema debe poder responder la pregunta `?-cientificos(N, T, C, D)`
