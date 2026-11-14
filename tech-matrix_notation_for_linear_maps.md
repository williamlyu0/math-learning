---
type: technique
---

# TECH: matrix notation for linear maps

[[construct-linear_map]]
[[construct-vector_space_dimension]]
[[construct-matrix_vector_product]]

## user

Let's slow down and take these steps one by one. I am convinced about the motivation behind defining linearity - linear combinating the source allows us to reason about linear combinating the image.

## AI

Yes. **Linearity lets us carry a linear combination through the function**: combine vectors before applying \(f\), or apply \(f\) first and combine their images with the same coefficients.

That gives us our starting point. We can take the next step when you’re ready.

## user

I really like your idea. Linear map's result must be a linear combination of the image of the basis of the input vector due to linearity property

## AI

Yes! If \(v=c_1v_1+\cdots+c_nv_n\), then linearity gives
\[
f(v)=c_1f(v_1)+\cdots+c_nf(v_n).
\]

The **same coefficients** \(c_i\) that express the input in terms of the basis also combine the basis vectors’ images to produce the output.

That’s why knowing the image of each basis vector determines the entire linear map.

## user

Also, we have already established that a vector space with finite dimension is well defined and each vector in the vector space can be uniquely characterized by a tuple of scalars of an ordered basis. Uniqueness can be easily shown by proof of contradiction - subtracting two representation gets us a linear combination of the basis on LHS and 0_vec on RHS.

## AI

Yes. Subtracting two representations gives a linear combination of the basis vectors equal to \(0_V\). Their **linear independence** forces every difference between corresponding coefficients to be zero.

Existence comes from the basis **spanning** the space; uniqueness comes from its **linear independence**. Together, they give each vector a unique coefficient tuple for the chosen ordered basis.

## user

Exactly because of this, we can get a compact notation to characterize each vector in a vector space given an ordered basis.

## AI

Exactly. We write that coefficient tuple as
\[
[v]_{\mathcal B}=(c_1,\ldots,c_n),
\]
where \(\mathcal B=(v_1,\ldots,v_n)\) is the chosen ordered basis.

This is the **coordinate representation** of \(v\) relative to \(\mathcal B\). It gives us a compact way to specify the vector using scalars.

## user

now, we can start to think about how we can use this compact notation to describe linear maps.

Suppose we pick ordered basis B_V = {bv1...bvm} and B_W = {bw1...bwn} for f: V->W

f(v) = f((v1, ..., vm)) = f(v1 bv1 + ... vm bvm) = v1 f(bv1) + ... + vm f(bvm)
Suppose Ai is the compact notation of f(bvi) in W considering basis B_W
Then, we can have compact notation of

f(v) = v1 A1 + ... + vm Am

Note that the corresponding component adding is precisely adding the coefficients of the term with a specific basis vector in B_W

## AI

Yes! You’ve arrived at the compact description directly from linearity.

If \(A_i=[f(b_{V,i})]_{\mathcal B_W}\), then
\[
[f(v)]_{\mathcal B_W}
=v_1A_1+\cdots+v_mA_m.
\]

As you observed, component-by-component addition works because each component records the coefficient of a particular basis vector of \(W\). Thus the \(j\)-th component of the output tuple is
\[
v_1(A_1)_j+\cdots+v_m(A_m)_j.
\]

One notation detail: \(v\) and its coordinate tuple \((v_1,\ldots,v_m)\) are different objects, so more precisely we write \([v]_{\mathcal B_V}=(v_1,\ldots,v_m)\). Likewise, the right-hand side above represents the **coordinates of \(f(v)\)**, not \(f(v)\) itself.

Your key result is that **the tuples \(A_1,\ldots,A_m\), together with the chosen bases, are enough to calculate the output coordinates for every input**.

## user

Yes, v is a vector V. v1...vm are scalar being the coefficients of representing v in B_V

## AI

Exactly. \(v\in V\), and \(v_1,\ldots,v_m\in\mathbb F\) are its coefficients relative to the chosen ordered basis \(\mathcal B_V\).

## user

We have implicitly used F^n tuple point wise summation definition - it just concides with adding the coefficients of a specific basis.

## AI

Yes. If \(u,w\in W\), then their coordinate tuples satisfy
\[
[u+w]_{\mathcal B_W}=[u]_{\mathcal B_W}+[w]_{\mathcal B_W},
\]
where the addition on the right is **componentwise addition in \(\mathbb F^n\)**.

