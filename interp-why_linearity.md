---
type: interpretation
---

# INTERP: What inspires us to come up with linearity?

[[construct-function_linearity]]
[[construct-linear_combination]]

## user

So, this is what puzzles me. 
I don't know what prompted people to come up with this property.
I don't know the reason why defining matrix product multiplication can happen to lead us to associating a unique matrix for each linear map - linear function from vector space to vector space.
I don't know the reason why defining matrix multiplication can happen to correspond to composition of linear maps. 

All materials I have seen just present these definitions and proofs. I have yet seen any talking about why this is defined this way and how come there is such a "huge concidence" that we get this exact matching.

## AI

I think the apparent coincidence comes from **the direction in which the definitions are presented**. Once we ask how to record and compose linear maps using bases, the familiar matrix operations are natural consequences of the choices we make.

First, why consider **linearity**? It gives a function a powerful property: knowing what it does to certain vectors tells us what it does to their linear combinations. For example,
\[
f(c_1v_1+c_2v_2)=c_1f(v_1)+c_2f(v_2).
\]

So, if \(v_1,\ldots,v_n\) span \(V\), knowing \(f(v_i)\) for each \(i\) determines \(f\) everywhere. If they are a **basis**, we can also choose their images independently: each vector in \(V\) has a unique expression in terms of them.

Now suppose \(V\) and \(W\) have chosen ordered bases. Each image \(f(v_i)\) can be expressed as a list of coefficients relative to the basis of \(W\). **Place those lists as columns**, and we have a matrix. The basis choices and column convention give us one such matrix for each linear map.

Finally, to compose two maps, we substitute the coefficient expressions for the first map’s outputs into the second map’s expressions—much like your treatment of systems of equations. **The resulting coefficient rule is matrix multiplication.**

So one way to reconstruct the narrative is:

1. Seek functions determined by their action on a spanning collection.
2. Record those actions using coefficients relative to bases.
3. Ask how to calculate the coefficients of a composition.
4. Give that calculation the name **matrix multiplication**.

That’s a conceptual motivation, not yet a claim about the historical order of discovery. We can work through it step by step; I suspect the substitution in step 3 is where the “huge coincidence” will become especially tangible.
