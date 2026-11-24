---
type: interpretation
---

# INTERP: characterization of an injective linear map

* A [[construct-linear_map|linear map]] $f:V\to W$ between finitely generated vector spaces is [[construct-injective_linear_map|injective]] if and only if
  - $\operatorname{rank}(f)=\dim V$.

  * EXPANSION:
    * Choose a basis $v_1,\ldots,v_m$ of $V$. Linearity makes its images $f(v_1),\ldots,f(v_m)$ span $\operatorname{im}f$.

      If $\operatorname{rank}(f)=m$, those $m$ images are independent: otherwise one could be removed while preserving their span, giving the image a basis of fewer than $m$ vectors. Distinct inputs have different basis coefficients; independent images give different outputs for those coefficients. Hence $f$ is injective.

    * Conversely, suppose $f$ is injective. A choice of coefficients $a_i$ that are not all zero gives a nonzero input $v=\sum_i a_iv_i$. Since $f(0_V)=0_W$, injectivity implies $f(v)\neq0_W$. By linearity, $\sum_i a_if(v_i)\neq0_W$. Thus the basis images are independent; since they also span the image, they form an image basis of size $m$.

  * INTERPRETATION:
    * [[construct-rank|Rank]] is the dimension of the image. This argument works directly with the images of the chosen basis vectors.
