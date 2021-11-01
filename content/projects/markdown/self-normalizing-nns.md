---
title: Self Normalizing NNs
tags: deep-learning neural-networks research
thumbnail: self-normalizing-nns.webp
date: 2021-07-16
category: compsci
meta_desc: Taking a look at the math behind various forms of neural activity standardization, especially Self Normalizing Neural Networks
---

The seminar paper <a href="/pdfs/Techniken zur Standardisierung der Schicht-Inputs Neuronaler Netze.pdf">'Techniques for Neural Network Layer-Input-standaridization'</a>
[german] takes a deep-dive into the various forms of normalization
that can be used to mitigate the problems of Vanishing or Exploding Gradient and high sensitivity to learning rate selection that come with deep Neural Network architectures, while simultaniously speeding up their training.

Starting from the intuition of Internal Covariate Shift (ICS) and the function of the resulting industry standard, Batch Normalization, the paper explores the underlying math behind a newer and more
computationally efficent standardization method: Self Normalizing Neural Networks.

Finally new research into the viability of ICS as an explanation for the success of neural activity standardization gives us an outlook towards even lighter weight standardizaton techniques.
