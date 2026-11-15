---
type: construct
---

# function composition

* Given [[construct-function|functions]] $f:X\to Y$ and $g:Y\to Z$, their **composition** $g\circ f:X\to Z$ is defined by
  - $(g\circ f)(x)=g(f(x))$ for every $x\in X$.

  * INTERPRETATION:
    * Apply $f$ first, then apply $g$ to the result.
