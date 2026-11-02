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

* In daily life, we often encounter the activity of "independently assign attributes to objects". So, **if we only care about these attributes**, what is a "natural" encoding for representing the objects?

  We can use ordered tuples of values drawn from these attribute sets as encoding for representing the objects. The purpose of such encoding is that we only care (want to distinguish the objects) about their attributes. We also want to be able to retrieve the value of each attribute from this encoding. Note that this is what "projection", introduced and defined later, intuitively does. We will see that Cartesian product with such projection is a "minimal" construction for a universal encoding.

  We extract a pattern from how the Cartesian product and its projections behave in **Set**, then use that pattern to define a **categorical product**.
  * INTERPRETATION: then use that pattern to define a **categorical product**.
    * In a category $\mathcal C$, a **product** of objects $A,B$ consists of:
      - An object $P$.
      - Morphisms $p_A:P\to A$ and $p_B:P\to B$, called **projections**.
      These satisfy a property defined to be called **universal property of the product**:
      - For every object $X$ and every pair of morphisms $\alpha:X\to A$, $\beta:X\to B$, there exists exactly one morphism $h:X\to P$ such that:
        - $p_A\circ h=\alpha$.
        - $p_B\circ h=\beta$.

      * INTERPRETATION:
        * The product is the whole arrangement $(P,p_A,p_B)$, not $P$ alone.
        * “Every object $X$” includes $P$ itself.
  * INTERPRETATION: “how the Cartesian product and its projections behave”
    * Suppose we have attribute-value sets $C,S$, their Cartesian product $C\times S$, and projections $p_C,p_S$ retrieving the respective components of each pair.

      It satisfies a "property" we give here:
      - Given any set $X$ and attribute assignments $c:X\to C$, $s:X\to S$, consider $h:X\to C\times S$ that satisfies:
        - $p_C\circ h=c$.
        - $p_S\circ h=s$.

        This $h$ exists and is unique. (The $h$ is actually $h(x)=(c(x),s(x))$.)

      These equations say that projecting after $h$ recovers the original assignments.
      Our construction proves existence. For uniqueness, any function satisfying these equations must assign each $x$ a pair whose components are $c(x)$ and $s(x)$—hence that pair must be $h(x)$.

      * INTERPRETATION: It satisfies a "property" we give here:
        * The intuitive role played by projections is the retrieval of individual attribute values.
        * The part of the "property" of $X, c, s$ can be intuitively interpreted as "an actual attribute assignment of a collection of stuff".
        * The "satisfaction of the property" can be intuitively interpreted as:
          - Every combination of attribute values can be represented and recovered through the projections.
            This is ensured by existence of $h$ for every $X,c,s$.
          - No combination has multiple representations in $P$.
            This is ensured by uniqueness of $h$.

          Thus, $P$ is being "minimal", or being just sufficient for encoding the attributes without anything extra.

      * INTERPRETATION:
        * Constructing $h$ uses ordered pairs, but the “property” characterizing it mentions only objects, morphisms, and composition. We can therefore use that characterization as the definition beyond **Set**.
      * INTERPRETATION: It satisfies a "property" we give here
        * The "property" here is abstracted as the **universal property of the product**.

* **Theorem:** Any two categorical products of the same objects are related by a unique isomorphism respecting their projections.

  Here is an intuitive proof:
  - Suppose $(P,p_A,p_B)$ and $(Q,q_A,q_B)$ are products of $A,B$ in the same category.
  - Label the morphisms in our diagram:
    - 1: $p_A:P\to A$.
    - 2: $p_B:P\to B$.
    - 3: $q_A:Q\to A$.
    - 4: $q_B:Q\to B$.
    - 5: $v:P\to Q$.
    - 6: $u:Q\to P$.
    - 7: $1_P:P\to P$.
    - 8: $1_Q:Q\to Q$.
  - We write chains in traversal order: $[6,1]$ means $p_A\circ u$. Equality of chains means equality of their composites.

  **Existence supplies arrows 5 and 6.**
  - Apply $P$'s universal property with $X=Q$ and morphisms $q_A,q_B$. Its existence clause supplies $u$ such that:
    - $[6,1]=[3]$.
    - $[6,2]=[4]$.
  - Apply $Q$'s universal property with $X=P$ and morphisms $p_A,p_B$. Its existence clause supplies $v$ such that:
    - $[5,3]=[1]$.
    - $[5,4]=[2]$.

  **Substitution shows that the round trips preserve the projections.**
  - Using associativity and substitution of equal composites:
    - $[5,6,1]=[5,3]=[1]$.
    - $[5,6,2]=[5,4]=[2]$.
    - $[6,5,3]=[6,1]=[3]$.
    - $[6,5,4]=[6,2]=[4]$.

  **Uniqueness identifies each round trip with an identity.**
  - Apply $P$'s universal property with $X=P$ and its own projections $p_A,p_B$.
    - Exactly one morphism $h_P:P\to P$ satisfies $[h_P,1]=[1]$ and $[h_P,2]=[2]$.
    - The identity morphism 7 satisfies both equations by the identity laws.
    - The composite $[5,6]$ also satisfies both equations, as shown above.
    - Uniqueness therefore gives $[5,6]=[7]$, meaning $u\circ v=1_P$.
  - Similarly, applying $Q$'s universal property with $X=Q$ and projections $q_A,q_B$ gives $[6,5]=[8]$, meaning $v\circ u=1_Q$.

  Thus $u$ and $v$ are inverses, so they are isomorphisms.
  Moreover, $Q$'s universal property with $X=P$ makes $v$ the unique morphism respecting both projections—and hence the unique isomorphism doing so.

  * INTERPRETATION:
    * Existence lets us draw the connecting arrows with the required projection equations.
    * Composition gives each chain a composite morphism; associativity permits regrouping.
    * The identity laws provide morphisms against which to compare the round trips.
    * Uniqueness forces equality because the round trip and identity satisfy the same requirements.
  * INTERPRETATION: respecting both projections
    * This intuitively means "seeing through you is the same as seeing through me".
