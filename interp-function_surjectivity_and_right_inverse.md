---
type: interpretation
---

# INTERP: function surjectivity and right inverses

* Assuming the axiom of choice, a function $f:X\to Y$ is [[construct-function_surjectivity|surjective]] if and only if it has a [[construct-function_right_inverse|right inverse]].

  * EXPANSION:
    * Proof from right to left:

      Suppose $h:Y\to X$ is a right inverse of $f$. For each $y\in Y$, the equation $f(h(y))=y$ exhibits $h(y)$ as a preimage of $y$. Thus $f$ is surjective.

    * Proof from left to right:

      Suppose $f$ is surjective. For each $y\in Y$, the set of its preimages is nonempty. By the axiom of choice, we can choose one preimage for every $y$ and call it $h(y)$. This defines a function $h:Y\to X$. By construction, $f(h(y))=y$ for every $y$, so $f\circ h=\operatorname{id}_Y$ and $h$ is a right inverse of $f$.

  * INTERPRETATION: Assuming the axiom of choice
    * Only the left-to-right proof uses choice. Over ZF set theory, the assertion that every surjective function has a right inverse is equivalent to the axiom of choice.
