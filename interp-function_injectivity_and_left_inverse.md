---
type: interpretation
---

# INTERP: Function injectivity and left inverses

* For a function $f:X\to Y$ with nonempty $X$, [[construct-function_injectivity|injectivity]] is equivalent to the existence of a [[construct-function_left_inverse|left inverse]].

  * EXPANSION: existence of a left inverse
    * Suppose $g\circ f=\operatorname{id}_X$. If $f(x_1)=f(x_2)$, applying $g$ gives $x_1=x_2$. Thus $f$ is injective.

  * EXPANSION: injectivity
    * Each output reached by an injective $f$ comes from exactly one input, which we assign as its image under $g$. For outputs not reached by $f$, assign any fixed element of the nonempty $X$. Then $g\circ f=\operatorname{id}_X$.

  * INTERPRETATION:
    * If $X=\varnothing$ and $Y\neq\varnothing$, $f$ is injective vacuously but there is no function $Y\to X$. If both sets are empty, the empty function is a left inverse.
