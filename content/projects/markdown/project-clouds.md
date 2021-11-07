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
team: {Martin Kohnle: https://www.linkedin.com/in/martin-kohnle-504b2b1ba/}
---

## Procedural Cloud generation

Central to this project was the study of possible procedural setups to create different types of clouds.
The shelf-tools provided by SideFX Houdini were chosen as a starting point and both supported approaches of using either polygon meshes or pointclouds as base geometry were investigated.
<br></br>
The most significant improvements were made to the inner density of the cloud,
which needed to be varied using custom noises in order to greatly improve its realism, as well as procedurally adjusting the volumes' densities to make them invariant to their scale.
Additionally, it was found that the polygon-based approach lends itself to the creation of denser cumulus clouds, while the pointcloud base geometry seems to work better for larger, more distributed cirrus clouds.
<br></br>
A comparison between the shelf tools and our custom setup for both approaches can be seen in the above carousel.

## The short film

The two resulting types of clouds became the main protagonist of the short film 'Project Clouds', which was to be based on the following plot:
<br></br>
'For the third day already, the evening sky just seemed a bit off.

The clouds looked even more unnatural as the days before.

And when nature went quiet, the storm began.'
<br></br>
To convey an attack of the clouds on humanity, a setup for procedurally generated 'cloud arms' that would extend towards the ground
was created by using the above technique for point-based cloud generation and advecting the points to an extruding polygon-arm-structure with curl noise.

Additionally a landscape was created from a mapbox terrain tile and the storm was visualized by using a vellum simulation to make the wind affect a wheat field.

Both the [short film](https://youtu.be/AwPGj9VenKA) and a detailed closeup of the [curl flowed arms](https://youtu.be/G2OnUsg9y2E) are available as flipbook renders.
