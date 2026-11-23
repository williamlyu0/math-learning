---
type: technique
---

# TECH: matrix representation of the inverse of a bijective linear map

* A bijective linear map $f:V\to W$ has a unique [[construct-linear_map_inverse|inverse linear map]] $f^{-1}:W\to V$. When $V,W$ are finite-dimensional and their ordered bases are fixed, $f^{-1}$ is represented by a unique matrix. This matrix is an [[construct-matrix_inverse|inverse of the matrix]] representing $f$.

  * EXPANSION:
    * Obtain the inverse function. By the [[tech-inverse_of_a_bijective_function|well-definedness of the inverse of a bijective function]], $g=f^{-1}$ assigns each $w\in W$ its unique preimage and satisfies both inverse equations.

    * Verify linearity. For $u,w\in W$ and $c\in\mathbb F$, write $u'=g(u)$ and $w'=g(w)$. Linearity of $f$ identifies the preimage in each case:
      - $f(u'+w')=u+w$, so $g(u+w)=u'+w'=g(u)+g(w)$.
      - $f(cu')=cu$, so $g(cu)=cu'=cg(u)$.

      Thus $g$ satisfies the definition of an inverse linear map. Its uniqueness already follows from uniqueness as a function.

    * Represent $g$ in coordinates. Now assume finite dimension and fix ordered bases $B$ of $V$ and $C=(w_1,\ldots,w_n)$ of $W$. The input basis for $g$ is $C$ and its output basis is $B$. By [[tech-matrix_notation_for_linear_maps|matrix notation for linear maps]], column $j$ of its unique matrix $G$ is $[g(w_j)]_B$, the coordinates of the unique preimage of $w_j$.

    * Check the matrix inverse equations. Let $A$ represent $f$ from basis $B$ to basis $C$. By [[tech-matrix_notation_for_linear_maps_composition|matrix notation for composition]], $GA$ represents $g\circ f=\operatorname{id}_V$ from $B$ to $B$, and $AG$ represents $f\circ g=\operatorname{id}_W$ from $C$ to $C$. Since the bijection gives $V$ and $W$ the same dimension $n$, both products equal $I_n$.
