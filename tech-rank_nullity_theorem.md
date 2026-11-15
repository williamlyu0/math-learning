---
type: technique
---

# TECH: Rank-Nullity Theorem

[[construct-function_kernel]]
[[construct-linear_map]]
[[construct-rank]]
[[construct-system_of_linear_equations_solutions]]
[[interp-RREF_in_vector_space_dimension_well_defined_proof]]

## user

Now, if we go back to the dimension being well defined argument, we develop that argument by taking a subset of the collection of vectors as the basis - they are a subset and they are linearly independent and they must be a basis.

## AI

Yes. We start with the finite spanning collection
\[
f(v_1),\ldots,f(v_m)
\]
and remove dependent vectors until the remaining vectors are linearly independent. Because each removal preserves the span, the remaining **subset of the original images** is a basis for \(\operatorname{im} f\).

So the image basis can be chosen directly from the images of the domain basis vectors. I’m following.

## user

To test linear independence, we always set a linear combination of a given collection of finite vectors and let them equal to vector 0. Here, we simply have Ax=0 where x is the input vector coordinates wrt chosen basis. A is the associated linear map matrix. Note that LHS is precisely a linear combination of the original collection of the vectors that span the image subspace

## AI

Yes. With ordered bases chosen, the columns of \(A\) are the coordinate tuples of
\[
f(v_1),\ldots,f(v_m),
\]
the collection spanning the image.

To test whether this collection is linearly independent, we ask which scalars \(x_1,\ldots,x_m\) satisfy
\[
x_1f(v_1)+\cdots+x_mf(v_m)=0_W.
\]

In coordinates, this is exactly
\[
Ax=0,
\]
where \(x=(x_1,\ldots,x_m)\). The same tuple is also the coordinate representation of the input vector \(x_1v_1+\cdots+x_mv_m\) in \(V\).

So the equation has two readings in your construction: **a dependence among the spanning images**, and **an input mapped to zero by \(f\)**.

## user

Notice that, once we have chosen enough linearly independent columns that span the image subspace, we can arbitrarily choose the coefficients for the rest of the columns to make the whole linear combination zero. This is because the rest of the columns must be representable by the linear combination of the basis columns. So, we just pick the additive inverse for each coefficients fo the basis column.

## AI

Yes. Once we choose basis columns \(A_{i_1},\ldots,A_{i_r}\) for the image, every remaining column can be expressed as a linear combination of them.

We can choose the coefficients of those **remaining columns** arbitrarily. Together, they produce some linear combination of the basis columns. Choosing the basis-column coefficients to cancel that combination makes \(Ax=0\).

Moreover, those cancelling coefficients are **unique**: two different choices would give a nontrivial linear combination of the basis columns equal to zero, contradicting their independence.

So each choice of coefficients for the remaining columns determines exactly one solution of \(Ax=0\).

## user

Now, we may have many many choices for the columns for a basis of the image. However, can we pick the columns that corresponds to the pivot columns for the basis for the image? I shall develop the argument of why this is intuitive and correct.

## AI

Yes—we can choose the **original columns of \(A\) corresponding to the pivot columns** as a basis for the image.

I’ll follow your argument for why that works. The distinction between the original columns and the columns after row reduction will be useful to keep in view.

## user

In fact, RREF of A is completely different from A. The only connection we have established so far is that, if A is representing Ax=0, then RREF of A preserves the exact same set of x as the solution.

## AI

Yes. At this point, our established connection is **equality of the solution sets of the homogeneous systems**:
\[
Ax=0
\quad\Longleftrightarrow\quad
Rx=0,
\]
where \(R\) is the RREF of \(A\).

We haven’t established that row reduction preserves the original columns, their span, or their individual values. The question is how the shared solutions let us infer something about the **original columns of \(A\)** from the pivot positions in \(R\).

I’m following your argument.

## user

Note that x's each component is exactly a coefficient for the linear combination of a specific column of the original A.

## AI

Yes. For \(x=(x_1,\ldots,x_m)\), we defined
\[
Ax=x_1A_1+\cdots+x_mA_m,
\]
where \(A_i\) is the \(i\)-th **original column of \(A\)**.

So each solution of \(Ax=0\) records a specific linear combination of those original columns that equals zero.

## user

Now, I claim that the pivot columns are linearly independent. Note that for non-pivot column coefficients or free components, and the pivot components have a single choice for each choice of free components. So, if I take all free components to be 0 and look for all possible choices of the pivot components, I get exactly one combination which is all zero. This shows that the pivot columns are linearly independent.

## AI

Yes—that proves the **original columns of \(A\) at the pivot positions** are linearly independent.

You restrict the solutions of \(Ax=0\) to those whose non-pivot coefficients are zero. Since \(Ax=0\) and \(Rx=0\) have the same solutions, RREF tells us there is exactly one choice of pivot coefficients—and the all-zero choice is clearly a solution.

So a linear combination of the selected original columns can equal zero **only when all its coefficients are zero**. That is precisely linear independence.

## user

Now, if I pick -1 for a particular non-pivot column's coefficient and pick the rest non-pivot column's coefficient to be 0, then I get precisely one choice for the pivot components. This gets me exactly how all non-pivot columns can be linearly combined from the pivot columns.

