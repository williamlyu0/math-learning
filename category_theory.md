* A **category** consists of:
  - Objects.
  - **Morphisms** (also called **arrows**), each with a specified source and target.
  - **Composition:** every pair $f:A\to B$, $g:B\to C$ has a specified composite $g\circ f:A\to C$.
  - **Identity morphisms:** each object $A$ has $1_A:A\to A$. For every $f:A\to B$, $f\circ 1_A=f=1_B\circ f$.
  - **Associativity:** $h\circ(g\circ f)=(h\circ g)\circ f$ for composable morphisms.
  * INTERPRETATION: “Identity morphisms”
    * Identity is characterized by composition; we need not inspect the objects’ internal contents.
  * INTERPRETATION: “Associativity”
    * Regrouping compositions does not change the result. Reordering them may change the result or make composition impossible.
  * INTERPRETATION: “Morphisms”
    * An **isomorphism** is a morphism $f:A\to B$ having an **inverse** $g:B\to A$ satisfying:
      - $g\circ f=1_A$.
      - $f\circ g=1_B$.
      * INTERPRETATION: “inverse”
        * The inverse “undoes” the original morphism in both orders, producing the respective identity morphisms.
        * A morphism going back from $B$ to $A$ need not be an inverse.
    * Morphisms need not be functions or preserve internal structures. Those requirements depend on the chosen category.
  * INTERPRETATION:
    * A **monoid** is a set equipped with an associative binary operation and an identity element.
      * INTERPRETATION:
        * A monoid can be represented as a category with one object:
          - Its elements are the morphisms.
          - Its operation is composition.
          - Its identity element is the identity morphism.
        * Example: strings under concatenation, with the empty string as identity.
    * Example: the category **Set**.
      - Objects: Sets.
      - Morphisms: All functions between those sets.
      - Composition: Function composition.
      - Identities: Identity functions.
      - Associativity: Follows from associativity of function composition.
      * INTERPRETATION:
        * No additional structure, such as order, is imposed.
        * Isomorphisms in **Set** are precisely bijective functions.
    * Example: the category **Pos** of partially ordered sets.
      - Objects: Sets equipped with partial orders.
      - Morphisms: Order-preserving functions: $x\leq_A y$ implies $f(x)\leq_B f(y)$.
      - Composition: Function composition; composites remain order-preserving.
      - Identities: Identity functions, which preserve order.
      - Associativity: Follows from associativity of function composition.
      * INTERPRETATION:
        * Structure-preserving functions are an example of morphisms, not their general definition.
        * Isomorphisms here are order-preserving functions with order-preserving inverses.

* **Functor** (standard term): maps objects and arrows between categories, preserving endpoints, composition, and identities.
  * INTERPRETATION:
    * Objects and arrows may merge; some target objects and arrows may remain unreached.
    * Optional properties—**full** and **faithful** are standard terms—checked for each source-object pair $A,B$:
      * **Full:** every arrow $F(A)\to F(B)$ comes from an arrow $A\to B$.
      * **Faithful:** distinct arrows $A\to B$ have distinct images.
  * EXPANSION: “preserving endpoints, composition, and identities”
    * Endpoints: an arrow $A\to B$ becomes an arrow $F(A)\to F(B)$.
    * Composition: compose then map = map then compose.
    * Identities: identities map to identities.
