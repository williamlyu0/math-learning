---
type: construct
---

# rank

[[construct-function]]
[[construct-linear_map]]
[[construct-vector_space_dimension]]


## user

Since the codomain of a linear map is a vector space of finite dimension, also, the image is a linear combination of a bunch of vectors, so the image must be a subspace.

## AI

Yes. Using our chosen basis \(v_1,\ldots,v_m\) of the domain, every output has the form
\[
f(c_1v_1+\cdots+c_mv_m)
=c_1f(v_1)+\cdots+c_mf(v_m).
\]

And because every choice of coefficients \(c_i\) produces an input in \(V\), the image is **exactly** the set of all linear combinations of \(f(v_1),\ldots,f(v_m)\). Therefore it is a subspace of the codomain.

The “every choice” part makes the inference clear: we get all those linear combinations, not merely some of them.

## user

Since, the image is a subspace and it is a spannable from a finite collection of vectors, it must have a dimension. We shall define that to be the rank.

## AI

Yes. The images of the domain’s finitely many basis vectors form a finite spanning collection for \(\operatorname{im} f\). By the result we established earlier, we can reduce that collection to a basis, so the image has a well-defined dimension.

That dimension is called the **rank** of \(f\):
\[
\operatorname{rank}(f)=\dim(\operatorname{im} f).
\]
