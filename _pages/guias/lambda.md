---
layout: single
permalink: /guia-calculo-lambda
title: Guía de Cálculo Lambda
---

## Ejercicios

### Comprensión de expresiones Lambda

1. (★) Escribir el equivalente de las siguientes expresiones Lambda en su versión con paréntesis completos explícitos:
   1. `λx. λy. x y`
   2. `λx. λy. λz. x y z`
   3. `λa. λb. λc. e`
   4. `(λx. xz) λy. w λw. w y z x`

2. (★★) Dibujar el árbol de sintaxis de las siguientes expresiones Lambda:
   1.  `λx. λy.x`
   2.  `(λx. λy. x) 1 2`
   3.  `λx. λy. x`
   4.  `λf. λx. f x`
   5.  `(λx. λy. λz. xy) z`

3. (★★) ¿Cuáles de los siguientes pares de expresiones `e1` y `e2` tienen el mismo árbol de sintaxis abstracto? 

    | nº   | e1        | e2           |
    | ---- | --------- | ------------ |
    | i    | λx.y      | λx.(y)       |
    | ii   | x y       | (y x)        |
    | iii  | x y z     | (x y) z      |
    | iv   | x y z     | x (y z)      |
    | v    | λx.y z    | λx.(y z)     |
    | vi   | λx.y z    | (λx.y) z     |
    | vii  | λx.x      | λy.y         |
    | viii | λx.λy.x y | λx. (λy.x y) |
    | ix   | λx.λy.x y | (λx. λy.x) y |
    | x    | λx.λy.x y | (λx. λy.x) y |

4. (★) Identificar las variables ligadas y libres en las siguientes expresiones:
   1. `λx.x y λz.x z`
   2. `(λx.x y) λz.w λw.w z y x`
   3. `x λz.x λw.w z y`
   4. `λx.x y λx.y x`
   5. `f (λx.x y) λy.y x`
   6. `(λw.λz.z (λx.w x)) x y`
   7. `(λf.((λx.(f (x x))) (λx.(f (x x))))) (λx.x)`
   8. `(λu.λf.λx. u ((λu.λx.x (u f)) (λu. x) (λf. f))) (λf.λx.f(f x))`

5. (★★) Para las expresiones (5) y (6) del punto anterior, realizar las conversiones-α necesarias para que no existan variables de igual nombre presentes tanto como ligadas como libres.


### Desarrollo de expresiones Lambda

1. (★★) Desarrollar las siguientes sustituciones:
   1. `(f (λx.x y) λz.x y z)[x→g]`
   2. `(λx.λy.f x y)[y→x]`
   3. `((λx.f x) λf.f x)[f→(g x)]`
   4. `(λf.λy.f x y)[x→(f y)]`

2. (★★) Realizar la reducción-β de las siguientes expresiones, con ambos conjuntos de parámetros indicados: 

    | Expression           | 1st Params             | 2nd Params             |  
    | -------------------- | ---------------------- | ---------------------- |
    | `λx.λy.x y`          | `(λb.b F T)), F`       | `(λb.b T F)), T`       |
    | `λx.λy.λw. w y x`    | `T, T, (λp.λq.p q p))` | `(λb.b), (λf.f), z`    |
    | `λw.λf.λx.f x f w w` | `T, (λy.λx.x), T`      | `T, (λy.λx.y), F`      |
    | `λn.λf.λx.f (n f x)` | `(λf.λx.x)`            | `(λf.λx.f(f x))`       |
    | `λp.λq.p p q`        | `(λx.λy.x), (λx.λy.y)` | `(λx.λy.y), (λx.λy.y)` |


3. (★★) Realizar la reducción-β de las siguientes expresiones, utilizando la estrategia _call-by-name_ y la estrategia _call-by-value_: 
   1. `(λg.g 5) (λx.(add x 3))`
   2. `(λx.x x x) (λx.x x x)`
   3. `(λc.c (λa.λb.b)) ((λa.λb.λf.f a b) p q)`
   4. `(λf.f add (f mul (f add 5))) (λg.λx.g x x)`


