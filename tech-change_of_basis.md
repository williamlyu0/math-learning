---
type: technique
---

# TECH: change of basis

* A **change of basis** describes the same vector using a different [[construct-vector_space_basis_and_dimension|ordered basis]].
  Suppose $B=(b_1,\ldots,b_n)$ and $C=(c_1,\ldots,c_n)$ are ordered bases
  of a [[construct-finitely_generated_vector_space|finite-dimensional vector space]] $V$.

  * INTERPRETATION: describes the same vector
    * For $v\in V$, the coordinate tuples $[v]_B$ and $[v]_C$ describe
      the same vector, although the tuples may differ.

  * EXPANSION: change of basis
    * Express $v$ as a linear combination of vectors in $B$.
      Replace each $b_i$ with its expression in $C$.
      Let $A_i=[b_i]_C$ be the $C$-coordinate tuple of $b_i$.
      Then:
      - $[v]_C=([v]_B)_1A_1+\cdots+([v]_B)_nA_n$.
      - Taking $A$ to be the matrix with columns $A_1,\ldots,A_n$,
        this is $[v]_C=A[v]_B$. (See [[construct-matrix_vector_multiplication_and_matrix_vector_product]])

      * INTERPRETATION: $A_i=[b_i]_C$
        * Each $A_i$ exists because $C$ spans $V$, and is unique because
          $C$ is linearly independent. Thus the construction determines $A$.

      * INTERPRETATION: $[v]_C=A[v]_B$
        * $A$ is the unique matrix that performs this coordinate change
          for every $v\in V$.

  * INTERPRETATION: change of basis
    * We can view this through the **identity linear map** $V\to V$,
      choosing $B$ as its input basis and $C$ as its output basis.
      The [[tech-matrix_notation_for_linear_maps|matrix representing this map under these choices]] is $A$.

    * Reversing the basis choices gives a matrix $A'$ satisfying
      $[v]_B=A'[v]_C$. Composing the coordinate changes in either order
      returns the original coordinates, so $A'A=I$ and $AA'=I$.
