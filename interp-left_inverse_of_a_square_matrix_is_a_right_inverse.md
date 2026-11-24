---
type: interpretation
---

# INTERP: For square matrices $A$ and $B$, why does $BA=I$ force $AB=I$?

* Let $A$ and $B$ be $n\times n$ matrices over the same field. If $BA=I_n$, then $AB=I_n$.

  * EXPANSION:
    * Let $f:V\to W$ and $g:W\to V$ be the linear maps represented by $A$ and $B$ in the chosen bases. Since [[tech-matrix_notation_for_linear_maps_composition|matrix multiplication represents composition]], $BA=I_n$ means $g\circ f=\operatorname{id}_V$. Thus $f$ [[interp-function_injectivity_and_left_inverse|has a left inverse and is therefore injective]].
    * By the [[interp-characterization_of_an_injective_linear_map|characterization of an injective linear map]], $\operatorname{rank}(f)=\dim V$. Since $A$ is square, $\dim V=\dim W$. Hence $\operatorname{rank}(f)=\dim W$, so the [[interp-characterization_of_a_surjective_linear_map|characterization of a surjective linear map]] gives surjectivity.
    * Thus $f$ is bijective. By [[tech-inverse_of_a_bijective_function|uniqueness of the inverse of a bijective function]], its left inverse $g$ equals $f^{-1}$. Consequently $g$ is also a right inverse, so $f\circ g=\operatorname{id}_W$. In matrix form, $AB=I_n$.
