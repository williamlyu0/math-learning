---
type: technique
---

# TECH: well-definedness of the inverse of a bijective function

* For a [[construct-function_bijectivity|bijective function]] $f:X\to Y$, the notation $f^{-1}$ is well-defined: there exists exactly one [[construct-function_inverse|inverse function]] $g:Y\to X$. This $g$ is also the unique [[construct-function_left_inverse|left inverse]] and the unique [[construct-function_right_inverse|right inverse]] of $f$.

  * EXPANSION:
    * Existence. For each $y\in Y$, let $g(y)$ be the unique $x\in X$ with $f(x)=y$. Bijectivity makes this assignment a function $g:Y\to X$. It satisfies both inverse equations:
      - For every $y\in Y$, $f(g(y))=y$ by construction.
      - For every $x\in X$, $x$ is the unique preimage of $f(x)$, so $g(f(x))=x$.

    * Uniqueness. Let $h:Y\to X$. Either inverse equation forces $h=g$:
      - If $h$ is a left inverse, then for every $y\in Y$, $h(y)=h(f(g(y)))=g(y)$.
      - If $h$ is a right inverse, then for every $y\in Y$, $f(h(y))=y$. Since $g(y)$ is the unique preimage of $y$, $h(y)=g(y)$.

      Thus $g$ is the only function satisfying both equations, which justifies writing $f^{-1}$ for it.
