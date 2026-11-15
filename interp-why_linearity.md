---
type: interpretation
---

# INTERP: What motivates linearity?

* [[construct-function_linearity|Linearity]] lets us determine the image of a [[construct-linear_combination|linear combination]] from the images of its parts, using the same coefficients.

  * EXPANSION:
    * For a linear map $f$ and scalars $a_1,\ldots,a_n$:
      - $f(a_1v_1+\cdots+a_nv_n)=a_1f(v_1)+\cdots+a_nf(v_n)$.

      If $v_1,\ldots,v_n$ span the domain, knowing their images determines the map everywhere.

      * INTERPRETATION:
        * If the spanning vectors form a basis, every input has a unique expression in them. We can therefore choose the images of the basis vectors independently and extend the assignment to a linear map.

  * INTERPRETATION:
    * This property motivates [[tech-matrix_notation_for_linear_maps|matrix notation for linear maps]]: record the images of input basis vectors as coordinate columns. Asking how to represent a composition then motivates [[construct-matrix_multiplication_matrix_product|matrix multiplication]].

    * This is a conceptual route to linearity and matrix operations, not a claim about their historical development.