### Lógica Booleana y Matemática de Church

1. (★★★) Considerando los valores booleanos en Cálculo Lambda como las funciones `True=λx.λy.x` y `False=λx.λy.y`, escribir las expresiones Lambda que emulen las siguientes operaciones booleanas:
   1. AND
   2. OR
   3. NOT
   4. NAND
   5. NOR
   6. IF
   7. XOR
   8. EQ (igualdad booleana)

2. (★★★★) Escribir las expresiones Lambda que describan las siguientes funciones matemáticas en términos de números de Church:
   1. `f(x) = x * 4`
   2. `f(x) = x * x`
   4. `f(x,y) = x + y`
   5. `f(x,y) = x * y`
   6. `f(x,y,z) = x + y + z`
   7. `f(x,y,z) = x * y * z`
   8. `f(x,y,z) = (x + y) * z`
   9. `isZero = f(n) = n == 0`

### Cálculo Lambda Tipado

1. (★) Analizar las siguientes expresiones, identificando el tipo de las variables, la validez de las expresiones y el tipo de la expresión:
   1. `λx:Int.x`
   2. `λx:Int.y`
   3. `λx:Int.x + 1`
   4. `(λx:Int.x + 1) true`
   5. `λx:Int→Bool.λy:Int.x y`
   6. `λx:Bool. if 0 then true else false`
   7. `λx:Bool. if x then 1 else false`
   8. `λx:Int. if iszero x then 0 else x`
   9. `(λx:Bool. if not x then 0 else 1) (not y)`

2. (★★) Demostrar, usando las reglas de inferencia, si las siguientes expresiones son válidas o no:
   1. `{} ⊢ if true then 0 else 1 : Int`
   2. `{} ⊢ (λx:Int.x + 40) 2 : Int`
   3. `{x : Int, y : Bool} ⊢ if true then false else (λz : Bool. z) true : Bool`
   4. `{} ⊢ if λx: Bool. x then 0 else 1 : Int`
   5. `{x : Bool → Int, y : Bool} ⊢ x y : Int`
   6. `{y : Bool} ⊢ (λx:Bool→Int.x y) (λx:Bool.if not x then 0 else 10) : Int`

3. (★★★) Mediante el uso de las reglas de inferencia, inferir, de ser posible, los tipos de las siguientes expresiones:
   1. `if x then 1 else z`
   2. `(λx.x + 40) 2`
   3. `λx.if iszero x then y else (λz. z) true`
   4. `λx.λy.λz.if iszero (x y) then y else z + 1`
   5. `λx.λy.λz.if not (x y z) then y else z + 1`
   6. `iszero ((λx.x y) (λx.if not x then 0 else 10))`
   7. `λa.λb.if iszero (( λx. f x ) (a + b)) then a else b`
   8. `λx.λy. not (f (if not(g x) then y else (x+y)))`
   9. `λa.if iszero (( λb.f (a+b)) c ) then (λx. g x) a else c`
   10. `λx.λy.λz.if not (iszero (g y) ) then f (x + z) else not y`


### Adicionales (difíciles)

1. Escribir la expresión Lambda que reciba un número de Church y obtenga su factorial.

## Referencias y material útil

* [Syntax of the Lambda Calculus \[Open DSA\]](https://opendsa.cs.vt.edu/ODSA/Books/PL/html/Syntax.html)
* [Syntax of Lambda Calculus \[Alexander Kurz\]](https://hackmd.io/@alexhkurz/S1D0yP8Bw#Parsing-Concrete-Syntax)
* [CMSC330 Fall 2013 Practice Problems \[CS Department University of Maryland\]](https://www.cs.umd.edu/class/fall2017/cmsc330/tests/prac8-soln-fall13.pdf)

