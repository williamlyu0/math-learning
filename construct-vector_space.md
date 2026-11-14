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
  - $0_\mathbb{F} v = 0_V$

    Proof:
    
    Ah yes. 0v=(0+0)v (field axiom) = 0v+0v (scalar multiplication distributivity) 
    0v + (-0v) = (0v + 0v) + (-0v) (existence of additive inverse)
    0_v = 0v + (0v + (-0v)) (lhs relies on additive inverse axiom, rhs relies on associativity)
    0_v = 0v + 0_v (rhs relies on additive inverse axiom)
    0_v = 0v (axiom of 0_v adding with arbitrary vector axiom)
