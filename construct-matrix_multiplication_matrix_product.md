---
type: construct
---

# matrix multiplication and matrix product

[[construct-matrix]]
[[construct-matrix_vector_multiplication_and_matrix_vector_product]]

## user

I should quote "derive" as matrix multiplication is a definition. I figured out how we can arrive at this definition.

Since each linear map has a unique associated matrix, suppose we have linear map f and g, then, it becomes natural to ask what is the matrix of g compose f.

## AI

Yes! With ordered bases chosen for the domain, intermediate space, and codomain, \(g\circ f\) has a unique associated matrix.

So the natural question is: **given the matrices representing \(f\) and \(g\), how can we construct the matrix representing \(g\circ f\)?**

I’m following.

## user

Suppose f: V->W and g: W-> U
Now, let's look back at the matrix notation for a linear map, each column is "what is the representation of the image of the basis vector in the basis chosen for the domain in codomain"

## AI

Yes. For \(f:V\to W\), each column records **the image of one chosen basis vector of \(V\), expressed in the chosen basis of \(W\)**.

Similarly, each column for \(g:W\to U\) records the image of a chosen basis vector of \(W\), expressed in the chosen basis of \(U\).

I’m following.

## user

So, g compose f's matrix is simply the following:
each column is the image (from g compose f) of a vector of a chosen basis of V in U

## AI

Yes. For each chosen basis vector \(v_i\) of \(V\), the \(i\)-th column is the **coordinate tuple of \(g(f(v_i))\)** relative to the chosen basis of \(U\).

So we can derive the composite’s matrix one column at a time.

## user

I shall define the following notation.

BV, BW, BU are choices of basis of V, W, U.
Assume the dimension of V, W, U to be m, n, p

BV(x) is the x-th vector in the ordered basis of BV

For a matrix M, M(*,x) denotes the x-th column of M

Let's see what's M_{g compose f}(*, 1) should be

## AI

Yes. With **ordered bases** \(B_V,B_W,B_U\) fixed, we have
\[
M_{g\circ f}(*,1)
=
[g(f(B_V(1)))]_{B_U}.
\]

That says: take the first basis vector of \(V\), apply \(f\), then \(g\), and express the result in the chosen basis of \(U\).

I’m following your derivation—go ahead.

## user

```
f(BV(1)) = M_f(*,1) as coefficients that linear combine BW
= M_f(1, 1) BW(1) + ... + M_f(n, 1) BW(n)

g(f(BV(1)) = M_f(1, 1) g(BW(1)) + ... + M_f(n, 1) g(BW(N))
= M_f(1, 1) M_g(*, 1) + ... + M_f(n, 1) M_g(*, n)  # note that this is the definition of associated matrix columns ( I implicitly assumed that the columns are supposed to be linear combination of BU )
= M_g M_f(1, 1)  # where each component is the coefficient for linear combinating BU
```



I am using verbatim to not have \* to be treated as escape character.

I made a typo
M_g M_f(*, 1)

## AI

Yes! With that correction, you’ve arrived at the first column of the composite’s matrix using the **matrix–tuple product we already defined**:

$$
M_{g\circ f}(*,1)=M_g\,M_f(*,1).
$$

The first column of $M_f$ gives the coefficients for expressing $f(B_V(1))$ in the basis $B_W$. By linearity of $g$, those same coefficients tell us how to combine $g(B_W(1)),\ldots,g(B_W(n))$. Their coordinate tuples in $B_U$ are the columns of $M_g$.

One small notation detail, which you already flagged: $g(f(B_V(1)))$ is a vector in $U$, while $M_gM_f(*,1)$ is its **coordinate tuple** in $B_U$. So the precise relationship is:

$$
[g(f(B_V(1)))]_{B_U}=M_gM_f(*,1).
$$

I’ll leave the next step to you: you now have a way to find the *first* column of the composite’s matrix.

## user

Note that we have already defined matrix tuple product naturally. We are using that notation here. Notice that this is precisely the definition of matrix product - each resulting column is the left operand multiplied by the corresponding column of the right operand


```
A B(*, i) = A B(*, i)
```

## AI

Yes! We already defined **matrix–tuple multiplication** as a linear combination of the matrix’s columns. Your derivation shows that we can apply that existing operation to each column of $M_f$ to get the corresponding column of $M_{g\circ f}$.

That motivates defining **matrix–matrix multiplication** column by column:

$$
(AB)(*,i)=A\bigl(B(*,i)\bigr).
$$

The parentheses make the distinction visible: on the left, $AB$ is a matrix–matrix product; on the right, $A$ multiplies a tuple.

So the familiar definition is a concise way to assemble the columns you found. You arrived at it by asking what the matrix of a composite linear map must be.

## user

I think this is the "intuition" of why we define matrix multiplication in the first place. It does not resemble any common sense multiplication at all.

## AI

Yes! In your narrative, matrix multiplication is motivated by a concrete question: **what matrix represents two linear maps applied in succession?**

That question leads us to apply the matrix–tuple operation to each column. Only afterward do we give the resulting operation on two matrices the name **matrix multiplication**.

The word “multiplication” doesn’t explain why its rule looks the way it does. Your construction gives that rule a reason to exist.

## user

If it were up to me, I would probably call this "matrix composition"

## AI

“Matrix composition” makes sense in your narrative: the operation constructs the matrix representing the **composition of two linear maps**. It also hints at why the order matters—$M_gM_f$ represents applying $f$ first, then $g$.

The standard term is still **matrix multiplication**, but “composition” brings its role in your construction to the foreground.

## user

So, we won't have students cancelling out equal matrices on both sides. We should be "composing an inverse on both sides" instead

## AI

Yes! **“Compose with an inverse”** makes the necessary conditions and the side of the operation explicit.

For example, if $AB=AC$ and $A$ has an inverse, we can multiply **both sides on the left** by $A^{-1}$:

$$
A^{-1}(AB)=A^{-1}(AC),
$$

giving $B=C$. We cannot automatically cancel $A$: an inverse may not exist, and the side matters because matrix multiplication need not be commutative.

I can see why “composition” helps here: you’re explicitly *undoing an operation* rather than mechanically crossing out a symbol.

## user

Note that this is indeed literally what is happening with function composition. Note that matrix compose/multiplication is just a notation for linear function composition. We just established that this notation is "well-defined" and makes sense

## AI

Yes, exactly. In the construction we’ve developed, matrices represent linear maps **with chosen bases**, and matrix multiplication records their composition. The basis chosen for the intermediate space $W$ must be the same for both representations.

So when an inverse linear map exists, multiplying by its matrix corresponds literally to composing with that inverse. “Undoing” is happening at the level of the linear maps; the matrix calculation records it in coordinates.

## user

We are done with matrix multiplication definition now! By discussing with you, I cleared up a previous point of confusion for me - why we even want to associate matrix with linear maps and how matrix multiplication/compose operation being defined in such way

## AI

That brings your narrative to a satisfying point, William! We started with matrices as a way to record the images of basis vectors. Then, once we wanted to represent a **composition** of linear maps, the rule for multiplying matrices followed from the notation we had already built.

I think the distinction you drew is valuable: the operation is a *definition*, but the question it answers gives us a reason to define it that way. We can now use matrix multiplication without it feeling like a rule that appeared out of thin air.

## user

Also, whenever we see matrix multiplication, we can think of it as composing linear maps
