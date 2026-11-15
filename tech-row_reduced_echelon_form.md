---
type: technique
---

# TECH: reduced row echelon form (RREF)

* **Reduced row echelon form** (RREF) describes a particular arrangement of a matrix. Combined with solution-preserving row operations, it gives a compact way to characterize the solutions of a finite system of linear equations.

  * EXPANSION: solution-preserving row operations
    * In [[tech-matrix_notation_for_system_of_linear_equations|matrix notation]], each row records an equation. The operations used in [[tech-Gaussian_elimination|Gaussian elimination]] become **elementary row operations**:
      - Swap two rows.
      - Multiply a row by a nonzero scalar.
      - Add a scalar multiple of one row to a different row.

      For an augmented matrix, operate on the entire row, including its constant. These operations preserve the solution set because the corresponding equation operations are reversible.

      * INTERPRETATION:
        * Performing an operation on the equations and then writing the new matrix gives the same result as performing the corresponding row operation on the matrix.

  * EXPANSION: reduced row echelon form
    * A matrix is in RREF when:
      - All zero rows are below the nonzero rows.
      - Each nonzero row's first nonzero entry is $1$, called its **leading entry** or **pivot**.
      - Each pivot is to the right of the pivot in the row above it.
      - Each pivot is the only nonzero entry in its column.

    * Elementary row operations can transform a finite matrix over a field to RREF. For an augmented system, the resulting rows still describe the same solution set.

  * INTERPRETATION: characterize the solutions
    * For a consistent augmented system, each pivot in a variable column identifies a **pivot variable**; the other variables are **free variables**. Every choice of free variables determines exactly one solution.

    * A row with zero coefficients for every variable and a nonzero constant indicates inconsistency; the system has no solutions.

    * RREF describes the arrangement of the equations in compact notation. It does not add solutions or change the original solution set.
