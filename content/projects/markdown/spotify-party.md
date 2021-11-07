---
title: SpotifyParty
tags: web-development websockets django python
thumbnail: spotify-party.webp
date: 2021-02-10
category: compsci
meta_desc: A full stack web application allowing users to share their Spotify playlists and vote on the next song to be played
carouselAlt: ["The SpotifyParty welcome page with options to join an existing party or to create a new one", 
              "The SpotifyParty settings page where the host's playlist and playback device can be selected",
              "The host's waiting page from which a new session can be started",
              "The main SpotifyParty session where users can vote on the next song to be played and information about the current song's playback progress is given"]
tech: Django, Django Channels, Spotify API
repo: {GitHub: https://github.com/MoritzKronberger/SpotifyParty}
team: {Martin Kohnle: https://www.linkedin.com/in/martin-kohnle-504b2b1ba/}
---

This Django web application allows users to connect in live sessions, which are sharable with invite codes and lets session guests vote on the next song to be played from the host's chosen Spotify playlist.
Within a session the progress of the currently playing song is tracked to give an indication of the remaining time to vote. The most voted song will automatically be played next by the host's Spotify account on the selected device.
<br></br>
The project consists of a Django backend with an SQLite database and a dockerized Redis server as a websocket cache.
Live sessions utilize websockets, implemented using the [DjangoChannels](https://channels.readthedocs.io/en/stable/) plugin.
Authentication is handled by a Spotify-OAuth, which also makes interactions with the users's Spotify profile via the Spotify API possible.
<br></br>
A more in depth documentation about the development process can be found [here](https://github.com/MoritzKronberger/SpotifyParty/blob/master/Dokumentation.pdf) [German].
