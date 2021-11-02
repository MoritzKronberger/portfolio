---
title: Snippets
tags: web-development fullstack vue express postgres
thumbnail: snippets.webp
date: 2021-07-10
category: compsci
meta_desc: A fullstack web project allowing users to create, share, like and comment code snippets
carouselAlt: ['The main feed of the snippets application for non logged in users', 
              'An expanded view of a snippets post for logged in users with the option to like and comment',
              'The form for creating a new code snippet post',
              'The basic database-model as an UML-diagram excluding views']
tech: Vue.js, Express, PostgreSQL, Docker
repo: {GitHub: https://github.com/MoritzKronberger/Snippets}
team: {Lea Jell: https://www.linkedin.com/in/lea-jell-3a3b681b5/?originalSubdomain=de, Martin Kohnle: https://github.com/kohnmart}
role: Postgres database, Docker, Wireframing
---

The full stack web application 'Snippets' allows its users to share short code snipptes in a Twitter-like format. As most social media platforms, users can interact with posts through likes and comments.
<br></br>
My main contributons to the project were the design of a robust PostgreSQL database, its dockerization, backend database queries and basic initial [wireframing](https://www.figma.com/file/XrzFeX33r2VXlSoyrPhYdj/GruppenprojektWebprog?node-id=203%3A83) using Figma.
<br></br>
A big technical focus of the database was the use of stored procedures and views to provide a REST-like CRUD-functionality on the database level.
Some of the more interesting queries include the filtering by time-frame and an error tolerant search of post-tags, which is implemented via a trigram index and allows search prefixes like "-" to exclude specific post-tags.
<br></br>
More detailed documentation of the application features, techstack, team roles, page structure, REST-API and database model can be found [here](https://github.com/MoritzKronberger/Snippets/blob/master/frontend/doc/Documentation.pdf) [German].
<br></br>
A live demo of the application's database is available on [YouTube](https://youtu.be/W812ANJrYSE).
