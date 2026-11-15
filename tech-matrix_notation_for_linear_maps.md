---
type: technique
---

# TECH: matrix notation for linear maps

* A [[construct-linear_map|linear map]] between finite-dimensional vector spaces is represented by a unique matrix after choosing [[construct-vector_space_basis_and_dimension|ordered bases]] for its domain and codomain. Its columns record the coordinates of the input basis vectors' images.

  * EXPANSION: columns record the coordinates
    * Let $f:V\to W$ be linear, with ordered bases $B_V=(v_1,\ldots,v_m)$ and $B_W$.
      For an input $v=x_1v_1+\cdots+x_mv_m$, linearity gives:
      - $f(v)=x_1f(v_1)+\cdots+x_mf(v_m)$.

      Set $A_i=[f(v_i)]_{B_W}$ and assemble the tuples $A_i$ as the columns of $A$. Taking coordinates in $B_W$ gives:
      - $[f(v)]_{B_W}=x_1A_1+\cdots+x_mA_m=A[v]_{B_V}$.

      The last equality is the definition of [[construct-matrix_vector_multiplication_and_matrix_vector_product|matrix–tuple multiplication]].

      * INTERPRETATION:
        * Spanning gives each vector a basis expression; linear independence makes the coefficients unique. Adding or scaling vectors adds or scales their coordinate coefficients componentwise.
        * $v$ is an abstract vector; $[v]_{B_V}$ is its coordinate tuple.

  * EXPANSION: represented by a unique matrix
    * Existence follows from the construction above. For uniqueness, let another matrix represent the same $f$ with the same bases. The $B_V$-coordinate tuple of $v_i$ has a single $1$ in position $i$, so the product selects that matrix's $i$-th column. The column must be $[f(v_i)]_{B_W}$. Thus every column is fixed.

    * Conversely, with the bases fixed, any matrix with the corresponding dimensions determines a linear map: interpret each column as a vector in $W$ and extend its assignment to all inputs by linear combinations.

      * INTERPRETATION:
        * The input basis vector and the basis used to interpret the output stay fixed when comparing two matrices. Changing an entry changes an output for one of those same input vectors.
        * A matrix representation depends on the linear map and the two chosen ordered bases.
