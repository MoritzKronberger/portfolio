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

Central to this project was the study of possible procedural setups to create different types of clouds.
The shelf-tools provided by SideFX Houdini were chosen as a starting point and both supported approaches of using either polygon-meshes or point-clouds as base geometry were investigated.

The most significant improvements were made to the inner density of the cloud, which needed to be varied using custom noises in order to greatly improve its realism, as well as procedurally adjusting the volumes' densities become invariant to their scale.
<br></br>

The two resulting types of clouds became the main protagonist of the short film 'Project Clouds', which was to be based on the following plot:
<br></br>

'For the third day already, the evening sky just seemed a bit off.

The clouds looked even more unnatural as the days before.

And when nature went quiet, the storm began.'
<br></br>

To convey the attack of the clouds on humanity, a setup for procedurally generated 'cloud arms' that would extend towards the ground
was created by using the above technique for point-based cloud generation and advecting the points to an extruding polygon arm-structure with curl noise.

Additionally the landscape was created from a mapbox terrain tile and a vellum simulation was used show wind affecting the wheat field.

Both the [short film](https://youtu.be/AwPGj9VenKA) and a more detailed closeup of the [curl flowed arms](https://youtu.be/G2OnUsg9y2E) are available as flipbook renders.
