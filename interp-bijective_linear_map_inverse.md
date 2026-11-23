---
type: interpretation
---

# INTERP: Inverse of a bijective linear map

* The inverse function of a bijective [[construct-linear_map|linear map]] is also linear. It is therefore an invertible linear map whose inverse is the original map.

  * EXPANSION: inverse function
    * Let $f:V\to W$ be bijective and linear. By the [[tech-inverse_of_a_bijective_function|well-definedness of the inverse of a bijective function]], it has a unique inverse function $g=f^{-1}:W\to V$.

  * EXPANSION: also linear
    * Choose arbitrary $u,w\in W$ and $c\in\mathbb F$. Let $u'=g(u)$ and $w'=g(w)$; these are the unique preimages of $u$ and $w$.

      By linearity of $f$:
      - $f(u'+w')=f(u')+f(w')=u+w$.
      - $f(cu')=cf(u')=cu$.

      Since $g$ assigns each output its unique preimage:
      - $g(u+w)=u'+w'=g(u)+g(w)$.
      - $g(cu)=cu'=cg(u)$.

      Thus $g$ is linear.

  * INTERPRETATION:
    * This argument does not require finite-dimensional spaces. Finite-dimensionality will be used when representing these maps by finite matrices.
