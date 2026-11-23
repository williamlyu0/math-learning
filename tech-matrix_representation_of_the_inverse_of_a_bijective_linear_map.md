---
type: technique
---

# TECH: matrix representation of the inverse of a bijective linear map

* To find a matrix that undoes the matrix of a bijective linear map $f:V\to W$, first ask which function undoes $f$. Its inverse function $g:W\to V$ is linear. In finite dimensions, representing $g$ in the reversed ordered bases gives an [[construct-matrix_inverse|inverse of the matrix]] representing $f$.

  * EXPANSION:
    * Bijectivity tells us exactly what the reverse operation must do. By the [[tech-inverse_of_a_bijective_function|well-definedness of the inverse of a bijective function]], $g=f^{-1}$ sends each $w\in W$ to its unique preimage. Thus $g\circ f=\operatorname{id}_V$ and $f\circ g=\operatorname{id}_W$.

    * To represent $g$ as a linear map, we first need to know that taking unique preimages preserves addition and scalar multiplication. Take $u,w\in W$ and $c\in\mathbb F$, and write $u'=g(u)$ and $w'=g(w)$. Linearity of $f$ lets us identify each preimage:
      - $f(u'+w')=u+w$, so the unique preimage of $u+w$ is $u'+w'=g(u)+g(w)$.
      - $f(cu')=cu$, so the unique preimage of $cu$ is $cu'=cg(u)$.

      These two identities establish linearity, so $g$ is an [[construct-linear_map_inverse|inverse linear map]] of $f$.

    * Now that $g$ is linear, we can build its matrix by asking where $g$ sends each of its input basis vectors. Assume $V,W$ are finite-dimensional, and fix ordered bases $B$ of $V$ and $C=(w_1,\ldots,w_n)$ of $W$. Since $g$ goes from $W$ back to $V$, its inputs use $C$ and its outputs use $B$. For each $w_j$, take its unique preimage $g(w_j)$ and express it in $B$. By [[tech-matrix_notation_for_linear_maps|matrix notation for linear maps]], that coordinate tuple is column $j$ of the unique matrix $G$ representing $g$.

    * To see why $G$ is a matrix inverse, translate the two ways $g$ undoes $f$ into the corresponding matrix products. Let $A$ represent $f$ with input basis $B$ and output basis $C$. By [[tech-matrix_notation_for_linear_maps_composition|matrix notation for composition]]:
      - Apply $f$ and then $g$. The product $GA$ represents $\operatorname{id}_V$ with basis $B$ at both ends, so it returns the original $B$-coordinates.
      - Apply $g$ and then $f$. The product $AG$ represents $\operatorname{id}_W$ with basis $C$ at both ends, so it returns the original $C$-coordinates.

      Both products are therefore identity matrices. Since $f$ is bijective and linear, both spaces have dimension $n$, giving $GA=AG=I_n$ as required.
