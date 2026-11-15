---
type: technique
---

# TECH: matrix notation for a system of linear equations

* A [[construct-matrix|matrix]] can record the coefficients of a [[construct-system_of_linear_equations|system of linear equations]]. An **augmented matrix** also records the constants.

  * EXPANSION:
    * Fix an order for the unknowns. Each row records one equation: its entries give the coefficients of the corresponding unknowns, followed by the constant on the right-hand side.

      * INTERPRETATION:
        * This is compact notation for the equations; the unknown names and their order are implicit. It can be introduced before defining any matrix product.

    * Once [[construct-matrix_vector_multiplication_and_matrix_vector_product|matrix–tuple multiplication]] is defined, we can also write the system as $Ax=b$, where $A$ is the coefficient matrix, $x$ is the tuple of unknowns, and $b$ is the tuple of right-hand constants. The augmented matrix is $[A\mid b]$.

      * INTERPRETATION:
        * A **homogeneous** system has $b=0$. An augmented matrix can record a homogeneous or a nonhomogeneous system.
        * Other sign conventions are possible if the meaning of the last column is specified.
