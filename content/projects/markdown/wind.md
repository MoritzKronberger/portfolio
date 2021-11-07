---
title: Wind
tags: interaction-design data-visualization webgl p5js
thumbnail: wind.webp
date: 2020-05-16
category: design
meta_desc: An interactive visualization of weather data using webGL and p5js
carouselAlt: ["Clouds floating over a calendar-grid visualizing the respective day's cloud cover with their size and the day's wind strength with their height", 
              "A menu that allows toggling of dark mode and the display of explicit values as well as adjusting the time a cloud is shown via a slider",
              "A split view of the page in both dark- and light mode",
              "The clouds floating over the calendar grid, but in light mode"]
tech: p5js, WebGL
---

'Wind' is an interactive data visualization that lets its users compare the occurrence of specific wind strengths in the city of Augsburg over the years 2009 until 2018.
<br></br>
A three-dimensional grid lays out the year in a calendar format, with each row containing a full month.
Differently sized clouds rise and fall over the grid when the main slider is moved and their shadows point to their corresponding day on the grid.
Moving the slider will pick a certain wind strength, ranging from the year's lowest to its highest value.
The wind strength is represented by the clouds' heights over the grid (higher clouds signifying higher wind strength), focusing on relative comparisons between days or years instead of explicit values.
Additionally the cloud's size corresponds to the amount of cloud cover for the various days.
<br></br>
A tucked away menu allows the user to display the values driving the visualization, toggle between light- and dark mode and adjust the duration, for which a cloud is shown.
<br></br>
The visualization is accessible via a [live website](http://www.hs-augsburg.de/homes/mokro/exp/abgabeBlock2.html) (most stable in chrome browser) or a [recorded live demo](https://youtu.be/B8WL9vzGXW8).
