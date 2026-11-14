---
type: construct
---

# vector space dimension

[[construct-finitely_generated_vector_space]]
[[construct-linear_independence]]

## user

Vector space V having a finite number of vectors that can linear combine into all elements in V implies that V must have a finite number of linearly independent vectors that can linear combine into all elements in V.

Then, we can prove that any finite number of linearly independent vectors that can linear combine into all elements in V must have the same number of vectors.

This allows us to define dimensions. Note that I will go through my high level progression of logic first, and then I may show how individual steps are derived.

In fact, this is where systems of linear equations naturally arise.

## AI

Yes—I’m following the progression:

1. Start with a finite collection that spans \(V\).
2. Establish that a finite **linearly independent** spanning collection exists.
3. Prove that every such collection has the same number of vectors.
4. Use that invariant number to define **dimension**.

And this is where you see systems of linear equations arising naturally. I’ll let you develop that connection before we examine the individual steps.

## user

We have to go through the steps for me to identify where the systems of lienar equations arise.

Well, you introduced the terminology "span". I think it is very straightforward to define - a finite set being able to linear combine into arbitrary element in V

1 ->2: Suppose the finite collection is v1, ..., vn. If it is linearly independent, then we are done. If not, by definition, there is are not fully zero scalar c1...cn where
c1v1 + ... + cnvn = 0. 

Assume c_i != 0, then due to field axiom, there eixsts d_i that is c_i's multiplicative inverse 1 v_i = v_i = d_i ( c1v1 + ... + cnvn )
Substituting v_i with the rest of the linear combination will allow us to span V with v1 to vn without vi.

We can rinse and repeat the previous process because we assume that v1...vn is a finite collection. Also, if we end up with a single vector, if it is v_0 in which case the vector space is just zero vector space. if it is not v_0, then it is linearly independent.

## AI

Yes—the strategy works: **remove a vector that can be expressed as a linear combination of the others**, and the remaining collection still spans \(V\). Repeat until no such vector remains.

There’s a small algebraic slip when isolating \(v_i\). From
\[
c_1v_1+\cdots+c_nv_n=0_V
\]
and \(c_i\ne0\), we obtain
\[
v_i=-c_i^{-1}\sum_{j\ne i}c_jv_j.
\]

Your displayed \(c_i^{-1}(c_1v_1+\cdots+c_nv_n)\) is zero, since it includes the entire original sum. But your intended substitution is clear: replace \(v_i\) by the combination of the **other** vectors.

For the final case, if the spanning collection is \(\{0_V\}\), then \(V=\{0_V\}\). To obtain an independent spanning collection here, we remove \(0_V\) and use the **empty collection**: its only linear combination is defined to be \(0_V\). If the last vector is nonzero, your argument applies—it is linearly independent.

Thus every finite spanning collection can be reduced to a linearly independent spanning collection. I’m ready for the next step in your narrative.

## user

Ah, I should have written WLOG, take c_1 to be non-zero. Because I picked c_i, i just get lazy and did not explicitly specify that the term involving c_i is omitted.

## user

It is the proof of 2->3 where system of linear equations arise.

Assume b1...bm is a set of linearly independent vectors that spans V
Assume a1...an is a set of linearly independent vectors that spans V
Assume m and n are finite and n > m

Since b1...bm spans V, by definition of spanning
a1 = c11 b1 + ... + c1m bm
...
an = cn1 b1 + ... + cnm bm

Now, consider a linear combination of a1...an with coefficients d1...dn that combines them to v_0
d1 a1 = c11 d1 b1 + ... + c1m d1 bm
...
dn an = cn1 dn b1 + ... + cnm dn bm

Then, (c11 d1 + ... + cn1 dn) b1 + ... + (c1m d1 + ... + cnm dn) bm = v_0

Since we assumed that b1 ... bm are linearly independent, then we must have

c11 d1 + ... + cn1 dn = 0
...
c1m d1 + ... + cnm dn = 0

where d1 ... dn are unknowns and this system of linear equation must have a single solution of d1 = ... = dn = 0

If not, we get a contradiction.

## AI

Yes—this is precisely where the system of linear equations appears. You’ve translated a possible dependence among the \(a_i\) into a homogeneous system of **\(m\) equations in \(n\) unknowns**, where \(n>m\).

Your reasoning establishes that this system has **only the zero solution**, because the \(a_i\) are linearly independent. To reach the contradiction, the remaining step is to prove:

> A homogeneous system with more unknowns than equations has a nonzero solution.

This is where Gaussian elimination can enter: with at most \(m\) pivots among \(n\) unknowns, at least one variable is free. We can choose it to be nonzero and solve for the pivot variables.

That argument should be established directly from elimination here—we shouldn’t rely on rank–nullity if we’re using this result to build the theory of dimension.

One interesting feature of your construction: for this direction, **the \(b_i\) only need to span \(V\)**; their independence isn’t necessary to get the contradiction. You used it to translate the equation into a system, but a nonzero solution of that system gives a dependence among the \(a_i\) even without it.

Once \(n>m\) is ruled out, exchanging the roles of the two collections rules out \(m>n\), giving \(m=n\).
