---
title: Learning Sign Language
tags: deep-learning web-development keras tensorflow.js vue.js
thumbnail: learning-sign-language.webp
date: 2022-02-14
category: compsci
meta_desc: Providing live feedback for sign language learners using Neural Networks for real time Sign Language Recognition
carouselAlt: ["A mockup showing the landing page, home screen and exercise of the FLAI application on a MacBook", 
              "A mockup showing the FLAI landing page in a browser",
              "A mockup showing the FLAI home dashboard in a browser",
              "A mockup showing an example exercise in a browser"]
tech: Keras, Tensorflow.js, Vue.js, Express, PostgreSQL, Docker
team: {Stefanie Jany: https://www.linkedin.com/in/stefanie-jany-53383b197/, 
       Lea Jell: https://www.linkedin.com/in/lea-jell-3a3b681b5/, 
       Eva Kunzmann: https://github.com/fox7sake, 
       Anja Krendlinger: https://www.linkedin.com/in/anjakr/, 
       Martin Kohnle: https://www.linkedin.com/in/martin-kohnle-504b2b1ba/, 
       Kieu Pham: https://www.linkedin.com/in/kieu-pham-5b6456223/}
role: Neural Network + dataset, Postgres database, Vue.js frontend, Docker + CI/CD pipeline
repo: {GitHub: https://github.com/MoritzKronberger/FLAI, Kaggle: https://www.kaggle.com/moritzkronberger/german-sign-language}
---

'Learning Sign Language' is currently my main active project and part of my [European Project Semester](http://www.europeanprojectsemester.eu/).
<br></br>
The main goal is to build the technical framework for a web application, that allows its users to learn the basics of German Sign Language (primarily the signed alphabet),
by providing live feedback on signs shown to a webcam and tailoring a learning program to the individual user's progress.
<br></br>
To be able to give feedback on the sign-inputs made by the user, we are developing and evaluating a Deep Learning pipeline for realtime gesture recognition.
Currently we are testing the approach of using the [mediapipe handpose solution](https://google.github.io/mediapipe/solutions/hands.html) as a pre-processing step that provides robust three-dimensional data for a deep Self Normalizing Neural Network to interpret and helps overcome challenges regarding diversity in signers, lighting or backgrounds that would come with creating a dataset to train an image-recognition-based solution from scratch.
<br></br>
However, we also hope to be able to release a high quality, diverse and open source dataset of the German Sign Language alphabet towards the end of our project.
