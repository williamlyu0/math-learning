---
type: interpretation
---

# INTERP: Matrix inverse and one-sided inverses

* The [[construct-matrix_inverse|matrix inverse]] constructed from a bijective linear map satisfies both matrix inverse equations. In this setting, any matrix satisfying either equation is the same inverse matrix.

  * EXPANSION: both matrix inverse equations
    * Let $A$ represent a bijective linear map $f:V\to W$ in chosen ordered bases, and let $A^{-1}$ represent $f^{-1}:W\to V$ with the bases reversed.
      The [[tech-matrix_notation_for_linear_maps_composition|matrix of a composition]] is the corresponding matrix product. The two inverse compositions are identities represented with the same input and output basis:
      - $A^{-1}A=I_V$.
      - $AA^{-1}=I_W$.

      Here $I_V$ and $I_W$ denote identity matrices for the chosen bases.

  * EXPANSION: any matrix satisfying either equation is the same inverse matrix
    * Let $B$ have the appropriate dimensions and represent a linear map $g:W\to V$ using the reversed bases.
      - If $BA=I_V$, then $g\circ f=\operatorname{id}_V$.
      - If $AB=I_W$, then $f\circ g=\operatorname{id}_W$.

      Because $f$ is bijective, either a left inverse or a right inverse must be the unique inverse function $f^{-1}$. The unique matrix representation in the chosen bases therefore gives $B=A^{-1}$, so both equations hold.

  * INTERPRETATION:
    * Matrix product and the inverse matrix follow a common pattern: interpret matrices as linear maps, perform the operation on the maps, and represent the result in chosen bases.
    * This argument assumes the represented linear map is bijective. It does not yet prove from a one-sided matrix equation alone that a square matrix represents a bijection.
