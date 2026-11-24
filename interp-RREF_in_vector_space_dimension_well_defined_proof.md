---
type: interpretation
---

# INTERP: How does RREF help establishing that dimension is well-defined?

* [[tech-row_reduced_echelon_form|RREF]] characterizes the solutions of a system constructed from two bases. Its solution structure shows that the bases have the same number of vectors, allowing dimension to be defined independently of the choice of basis.

  * EXPANSION: a system constructed from two bases
    * Let $B=(b_1,\ldots,b_m)$ and $C=(c_1,\ldots,c_n)$ be [[construct-vector_space_basis_and_dimension|bases]] of $V$. Since $B$ spans $V$, express each $c_i$ as a linear combination of the vectors in $B$.

      To investigate the independence of $C$, consider:
      - $d_1c_1+\cdots+d_nc_n=0_V$.

      Substitute the expressions in $B$ and collect the coefficients of $b_1,\ldots,b_m$. Since $B$ is linearly independent, the combination is $0_V$ exactly when all those coefficients are zero. This gives a homogeneous system of $m$ equations in the $n$ unknowns $d_1,\ldots,d_n$.

      Since $C$ is linearly independent, the system has only the zero [[construct-system_of_linear_equations_solutions|solution]].

  * EXPANSION: Its solution structure shows that the bases have the same number of vectors
    * If $n>m$, RREF has a free variable and the homogeneous system has a nonzero solution. Therefore $n\leq m$.

      Reversing the roles of $B$ and $C$ gives $m\leq n$. Thus $m=n$.

  * INTERPRETATION: RREF characterizes the solutions
    * [[tech-matrix_notation_for_system_of_linear_equations|Matrix notation]] records the system compactly. RREF describes its solution structure and connects the independence question to the number of equations and unknowns.

    * This is one argument for equal basis sizes. Once two bases are chosen, their spanning and independence properties directly provide the coordinate expressions used in a change of basis.
