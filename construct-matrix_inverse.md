---
type: construct
---

# matrix inverse

* For an $n\times n$ [[construct-matrix|matrix]] $A$ over $\mathbb F$, interpret $A$ as a linear map $f:\mathbb F^n\to\mathbb F^n$ using the standard ordered basis for both spaces.
  If $f$ is bijective, define the **inverse matrix** $A^{-1}$ to be the matrix representing $f^{-1}$ in those same bases, with input and output reversed.

  * INTERPRETATION:
    * The [[interp-bijective_linear_map_inverse|inverse function]] is linear, so it has a matrix representation. Uniqueness of the inverse function and of its matrix representation determines $A^{-1}$ uniquely.
    * More generally, if $A$ represents a bijective map between finite-dimensional spaces in chosen ordered bases, its inverse matrix represents the inverse map using those bases in reverse order. The matrix is the same: it is the inverse of the coordinate map represented by $A$.
    * The [[interp-matrix_inverse_and_one_sided_inverses|matrix product equations]] follow from this construction and characterize the one-sided inverses when the represented map is bijective.
