---
type: technique
---

# TECH: matrix notation for system of linear equations

[[construct-matrix]]
[[construct-system_of_linear_equations]]


## user

Now, let's consider two types of systems of linear equations. First type is that all constants are 0, the second type is that all constants may potentially be non-zero.

We use matrix to represent both. The second is typically called "augmented matrix".

## AI

Yes. The standard terms are:

- **Homogeneous system:** all constants are zero, so it has the form \(Ax=0\).
- **Nonhomogeneous system:** the constants are allowed to be nonzero, so it has the form \(Ax=b\). This includes the homogeneous case if we allow \(b=0\).

\(A\) is the **coefficient matrix**. The **augmented matrix** \([A\mid b]\) records both the coefficients and constants. We can write one for either type; for a homogeneous system it is \([A\mid 0]\).

I’m following your distinction between the two systems.
