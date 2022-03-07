---
title: Learning Sign Language – FLAI
tags: deep-learning web-development keras tensorflow.js vue.js typescript
thumbnail: learning-sign-language.webp
date: 2022-02-14
category: compsci
meta_desc: Providing live feedback for sign language learners using neural networks for real time Sign Language Recognition
carouselAlt: ["A mockup showing the landing page, home screen and exercise of the FLAI application on a MacBook", 
              "A mockup showing the FLAI landing page in a browser",
              "A mockup showing the FLAI home dashboard in a browser",
              "A mockup showing an example exercise in a browser"]
tech: Keras, TensorFlow.js, Vue.js, Express, PostgreSQL, Docker
team: {Stefanie Jany: https://www.linkedin.com/in/stefanie-jany-53383b197/, 
       Lea Jell: https://www.linkedin.com/in/lea-jell-3a3b681b5/, 
       Eva Kunzmann: https://github.com/fox7sake, 
       Anja Krendlinger: https://www.linkedin.com/in/anjakr/, 
       Martin Kohnle: https://www.linkedin.com/in/martin-kohnle-504b2b1ba/, 
       Kieu Pham: https://www.linkedin.com/in/kieu-pham-5b6456223/}
role: Neural Network + Dataset, Postgres Database, Vue.js + TypeScript Frontend, Docker + CI/CD Pipeline
repo: {GitHub: https://github.com/MoritzKronberger/FLAI, Kaggle: https://www.kaggle.com/moritzkronberger/german-sign-language}
---

This project is the result of my [European Project Semester](http://www.europeanprojectsemester.eu/). A short in action overview of the project is available on [Vimeo](https://vimeo.com/670362463).
<br></br>
FLAI stands for 'Finger Language Artificial Intelligence' and is a full stack web application intended to teach its users the fundamentals of German Sign Language (DGS) - primarily the signed alphabet.
The main goal was to build a prototypical technical framework that would support providing live feedback on signs shown into the webcam and tailoring a learning program to the individual user's progress.
<br></br>
While the project also included significant design aspects, my role focused on the project's technical challenges.

## Neural Network

First and foremost, this involved researching, developing and evaluating possible solutions for a real time Sign Language Recognition system, necessary for the feedback functionality.
Since it quickly showed that there were no publicly available datasets suitable for our use case, the main challenge became keeping our own dataset creation efforts suitable to the scope of a semester project.
<br></br>
Accessibility was chosen as the primary consideration for all project decisions. Therefore we opted for an ensemble of neural networks, mainly the [mediapipe handpose solution](https://google.github.io/mediapipe/solutions/hands.html) as a pre-processing step that provides robust data consisting of three-dimensional joint-vectors for our custom deep Self Normalizing Neural Network (SNN) to classify.

This helped us overcome accessibility challenges related to the diversity of signers, lighting or backgrounds that would arise when creating a dataset for a purely end-to-end image-recognition-based solution from scratch.
<br></br>
The SNN was trained and evaluated using Keras inside Jupyter Notebooks and converted to a TensorFlow.js layers model for frontend use.

## Database

The project uses a PostgreSQL database to keep track of the user's progress, exercise contents, etc. In order to simplify backend queries to the database without introducing extra dependencies, stored procedures were used to provide axios-like CRUD-functionality
on the database level. This includes automatic type casting and query building directly from the frontend JSON objects.

## Frontend

For the frontend Vue.js Version 3 and TypeScript were chosen as our framework. This allows using the Vue composition API together with the script setup syntax and also made it possible to use reactive objects as a straightforward way of state management.

Apart from general frontend development my task was the client-side implementation of our SLR solution using TensorFlow.js.

## CI/CD

Since Continuous Integration was chosen as the development principle for our project a GitLab CI/CD pipeline was used to facilitate automated deployments to our production webserver as well as static application security testing and secret detection. Working with the custom GitLab instance of our university, an additional part of the CI/CD development was the setup and maintenance of a GitRunner for the pipeline execution.

## Open Source

Since we believe accessibility should also include the possibility for other developers to be able to build on top of our work, all parts of the project are available with permissive licensing on [GitHub](https://github.com/MoritzKronberger/FLAI). To further lower the barriers of entry when working with our dataset and neural network, the dataset is available on [Kaggle](https://www.kaggle.com/moritzkronberger/german-sign-language) along with further documentation and an example notebook.
