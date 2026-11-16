---
type: interpretation
---

# INTERP: Function bijectivity and inverse

* A [[construct-function|function]] $f:X\to Y$ is [[construct-function_inverse|invertible]] if and only if it is [[construct-function_bijectivity|bijective]]. For bijective $f$, its left inverse and right inverse each exist, are unique, and equal $f^{-1}$.

  * EXPANSION: bijective
    * For each $y\in Y$, surjectivity gives a preimage $x\in X$ and injectivity makes that preimage unique. Define $g:Y\to X$ by $g(y)=x$ for that unique $x$.
      - $f(g(y))=y$ for every $y\in Y$.
      - $g(f(x))=x$ for every $x\in X$.

      Thus $g$ is an inverse of $f$.

  * EXPANSION: invertible
    * A left inverse gives injectivity: if $f(x_1)=f(x_2)$, apply the left inverse to get $x_1=x_2$.
      A right inverse gives surjectivity: for each $y\in Y$, its image under the right inverse is a preimage of $y$.
      Together, these give bijectivity.

  * EXPANSION: its left inverse and right inverse each exist, are unique, and equal $f^{-1}$
    * Let $g$ be the inverse constructed from unique preimages, and let $h:Y\to X$ be another candidate. For any $y\in Y$, let $x$ be its unique preimage.
      - If $h$ is a right inverse, $f(h(y))=y$, so uniqueness of the preimage gives $h(y)=x=g(y)$.
      - If $h$ is a left inverse, $y=f(x)$ gives $h(y)=h(f(x))=x=g(y)$.

      Thus either one-sided inverse condition forces $h=g$.

      * INTERPRETATION:
        * A direct proof can also combine any left inverse $h$ and right inverse $g$: for every $y\in Y$, $h(y)=h(f(g(y)))=g(y)$.
        * The result includes empty sets: if a bijection has an empty domain, its codomain is empty too, and the empty function is its unique inverse.
