---
type: technique
---

# TECH: constructing the inverse of a bijective function

* Given a [[construct-function_bijectivity|bijective function]] $f:X\to Y$, send each $y\in Y$ to its unique preimage in $X$. This gives the unique [[construct-function_left_inverse|left inverse]] and the unique [[construct-function_right_inverse|right inverse]] of $f$. They are the same function, so the notation $f^{-1}$ for the [[construct-function_inverse|inverse function]] is well-defined.

  * EXPANSION:
    * Construct $g:Y\to X$. For each $y\in Y$, bijectivity supplies exactly one $x\in X$ with $f(x)=y$. Set $g(y)=x$.

    * Verify both inverse equations.
      - For each $y\in Y$, $f(g(y))=y$ by construction.
      - For each $x\in X$, $x$ is the unique preimage of $f(x)$, so $g(f(x))=x$.

    * Show that either one-sided equation already determines the candidate. Let $h:Y\to X$ and take any $y\in Y$.
      - If $h$ is a left inverse, then $h(y)=h(f(g(y)))=g(y)$.
      - If $h$ is a right inverse, then $f(h(y))=y$. By uniqueness of the preimage, $h(y)=g(y)$.

      In either case $h=g$, so $f^{-1}=g$.
