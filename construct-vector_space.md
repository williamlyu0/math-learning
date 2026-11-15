---
type: construct
---

# vector space

* A **vector space** is defined to be the combination of the following:
  - a set $V$
  - a [[construct-field]] $\mathbb{F}$
  - two operations $+: V \times V \to V$ and $\text{scalar multiplication}:  \mathbb{F} \times V \to V$
    - These operations follow the following axioms:
      - commutativity of $+$
      - associativity of $+$
      - existence of **zero vector** $0_V$
      - existence of **additive inverse** for all elements in $V$
      - distributivity of scalar multiplication over $+$ and the addition in $\mathbb{F}$
        - For $a \in \mathbb{F}$ and $u, v \in V$, we have $a(u+v) = au + av$.
        - For $a, b \in \mathbb{F}$ and $v \in V$, we have $(a+b)v = av+bv$.
      - associativity of scalar multiplication and multiplication in $\mathbb{F}$
        - For $a, b \in \mathbb{F}$ and $v \in V$, we have $a(bv) = (ab)v$.
      - For $v \in V$, we have $1_\mathbb{F} v = v$.
* Some properties of a vector space:
  * For any vector $v$ in a vector space $V$ over a field $\mathbb F$:
    - $0_{\mathbb F}v=0_V$.

    * EXPANSION: $0_{\mathbb F}v=0_V$
      * By the additive identity in $\mathbb F$ and distributivity:
        - $0_{\mathbb F}v
          =(0_{\mathbb F}+0_{\mathbb F})v
          =0_{\mathbb F}v+0_{\mathbb F}v$.

        Add the additive inverse of $0_{\mathbb F}v$ to both sides:
        - $0_{\mathbb F}v+(-0_{\mathbb F}v)
          =(0_{\mathbb F}v+0_{\mathbb F}v)+(-0_{\mathbb F}v)$.

        By the additive inverse, associativity, and additive identity
        properties in $V$:
        - $0_V
          =0_{\mathbb F}v+(0_{\mathbb F}v+(-0_{\mathbb F}v))
          =0_{\mathbb F}v+0_V
          =0_{\mathbb F}v$.

    * INTERPRETATION:
      * $0_{\mathbb F}$ is the additive identity of the field;
        $0_V$ is the additive identity of the vector space.
