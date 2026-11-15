---
type: technique
---

# TECH: Gaussian elimination

* **Gaussian elimination** simplifies a finite [[construct-system_of_linear_equations|system of linear equations]] by applying reversible operations to its equations. The resulting system has the same [[construct-system_of_linear_equations_solutions|solution set]].

  * EXPANSION: reversible operations
    * We can:
      - Swap two equations.
      - Multiply an equation by a nonzero scalar.
      - Add a scalar multiple of one equation to a different equation.

      Each operation preserves solutions, and its inverse is also an allowed operation. Thus neither direction loses solutions.

  * EXPANSION: simplifies
    * Systematically choose leading nonzero coefficients and eliminate coefficients below them. This produces an echelon arrangement from which solutions can be found by substitution. Further elimination above the leading coefficients gives a reduced form.

    * INTERPRETATION:
      * A consistent system permits arbitrary choices for its free unknowns; those choices determine the remaining unknowns. An inconsistent system has no solutions.
