---
type: interpretation
---

# INTERP: Function surjectivity and right inverses

* A function with a [[construct-function_right_inverse|right inverse]] is [[construct-function_surjectivity|surjective]]. Conversely, constructing a right inverse from an arbitrary surjective function requires choosing a preimage for each element of its codomain.

  * EXPANSION: A function with a right inverse is surjective
    * If $f:X\to Y$ and $f\circ h=\operatorname{id}_Y$, then for every $y\in Y$, $f(h(y))=y$. Thus every $y$ is reached by $f$.

  * EXPANSION: choosing a preimage for each element of its codomain
    * Surjectivity ensures that every $y\in Y$ has at least one preimage. If we choose one $h(y)$ for each $y$, then $f\circ h=\operatorname{id}_Y$.

    * INTERPRETATION:
      * For arbitrary sets, the general assertion that every surjective function has a right inverse is equivalent to the **axiom of choice**. The need for choice can arise with nonempty sets.

  * INTERPRETATION: choosing a preimage
    * For a surjective linear map $f:V\to W$ between finitely generated vector spaces, choose a basis $w_1,\ldots,w_n$ of $W$ and choose $v_i\in V$ with $f(v_i)=w_i$.
      For $w=a_1w_1+\cdots+a_nw_n$, define $h(w)=a_1v_1+\cdots+a_nv_n$.
      The unique basis coefficients make $h$ well-defined and linear, and $f(h(w))=w$. Thus $h$ is a linear right inverse.