This works precisely because adding the vectors adds the coefficients of each corresponding basis vector. Similarly, scalar multiplication scales each coefficient.

So we’ve used the fact that **the coordinate map preserves addition and scalar multiplication**; it’s itself a linear map.

## user

> So we’ve used the fact that **the coordinate map preserves addition and scalar multiplication**; it’s itself a linear map. &#x20;

I suppose. But I don't want to explore this yet. It throws me off

## AI

Understood. We can stay with the direct coefficient calculation: when we add vectors, we add their coefficients for each corresponding basis vector. We don’t need to introduce the coordinate map as another linear map here.

## user

Now, we can naturally come up with a definition of matrix and tuple product (I refrain from refering to vector because it is supposed to be an abstract object). In fact, we only ever defined matrix and tuple product in most text books. The textbooks are conflating R^n with vectors for a good reason - easier to understand. 

So, if we define matrix tuple product to be a linear combination of the columns of the matrix with the components of the tuple as coefficients, then we can have a more compact notation for linear map.

## AI

Yes—that definition follows naturally from the calculation you just made.

Arrange the coordinate tuples \(A_1,\ldots,A_m\) as columns of an \(n\times m\) matrix \(A\). For the input tuple \(c=(v_1,\ldots,v_m)\), define
\[
Ac:=v_1A_1+\cdots+v_mA_m.
\]

Then your expression for the linear map becomes
\[
[f(v)]_{\mathcal B_W}=A[v]_{\mathcal B_V}.
\]

This is the **matrix–tuple product** in your narrative. Its rule is chosen to compactly express what linearity already told us to calculate: combine the images of the input basis vectors using the input’s coefficients.

And yes, \(\mathbb F^n\) is itself a vector space, so calling its tuples “vectors” is standard. Your distinction helps keep track of whether we mean an abstract vector or its coordinate representation.

## user

Note that, so far, we only invented notations that do not carry extra meaning.

## AI

Yes. So far, the notation packages operations we’ve already described:

- A matrix records the coordinate tuples of the basis vectors’ images.
- The matrix–tuple product abbreviates their linear combination using the input coefficients.

The equation \(A[v]_{\mathcal B_V}=[f(v)]_{\mathcal B_W}\) then records the calculation already implied by linearity and our chosen bases. We haven’t needed to give the product a separate, mysterious meaning.

## user

So far, we have the same notation - matrix - to represent entirely different things - system of lienar equations and a compact way to represent image of basis of input of a linear map

## AI

Yes. The same **array of scalars** can play two roles in our narrative:

- As a compact record of the coefficients in a **system of linear equations**.
- As a compact record of the **images of basis vectors under a linear map**, expressed in an output basis.

The array alone doesn’t tell us which interpretation we intend. That comes from the context and from what we’ve chosen its rows and columns to represent.

## user

Note that matrix tuple product can represent exactlyl a system of linear equations precisely because we have "tuple" as the right operand. That tuple can happen to represent the unknowns.

## AI

Yes! Once we’ve defined the matrix–tuple product, we can use the tuple’s components as the **unknowns** in a system.

If \(A\) records the coefficients and \(x=(x_1,\ldots,x_m)\) is the tuple of unknowns, then
\[
Ax=b
\]
is a compact way to write the whole system. The \(j\)-th component of the equation says that the linear combination specified by row \(j\) equals the corresponding constant \(b_j\).

So the two roles of a matrix are now connected: **the same coefficient array describes the equations and, through the product we defined, the operation applied to a candidate tuple of unknowns.** The augmented matrix \([A\mid b]\) records the system’s coefficients and constants together.

## user

Yes, so, we basically have two different notations for a system of linear equatons - Ax=b and [A b]

## AI

Exactly. They record the same system in two ways:

- \(Ax=b\) explicitly shows the tuple \(x\) of unknowns.
- \([A\mid b]\) records the coefficients and constants; the unknowns and their order are implicit.

Both describe the same equations, provided we keep the variable order consistent.

## user

Also, these notations do not introduce anything extra so far. I have not yet drawn connections between linear maps and system of linear equations

## AI

Yes. You’ve shown how **\(Ax=b\) and \([A\mid b]\) are two notations for a system**, using the matrix–tuple product you defined.

