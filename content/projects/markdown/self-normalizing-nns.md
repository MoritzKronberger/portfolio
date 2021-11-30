---
title: Self Normalizing NNs
tags: deep-learning neural-networks research
thumbnail: self-normalizing-nns.webp
date: 2021-07-09
category: compsci
meta_desc: Taking a look at the math behind various forms of neural activity standardization, especially Self Normalizing Neural Networks
---

![Two graphs comparing the training loss over the training iterations for SNNs and NNs using Batch Norm of different depths on the MNIST and CIFAR10 datasets, showing faster convergence for the SNNs](../assets/images/self-normalizing-nns/comparison.webp)

<span id="imageSource">Comparing training error on MNIST (left) and CIFAR10 (right) ([Klambauer et al. 2017](https://arxiv.org/pdf/1706.02515.pdf))</span>

The seminar paper static_['Methods of Neural Network Layer-Input-standardization'](/pdfs/Techniken_zur_Standardisierung_der_Schicht-Inputs_Neuronaler_Netze.pdf)
[German] takes a deep-dive into the various forms of normalization
that can be used to mitigate the problems of Vanishing or Exploding Gradient and high sensitivity to learning rate selection, that come with deep Neural Network architectures, while simultaneously speeding up their training.
<br></br>

Starting from the intuition of Internal Covariate Shift (ICS) and an overview of the resulting industry standard, Batch Normalization, the paper explores the underlying math behind a newer and more
computationally efficient standardization method: Self Normalizing Neural Networks.
<br></br>

Finally, new research into the viability of ICS as an explanation for the success of neural activity standardization gives us an outlook towards even lighter weight normalization techniques.
