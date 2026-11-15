---
type: construct
---

# vector space basis and dimension

* When we consider [[construct-finitely_generated_vector_space]],
  a finite spanning collection can be reduced to a
  **[[construct-vector_space_basis_and_dimension|basis]]** that satisfy:
  - Being able to [[construct-linear_combination|linear combine]] into any element of the vector space.
  - Being [[construct-linear_independence|linearly independent]].
  
  Any two bases of $V$
  must have the same number of vectors. We can therefore define the
  **dimension** of $V$ as the
  number of vectors in a basis.

  * EXPANSION: A finite spanning collection can be reduced to a basis
    * If the collection is linearly dependent, at least one of its vectors
      can be expressed as a linear combination of the others. Remove that
      vector; the remaining collection still spans $V$.

      Repeat until the collection is linearly independent. Because the
      collection is finite, this process ends. The result is a basis.

      * INTERPRETATION:
        * For the zero vector space, the process may yield the empty basis.

  * EXPANSION: Any two bases of $V$ must have the same number of vectors
    * Let $B=(b_1,\ldots,b_m)$ and $C=(c_1,\ldots,c_n)$ be bases of $V$.
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

      * INTERPRETATION:
        * This argument establishes that any two bases have the same size.
          In a change-of-basis argument, once $B$ and $C$ are chosen as
          bases, their spanning and linear independence directly provide
          the coordinate expressions.

  * INTERPRETATION: define the dimension
    * The **dimension** is well-defined because its value does not depend
      on which basis we choose.
