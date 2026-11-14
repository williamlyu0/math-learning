---
type: technique
---

# TECH: row reduced echelon form (RREF)

[[tech-matrix_notation_for_system_of_linear_equations]]
[[tech-Gaussian_elimination]]
[[construct-system_of_linear_equations]]
[[construct-system_of_linear_equations_solutions]]

## user

There are three operations that can be performed on these matrices and these three operations does not change the set of solutions at all.

1. swap two rows
2. multiply a row by a scalar
3. add a row multiplied by a scalar to another row

To prove that the set of solutions do not change, we simply note that each operation is reversible.

## AI

Yes. These are the **elementary row operations**, with one essential condition: in operation 2, the scalar must be **nonzero**.

Your reversibility argument works because each operation preserves every existing solution, and its inverse is also an allowed row operation. So neither direction can lose solutions.

For a nonhomogeneous system, the operations must act on the **entire augmented row**, including the constant.

## user

But in fact, these elementary row operations are just notational equivalence to the Gaussian elimination steps.

## AI

Yes. Each row represents an equation, and each elementary row operation records the corresponding operation on that equation.

**Gaussian elimination** is a systematic use of those operations to simplify the system. The matrix records the coefficients and constants while leaving the repeated variable names implicit.

So the operations on the matrix have their meaning in the underlying system of equations.

## user

It's not just having their meaning in the underlying system of equations, we can literally perform the Gaussian elimination steps and write the new matrix notation for the new system of equations, it is the same as performing elementary row operations on the matrices.

I don't even consider matrix to be something distinctive other than a convenient notation at this point.

## AI

Yes—that’s stronger and more precise than what I said.

At this point in your narrative, a matrix is a **compact notation for a system of equations**. Performing an elementary row operation on the matrix gives exactly the same new notation as performing the corresponding operation on the equations and then writing down their coefficients again.

So we can reason entirely with the equations; the matrix simply saves us from repeatedly writing the variables. I’m following your choice to introduce it that way.

## user

it's like a compact way to write multiplication. 
24 x 35
= (20 + 4) x (30 + 5)
= ( 2 x 3 ) x 100 + (2 x 5) x 10 + (4 x 3) x 10 + 4 x 5 x 1 
= 6 x 100 + (10 + 12) x 10 + 20 x 1
= 6 x 100 + (20 + 2) x 10 + (20 + 0) x 1
= 6 x 100 + (20 + 2 + 2) x 10 + 0 x 1 (performing carry in the compact notation)
= (6 + 2) x 100 + 4 x 10 + 0 x 1 (performing carry in the compact notation)
= 8 x 100 + 4 x 10 + 0 x 1
= 840

## AI

Yes! In long multiplication, the compact layout **implicitly tracks place values**, and “carrying” records the redistribution you wrote out explicitly.

Likewise, in the augmented-matrix layout, the positions implicitly track **which variable each coefficient belongs to**, and row operations record manipulations of the equations.

In both cases, the compact procedure and the expanded calculation describe the same work. Seeing that correspondence lets you reconstruct the procedure instead of treating its rules as something to memorize.

## user

Also, this is exactly how CoT works for LLM to perform native mathematics. LLM is the same as human - in fact the multiplication involved is just the 1x1 to 9x9 multiplication table and 1+1 to 9+9 addition table.

## AI

Yes—the **written decomposition** gives both a person and an LLM a way to carry out multiplication using small, familiar operations while keeping intermediate results in view. Long multiplication compresses that decomposition using position and carries; writing it out makes the same structure explicit.

There’s a connection to your matrix narrative too: **the notation acts as a workspace for organizing repeated operations**. With LLMs, a written chain of reasoning can serve as such a workspace, though the steps we see don’t necessarily reveal every internal process that produced them.

## user

Yeah, I was talking about some earlier papers. Now, let's go back to linear algebra. So, we want to characterise, for a general finite system of linear equations (finite unknowns and finite number of equations), we typically end up with a form where we can derive the solution easily. The form is typically a different unknown on the LHS for a couple equations with a linear combination of other unknowns on the RHS. In fact, we can specify arbitrary values for the RHS unknowns and we will get a unique value for each LHS unknown. So, the RHS unknowns are "free" and LHS unknowns are "not free".

## AI

Yes. For a **consistent** finite system, row reduction can put it into a form where each pivot variable is expressed in terms of free variables and a constant.

For example:
\[
\begin{aligned}
x_1 &= 2-3x_3,\\
x_2 &= 1+4x_3.
\end{aligned}
\]

Here \(x_3\) is free: we can choose any field element for it. Once we do, the equations determine \(x_1\) and \(x_2\) uniquely.

The other possible outcome is that elimination reveals an inconsistency, such as \(0=1\); then there are no solutions.

So I see the characterization you’re building: **for a consistent system, every solution corresponds to exactly one choice of values for the free variables.**

## user

And, with matrix notation, we can more easily characterize this form. That is the row reduced echelon form.

## AI

Yes. **Reduced row echelon form** (RREF) gives us a precise way to recognize that arrangement from the matrix:

- Each nonzero row has a leading \(1\), called a **pivot**.
- Each pivot is the only nonzero entry in its column.
- Pivots move to the right as we move down the rows, and zero rows are at the bottom.

For a **consistent augmented system**, pivot columns among the variable columns identify the non-free variables; the remaining variable columns identify the free variables. The constants are recorded in the augmented column.

Thus the matrix layout makes the solution structure visible without repeatedly writing out all the equations.

## user

Notice that, RREF is simply a "language" we invented to accurately talk about the free/non-free variables and the "consistency of a system". It offers nothing extra from looking at the "final form" of Gaussian elimination.

## AI

Yes. In your narrative, **RREF gives a precise description of the final arrangement of the equations**: which variables are determined, which are free, and whether the system is consistent.

The matrix layout makes that arrangement compact and easy to recognize. The solution structure is already present in the corresponding equations; the term “RREF” gives us a way to refer to that form precisely.

## user

matrix is a compact notation and we can talk about characterization using the language for this compact notation.

## AI

Exactly. **The matrix is the compact notation; RREF is a description of a particular arrangement within that notation.** We can translate both the operations and the characterization back into statements about the equations.

## user

I have seen different definitions for augmented matrices. Some move the constant to LHS (basically negating all the "constant" column - column corresponds to the constant). It may be a good idea to stay consistent with the notation. However, there is no absolute right/wrong notation as long as we are clear what it represents.

## AI

Yes. For \(Ax=b\), we can write the equations as either
\[
Ax=b\quad\longleftrightarrow\quad[A\mid b],
\]
or
\[
Ax-b=0\quad\longleftrightarrow\quad[A\mid -b],
\]
provided we explain what the last column represents.

Let’s use **\(Ax=b\) and \([A\mid b]\)** consistently unless you choose otherwise. The notation itself isn’t the mathematical issue; clarity about the represented equations is what matters.

## user

I'd like to point out that we have not defined matrix vector product yet. In fact, we are now only proposing using matrix as a short-hand notation (without extra information) for systems of linear equations so that we can (1) have a more consistent way to talk about the steps taken in Gaussian elimination, and (2) a way to characterize the "final easy form" in Gaussian elimination for us to identify "free"/"non-free" unknowns.

## AI

You’re right—I used \(Ax=b\) before we had defined what \(Ax\) means. That introduced an operation your narrative hasn’t needed.

At this stage, we have an **array of coefficients and constants** as shorthand for the equations. The row operations correspond to operations on those equations, and RREF gives us language for describing their final form and identifying free and non-free unknowns.

I’ll stay within that construction as you continue.
