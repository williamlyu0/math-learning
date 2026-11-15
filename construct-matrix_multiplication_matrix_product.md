---
type: construct
---

# matrix multiplication and matrix product

* For matrices $A$ and $B$ of compatible sizes, their **matrix product** $AB$ is the matrix whose $i$-th column is the [[construct-matrix_vector_multiplication_and_matrix_vector_product|matrix–tuple product]] of $A$ and the $i$-th column of $B$:
  - $(AB)(*,i)=A(B(*,i))$.

  * INTERPRETATION:
    * The definition packages the already-defined matrix–tuple product, applied to each column of $B$.

  * EXPANSION: matrix product
    * To motivate the rule, consider [[construct-function_composition|composable]] linear maps $f:V\to W$ and $g:W\to U$, with chosen ordered bases for all three spaces.
      Let $F$ and $G$ be their [[tech-matrix_notation_for_linear_maps|matrices]], using the same basis of $W$ for the output of $f$ and the input of $g$.

      For the $i$-th input basis vector $v_i$, $F(*,i)$ gives the coefficients of $f(v_i)$ in the chosen basis of $W$.
      By linearity, applying $g$ gives a linear combination of the images of those basis vectors with these same coefficients.
      Their coordinate tuples are the columns of $G$. Therefore:
      - $[g(f(v_i))]_{B_U}=G(F(*,i))$.

      This is the $i$-th column of $GF$. Hence $GF$ represents $g\circ f$ under the chosen bases.

      * INTERPRETATION:
        * Informally, matrix multiplication can be viewed as **matrix composition**: it records the composition of linear maps in coordinates.