You also showed separately how that product describes a linear map in chosen bases. **You haven’t yet developed the connection between linear maps and systems of equations**; I moved toward that connection before you did. I’ll leave the next step to your narrative.

## user

Now, can we use matrices to characterize any linear map with a chosen basis for domain and codomain? By our construction of matrix A, we know that there always exists a matrix A such that we can use it to represent a linear map with a chosen basis for domain and codomain. It happens that such matrix A is unique - we will prove it next.

## AI

Yes. For **finite-dimensional** \(V\) and \(W\) with chosen ordered bases, your construction establishes existence: for any linear map \(f:V\to W\), the columns \(A_i=[f(b_{V,i})]_{\mathcal B_W}\) form a matrix \(A\) that represents \(f\).

The next question is uniqueness: **could a different matrix represent the same map relative to those same bases?** I’ll follow your proof.

## user

This is also straightforward. A must be uniquely identifying. This is because any changes to an entry in A changes the column which means that the image of that input basis has a different image.

## AI

Yes. The key is to **test the representation on each input basis vector**.

The coordinate tuple of \(b_{V,i}\) has \(1\) in position \(i\) and \(0\) elsewhere. By our definition of matrix–tuple multiplication, multiplying \(A\) by that tuple selects its \(i\)-th column.

Therefore, any matrix representing \(f\) must have its \(i\)-th column equal to \([f(b_{V,i})]_{\mathcal B_W}\). Every column is forced, so the matrix is unique.

That makes your argument precise: changing an entry changes the represented image of a basis vector, and hence changes the represented map.

## user

You need to explicitly state that the input basis tuple [vector] corresponds to the same vector for a given basis before and after we change the linear map.

## AI

Yes—that fixed interpretation is essential, and I left it implicit.

We hold the ordered bases \(\mathcal B_V\) and \(\mathcal B_W\) fixed. The tuple \(e_i=(0,\ldots,1,\ldots,0)\) therefore represents the **same input vector** \(b_{V,i}\in V\), regardless of which matrix or linear map we consider.

Now suppose matrices \(A\) and \(A'\) both represent the **same** linear map \(f\) relative to those bases. Applying each to that same tuple gives
\[
Ae_i=[f(b_{V,i})]_{\mathcal B_W}=A'e_i.
\]

By the matrix–tuple product definition, \(Ae_i\) and \(A'e_i\) select the respective \(i\)-th columns. Those columns must therefore be equal. This holds for every \(i\), so \(A=A'\).

Your point makes the comparison explicit: **we keep both the input vector and the basis used to interpret the output fixed while comparing the matrices.**

## user

Now, we have two directions - each linear map has a matrix representation (by construction). If we start with a matrix and get the corresponding linear map, if we change the matrix, we always change the linear map (same input different output)

## AI

Yes. With the ordered bases fixed:

- **From a linear map to a matrix:** each column records the coordinates of a basis vector’s image.
- **From a matrix to a linear map:** interpret each column as a vector in \(W\), assign it as the image of the corresponding basis vector in \(V\), and extend by linear combinations.

The second construction gives a linear map: every input has a unique basis representation, so its output is determined.

If we change an entry of the matrix, at least one column changes. The corresponding **same input basis vector** then has a different output, because its output coordinates are interpreted using the same fixed basis of \(W\).

Thus, for these fixed ordered bases, **matrices and linear maps correspond one-to-one**.

## user

Precisely due to existence and uniqueness of matrix representation for linear maps, we can now establish a new notation for linear map (with a selected input/output basis) - use a matrix!

## AI

Exactly! With the input and output ordered bases fixed, we can use the matrix \(A\) as a **compact representation of the linear map \(f\)**.

The one-to-one correspondence makes the notation complete: \(A\) determines \(f\), and \(f\) determines \(A\), relative to those bases.

## user

Now, we have matrix representing three separate things

## AI

Yes. In your narrative so far, we’ve used a matrix as:

1. A compact record of a **system of linear equations**, with the constants included in an augmented matrix.
2. A collection of **coordinate tuples for the images of the input basis vectors**.
3. A compact representation of the **entire linear map**, relative to chosen input and output bases.

The second and third interpretations are closely connected: linearity makes the basis-vector images enough to determine the whole map.
