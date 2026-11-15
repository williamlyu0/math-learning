---
type: technique
---

# TECH: rank–nullity theorem

* For a [[construct-linear_map|linear map]] $f:V\to W$ with finite-dimensional domain:
  - $\operatorname{rank}(f)+\operatorname{nullity}(f)=\dim V$.

  Here $\operatorname{rank}(f)$ is the [[construct-rank|dimension of the image]]; $\operatorname{nullity}(f)$ is the dimension of the kernel $\ker f=\{v\in V:f(v)=0_W\}$.

  * EXPANSION:
    * First suppose $W$ is finite-dimensional. Choose ordered bases, and let $A$ be the [[tech-matrix_notation_for_linear_maps|matrix of $f$]]. Its $m$ columns $A_1,\ldots,A_m$ are the coordinates of the images of the $m=\dim V$ input basis vectors.

      The image is spanned by those images. To investigate their independence, consider:
      - $A_1x_1+\cdots+A_mx_m=0$.
      - In compact notation, $Ax=0$.

      The same solution tuple $x$ also represents an input vector in $\ker f$.

      * INTERPRETATION:
        * The image question and the kernel question meet in the same homogeneous system: its columns describe the spanning images, while its solutions describe inputs mapped to zero.

    * Let $R$ be the [[tech-row_reduced_echelon_form|RREF]] of $A$. Row operations preserve the solution set, so $Ax=0$ and $Rx=0$ have exactly the same solutions. RREF reveals pivot and free positions.

      The **original columns of $A$** in pivot positions form a basis for the image:
      - Set all free coefficients to zero. The only solution has all pivot coefficients zero, proving these original columns are independent.
      - For each non-pivot position $j$, set its free coefficient to $-1$ and all other free coefficients to $0$. The resulting solution expresses $A_j$ as a linear combination of the original pivot-position columns.

      Thus $\operatorname{rank}(f)$ equals the number of pivot positions.

      * INTERPRETATION:
        * We use RREF to characterize solutions, then interpret those solutions as linear combinations of the original columns. The reduced columns need not equal the original columns.

    * For each free position, choose $1$ there and $0$ in every other free position; the pivot coefficients are determined. The resulting solution tuples, interpreted in the input basis, form a kernel basis:
      - They span because every solution is determined by its free coefficients.
      - They are independent because each has a distinct free position containing $1$, with $0$ in all the others.

      Thus $\operatorname{nullity}(f)$ equals the number of free positions. Every input-basis position is either pivot or free, proving the formula.

  * INTERPRETATION:
    * If $W$ is not finite-dimensional, the image of the finite-dimensional domain is still finite-dimensional. Apply the argument to the same map with its codomain restricted to $\operatorname{im}f$; its image and kernel are unchanged.
