---
type: interpretation
---

# INTERP: How RREF helps defining vector space dimension

* Let $B=(b_1,\ldots,b_m)$ and $C=(c_1,\ldots,c_n)$ be [[construct-vector_space_basis_and_dimension|bases]] of $V$.
  Since $B$ spans $V$, express each $c_i$ as a linear combination of
  the vectors in $B$.

  To investigate whether $C$ is linearly independent, consider:
  - $d_1c_1+\cdots+d_nc_n=0_V$.

  Substituting the expressions for $c_1,\ldots,c_n$ in terms of $B$
  gives a linear combination of $b_1,\ldots,b_m$. Because $B$ is
  linearly independent, its coefficients must all be zero. This gives
  a homogeneous system with:
  - $m$ equations.
  - $n$ unknowns $d_1,\ldots,d_n$.

  Since $C$ is linearly independent, this system has only the zero
  [[construct-system_of_linear_equations_solutions|solution]].

  [[tech-row_reduced_echelon_form|RREF]] characterizes its solution
  structure: if $n>m$, there is a free variable and hence a nonzero
  solution. Thus $n\leq m$.

  Reversing the roles of $B$ and $C$ gives $m\leq n$. Therefore $m=n$.

  * INTERPRETATION: RREF characterizes its solution structure
    * [[tech-matrix_notation_for_system_of_linear_equations|Matrix notation]]
      lets us express the system compactly and describe its RREF.

    * RREF is the language we use to describe the solutions of the
      constructed system. It lets us connect linear independence to
      the number of equations and unknowns.
