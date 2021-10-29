---
title: Project Clouds
tags: procedural-generation vfx simulation houdini
thumbnail: project-clouds.webp
date: 2021-07-21
category: design
meta_desc: An exploration of procedural cloud generation with SideFX Houdini
carouselAlt: ["A render of a dense cumulus cloud made with SideFX Houdini's shelf-tools", 
              "A render of a dense cumulus cloud made with custom setup showing more varied density levels",
              "A render of a cumulus-ish cloud made with shelf tools using points as an input",
              "A render of a large cirrus cloud made with a custom setup using points as base geometry"]
tech: SideFX Houdini, Mantra
team: {Martin Kohnle: https://github.com/kohnmart}
---

The focus of this project was the exploration of different procedural setups to create different types of clouds.
The shelf-tools provided by Houdini were chosen as a starting point and the two supported approaches of using either polygon-meshes or point-clouds as base geometry were investigated seperately.

The main improvements include custom noises to vary the density within a cloud, which greatly improves realism, as well as procedurally adjusting the volumes so their densities become invariant to their scale.
<br></br>

The resulting clouds became the main protagonist of the sort film 'Project Clouds', which is based on the following plot:
<br></br>
For the third day already, the evening sky just seems a bit off.

The clouds seemed to look even more unnatural as the days before.

And when nature went quiet, the storm began.
<br></br>
To convey the attack of the clouds on mankind, a setup for procedurally generated 'cloud arms' that would extend towards the ground
was created combining the above techniques for point-based cloud generation and point advection with curl noise.

A vellum simulation was used to visualize the wind affecting a wheat field.

Both the [short film](https://youtu.be/AwPGj9VenKA) and the [curl flowed arms](https://youtu.be/G2OnUsg9y2E) are available as flipbook renders.
