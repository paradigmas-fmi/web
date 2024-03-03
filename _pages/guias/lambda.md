---
layout: single
permalink: /guia-calculo-lambda
title: Guía de Calculo Lambda
---

## Ejercicios

### Preguntas teóricas

1. TBD

### Comprensión de expresiones Lambda

1. Escribir el equivalente de las siguientes expresiones Lambda en su versión con parentesis explicitos:
   1. λx. λy. x y
   2. λx. λy. λz. x y z
   3. λa. λb. λc. e

2. Escribir el equivalente de las siguientes expresiones Lambda en su versión con parentesis explicitos:
   1. λx. λy. x y
   2. λx. λy. λz. x y z
   3. λa. λb. λc. e

3. Cuales de los siguientes pares de expresione e1 y e2 tiene el mismo árbol de sintaxis abstracto? 

| nº   | e1        | e2           |
| ---- | --------- | ------------ |
| i    | λx.y      | λ x . y      |
| ii   | x y       | (x y)        |
| iii  | x y       | ((x y))      |
| iv   | x y z     | (x y) z      |
| v    | x y z     | xyz          |
| vi   | x y z     | x (y z)      |
| vii  | λx.y z    | λx.(y z)     |
| viii | λx.y z    | (λx.y) z     |
| ix   | λx. x     | λy. y        |
| x    | λx.λy.x y | λx. (λy.x y) |
| xi   | λx.λy.x y | (λx. λy.x) y |


4. Dibujar el árbol de sintaxis de las siguientes expresiones Lambda:
    1.  λx y.x
    2.  (λx y. x) 1 2 
    3.  λx. λy. x
    4.  λf. λx. f x
    5.  (λx. λy. λz. xy) z

5. Clasificar las siguientes expresiones Lambda en funciones (aquellas que definen unicamente una funcion) o programas/aplicaciones (aquellas que son resoluciones en valores concretos):
   1. TBD

### Desarrollo de expresiones Lambda

1. Escribir las expresiones Lambda que emulen las siguientes operaciones booleanas:
    1. AND
    2. OR
    3. NOT
    4. NAND
    5. NOR

2. Escribir la expresiones Lambda que describan las siguientes funciones matematicas:
    1. `f(x) = x * 4`
    2. `f(x) = x * x`
    3. `f(x) = x / 2`
    4. `f(x,y) = x + y`
    5. `f(x,y) = x * y`
    6. `f(x,y,z) = x + y + z`
    7. `f(x,y,z) = x * y * z`
    8. `f(x,y,z) = (x + y) * z`

3. Escribir la expresión Lambda que reciba un número y obtenga su factorial.
