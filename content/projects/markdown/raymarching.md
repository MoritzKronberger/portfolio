---
title: Raymarching
tags: computer-graphics rendering unity hlsl c#
thumbnail: raymarching.webp
date: 2021-07-01
category: compsci
meta_desc: Exploring the render pipeline by building a Raymarching render engine from scratch
carouselAlt: ['A purple box, cyan sphere and green torus rendered with raymarching', 
              'A purple box, cyan sphere and green torus smoothly blended into each other',
              'A blue sphere casting soft shadows on a grey plane',
              'Three cyan spheres with different levels of metallicness showcasing different phong-exponent values',
              'The three boolean operations (union, difference, intersection) shocased by an overlapping sphere and cube']
tech: Unity, HLSL, C#
repo: {Renderer: https://github.com/MoritzKronberger/Raymarching, Visualization: https://github.com/MoritzKronberger/Raymarching_Visualization}
---

The goal of this project was to improve my mathematical understanding of the render pipeline starting from the initial rasterization and continuing all the way to parts of global illumination.
<br></br>
Raymarching as a rendering technique provided lots of opportunities for further exploration of mathematical topics like Constructive Solid Geometry or Smoothing Functions.
Despite the overall focus on Raymarching, classic rendering concepts like the Blinn-Phong-Model were also used.
<br></br>
Apart from the render engine itself, implemented from scratch as a Compute Shader in Unity, this project consists of a [seminar paper](https://github.com/MoritzKronberger/Raymarching/blob/main/Doc/Documentation.pdf)
[German] diving deeper into the underlying math, which is aided by a browser based [visualization](https://www.hs-augsburg.de/homes/mokro/mathematik/visualisierung_raymarching/).
