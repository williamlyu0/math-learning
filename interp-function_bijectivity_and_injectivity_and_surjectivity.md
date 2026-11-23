---
type: interpretation
---

# INTERP: function bijectivity and its equivalence to injectivity and surjectivity

* A function $f:X\to Y$ is [[construct-function_bijectivity|bijective]] if and only if it is both [[construct-function_injectivity|injective]] and [[construct-function_surjectivity|surjective]].

  * EXPANSION:
    * From bijectivity to injectivity and surjectivity:
      - Suppose $f(x_1)=f(x_2)$. Both inputs are preimages of the same output. By bijectivity, that output has exactly one preimage, so $x_1=x_2$. This proves injectivity.
      - Every $y\in Y$ has exactly one preimage, so each $y$ has a preimage. This proves surjectivity.

    * From injectivity and surjectivity to bijectivity:

      Take any $y\in Y$. By surjectivity there is an $x\in X$ with $f(x)=y$. If any $x'\in X$ also satisfies $f(x')=y$, then $f(x')=f(x)$, so injectivity gives $x'=x$. Thus every $y\in Y$ has exactly one preimage.
