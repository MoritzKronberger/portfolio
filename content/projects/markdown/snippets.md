---
title: Snippets
tags: web-development fullstack vue express postgres
thumbnail: snippets.png
date: 2021-07-10
category: compsci
meta_desc: A fullstack web project allowing users to create, share, like and comment code snippets
tech: Vue.js, Express, PostgreSQL, Docker
repo: {GitHub: https://github.com/MoritzKronberger/Snippets}
team: {Lea Jell: https://www.linkedin.com/in/lea-jell-3a3b681b5/?originalSubdomain=de, Martin Kohnle: https://github.com/kohnmart}
role: Postgres database, Docker
---

The fullstack webapplication 'Snippets' allows its users to share short code snipptes in a Twitter-like format. Like most social media platforms users interact with posts through likes and comments.

The database features a error tolerant, searchable tag system for posts, implemented via a trigram index.
A big technical focus of this project was the use of stored procedures to provide REST-like CRUD functionality on the database level.
The database is running as a docker instance and can be easily accesed via a dockerized version of PgAdmin.

![test image](../assets/images/thumbnails/snippets.png)
