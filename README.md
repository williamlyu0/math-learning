# README

* Constructs that are immediately part of a construct shall be placed together.
  * INTERPRETATION:
    * Examples:
      - "Vector space basis" is immediately defined within the argument explaining why "vector space dimension" is well defined.
      - "Domain" and "codomain" are sub-constructs of the construct "function".

* The nodes in this graph express **views** of mathematical constructs. In this project's framing, a construct itself cannot be expressed independently of a view; a definition, characterization, or way of reasoning expresses a particular view.

  * INTERPRETATION:
    * We may imagine a view-independent construct behind these expressions, but it is not something we can independently express as a graph node.

    * We can think informally of a node as a pair: a construct and a view. This is a way to think about the graph, not a claim that we possess an independently expressible construct to put in the first part.

    * Keep different views as separate nodes when doing so preserves meaningful distinctions. A view includes how a construct is expressed and understood, not merely the route by which it was discovered.

    * Different constructions may be equivalent without being identical. Representing them separately and linking them through their established relationship makes that relationship explicit.

    * The graph can retain different threads of development. Following a node's dependencies can show the development recorded for that view; explicit connections between views can reveal other routes and relationships.