## AI

Exactly. For a non-pivot column \(A_j\), choose \(x_j=-1\) and set every other non-pivot coefficient to zero. The resulting solution of \(Ax=0\) gives
\[
-A_j+\sum_{\text{pivot }i}x_iA_i=0,
\]
so
\[
A_j=\sum_{\text{pivot }i}x_iA_i.
\]

Thus the original pivot-position columns **span all the original columns**, and you already showed they are independent. Together, they form a basis for the image.

Your argument establishes this using only the connection we had justified: **\(A\) and its RREF have the same solutions to their homogeneous systems**.

## user

Here, I would like to highlight what is used and what is not used in each argument.

We start with dimension of the image of a linear map. Because of dimension is defined through linear combination and linear dependence/independence, all our claims are done through showing a linear combination of some vectors (column vectors) and see what coefficients yields us 0 vector (linear independence part). 

The act of checking coefficients immediately gives us a homogeneous system of linear equations where the unknowns are precisely the coefficients. So, we use RREF to characterize the solution's structure.

The only reason of why we use RREF is only because RREF is a form that characterize the solution. In fact, we do not infer anything about the original A from RREF. We only use RREF to talk about solutions.

## AI

Yes. Your argument makes the chain of reasoning explicit:

1. **Dimension of the image** leads us to seek an independent spanning collection among the images of the input basis vectors.
2. **Linear dependence** leads us to ask which coefficient tuples make their linear combination zero.
3. Those tuples are exactly the **solutions of the homogeneous system** \(Ax=0\).
4. RREF gives us a convenient characterization of those solutions. Because row operations preserve the solution set, that characterization applies to the original system.
5. We interpret the solutions back as **linear combinations of the original columns of \(A\)**.

So we do reach conclusions about \(A\)’s original columns, but—as you emphasize—we reach them **through what the shared solutions say about linear combinations**, not by treating the reduced columns as the original ones.

That explains why RREF is useful in this argument: it exposes the choices available for the coefficients.

## user

So, every time we want to explore the solution structure of a system of linear equations, we can try RREF as a tool to explore the solution.

## AI

Yes. For a **finite system of linear equations over a field**, RREF is a systematic tool for exposing its solution structure:

- Whether the system is consistent.
- Which variables are free and which are determined.
- How each choice of free variables gives a solution.

In your argument, the system was homogeneous, so it was always consistent; RREF helped characterize the possible coefficient tuples.

## user

From RREF, we can identify a basis for the kernel subspace - picking 1 for a non-pivot column and 0 for the rest non-pivot columns. For each choice, the pivot column has a unique choice.

## AI

Yes. For each non-pivot column, choose \(1\) for its coefficient and \(0\) for every other non-pivot coefficient. The equations then determine the pivot coefficients uniquely, giving one solution tuple of \(Ax=0\).

To obtain vectors in the **kernel subspace of \(V\)**, interpret each of those tuples using the chosen basis of \(V\). The resulting vectors form a basis for \(\ker f\):

- They **span** the kernel because any solution is determined by its free coefficients and can be assembled from these choices.
- They are **independent** because each has a \(1\) in a different free position and \(0\) in the others.

So we have one kernel-basis vector for each non-pivot column.

## user

So, if we go for the choice of image basis of column as the pivot columns and the previous choice for the kernel subspace,

rank (dimension of the image of the linear map) = # of pivots
nullity (dimension of the kernel) = # of non-pivots

rank + nullity = # of pivots + # of non-pivots  = dimension of the input vector space

## AI

Exactly. For \(f:V\to W\), choose ordered bases and let \(A\) be its \(n\times m\) matrix. There is one column for each of the \(m=\dim V\) input basis vectors.

Your two constructions give:

- The **original columns in pivot positions** form a basis for \(\operatorname{im} f\), so \(\operatorname{rank}(f)\) is the number of pivots.
- The **solution vectors obtained from the non-pivot positions** form a basis for \(\ker f\), so \(\operatorname{nullity}(f)\) is the number of non-pivots.

Every column is one or the other. Thus
\[
\operatorname{rank}(f)+\operatorname{nullity}(f)=m=\dim V.
\]

That is the **rank–nullity theorem**. In your narrative, it emerges as counting two complementary kinds of coefficients in the same homogeneous system.

## user

Notice that the core of this theorem comes from the following system of linear equations:

A1 x1 + A2 x2 + ... + Am xm = 0

The reason of why we ever get to this is because (1) the image is precisely the linear combination of the columns of A by definition of notation, and (2) dimension is defined through linear combination and testing linear independence

## AI

Yes. In your construction, the equation
\[
A_1x_1+\cdots+A_mx_m=0
\]
is the **common point where the image and kernel meet**:

- The \(A_i\) are the coordinate tuples of the images of the input basis vectors. Their linear combinations describe the image; their independence tells us how many are needed for an image basis.
- The coefficient tuples that make that combination zero represent precisely the inputs in the kernel.

So the **same equation** lets us investigate both dimensions. RREF then reveals a complementary division of its coefficients into pivot and non-pivot positions, which produces the rank–nullity count.

The system wasn’t introduced as a trick to prove the theorem; in your narrative, it arose from the definitions and the questions we were already asking.
