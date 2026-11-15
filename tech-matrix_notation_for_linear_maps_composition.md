---
type: technique
---

# TECH: matrix product and linear map composition

* With compatible chosen bases, the matrix representing a [[construct-function_composition|composition]] of linear maps is the [[construct-matrix_multiplication_matrix_product|product]] of their matrices.

  * EXPANSION:
    * Let $f:V\to W$ and $g:W\to U$ be linear maps between finite-dimensional spaces over the same field. Choose ordered bases $B_V,B_W,B_U$ and let $F,G$ represent $f,g$ using those bases as in [[tech-matrix_notation_for_linear_maps|matrix notation for linear maps]].
      The same basis $B_W$ is used for the output of $f$ and the input of $g$.

      For each $v\in V$:
      - $[f(v)]_{B_W}=F[v]_{B_V}$.
      - $[g(f(v))]_{B_U}=G(F[v]_{B_V})=(GF)[v]_{B_V}$.

      Thus $GF$ represents $g\circ f$.

  * INTERPRETATION:
    * Matrix multiplication can be viewed as recording composition in coordinates: $f$ acts first, then $g$.
