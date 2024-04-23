---
layout: single
permalink: /guia-calculo-lambda
title: Guía de Calculo Lambda
---

## Ejercicios

### Comprensión de expresiones Lambda

1. (★) Escribir el equivalente de las siguientes expresiones Lambda en su versión con parentesis completos explicitos:
   1. `λx. λy. x y`
   2. `λx. λy. λz. x y z`
   3. `λa. λb. λc. e`
   4. `(λx. xz) λy. w λw. w y z x`

2. (★★) Dibujar el árbol de sintaxis de las siguientes expresiones Lambda:
   1.  `λx y.x`
   2.  `(λx y. x) 1 2`
   3.  `λx. λy. x`
   4.  `λf. λx. f x`
   5.  `(λx. λy. λz. xy) z`

3. (★★) Cuales de los siguientes pares de expresiones e1 y e2 tienen el mismo árbol de sintaxis abstracto? 

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

4. (★) Identificar las variables ligadas y libres en las siguientes expresiones:
   1. `λx.x y λz.x z`
   2. `(λx.x y) λz.w λw.w z y x`
   3. `x λz.x λw.w z y`
   4. `λx.x y λx.y x`
   5. `f (λx.x y) λy.y x`
   6. `(λw.λz.z (λx.w x)) x y`

5. (★★) Para las expresiones (4), (5) y (6) del punto anterior, realizar las conversiones-α necesarias para que no existan variables de igual nombre con presencia tanto en ligadas como libres.


### Desarrollo de expresiones Lambda

1. (★★) Desarrollar las siguientes sustituciones:
   1. `(f (λx.x y) λz.x y z)\[x→g\]`
   2. `(λx.λy.f x y)\[y→x\]`
   3. `((λx.f x) λf.f x)\[f→(g x)\]`
   4. `(λf.λy.f x y)\[x→(f y)\]`

2. (★★) Realizar la reduccion-β de las siguientes expresiones, con ambos conjuntos de parametros indicados: 
| expr               | params1              | params2           |  
| ------------------ | -------------------- | ----------------- |
| λx.λy.x y          | (λb.b F T)), F       | (λb.b T F)), T    |
| λx.λy.λw. w y x    | T, T, (λp.λq.p q p)) | (λb.b), (λf.f), z |
| λw.λf.λx.f x f w w | T, (λy.λx.x), T      | T, (λy.λx.y), F   |


3. (★★) Realizar la reduccion-β de las siguientes expresiones, utlizando la estrategia _call-by-name_ y la estrategia _call-by-value_: 
   1. `(λg.g 5) (λx.(add x 3))`
   2. `(λx.x x x) (λx.x x x)`
   3. `(λc.c (λa.λb.b)) ((λa.λb.λf.f a b) p q)`
   4. `(λf.f add (f mul (f add 5))) (λg.λx.g x x)`

4. (★★) Encontrar la forma normal de las siguientes expresiones normalizables:
   1. TBD


### Logica Booleana y Matematica de Church

1. (★★★) Considerando los valores booleanos en Calculo Lambda como las funciones `True=λx.λy.x` y `False=λx.λy.y`, escribir las expresiones Lambda que emulen las siguientes operaciones booleanas:
   1. AND
   2. OR
   3. NOT
   4. NAND
   5. NOR
   6. EQ (igualdad booleana)

2. (★★★★) Escribir la expresiones Lambda que describan las siguientes funciones matematicas:
   1. `f(x) = x * 4`
   2. `f(x) = x * x`
   4. `f(x,y) = x + y`
   5. `f(x,y) = x * y`
   6. `f(x,y,z) = x + y + z`
   7. `f(x,y,z) = x * y * z`
   8. `f(x,y,z) = (x + y) * z`

3. (★★★★★) Escribir la expresión Lambda que reciba un numero de Church y obtenga su factorial.


## Referencias y material util

* [Syntax of the Lambda Calculus [Open DSA]](https://opendsa.cs.vt.edu/ODSA/Books/PL/html/Syntax.html)
* [Syntax of Lambda Calculus [Alexander Kurz]](https://hackmd.io/@alexhkurz/S1D0yP8Bw#Parsing-Concrete-Syntax)
* [CMSC330 Fall 2013 Practice Problems [CS Department University of Maryland]](https://www.cs.umd.edu/class/fall2017/cmsc330/tests/prac8-soln-fall13.pdf))

