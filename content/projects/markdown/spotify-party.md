---
title: SpotifyParty
tags: web-development fullstack websockets python django
thumbnail: spotify-party.webp
date: 2021-02-10
category: compsci
meta_desc: A fullstack web project allowing users to share their spotify playlists and vote on the next song to be played
carouselAlt: ["The SpotifyParty welcome page with options to join an existing party or to create a new one", 
              "The SpotifyParty settings page where the host's playlist and playback device can be selected",
              "The host's waiting page from which a new session can be started",
              "The main SpotifyParty session where users can vote on the next song to be played and information about the current song's playback progress is given"]
tech: Django, Django Channels, Spotify API
repo: {GitHub: https://github.com/MoritzKronberger/SpotifyParty}
team: {Martin Kohnle: https://github.com/kohnmart}
---

This Django webapplication allows users to connect in live sessions, which are sharable with invite-codes and lets session guests vote on the next song to be played from the host's chosen Spotify playlist.
Within a session the progress of the currently playing song is tracked to give an indication of the remaining time to vote. The most voted song will automatically be played next by the host's spotify account on the selected device.

The project consists of a Django backend with an SQLite database and a dockerized Redis server as a websocket cache.
Live sessions are made possible by websockets, implemented using the DjangoChannels plugin.
Authenticaton is handled by a Spotify-OAuth, which also makes interactions with the users's Spotify profile possible.

A more in depth documentation about the development process of the project can be found [here](https://github.com/MoritzKronberger/SpotifyParty/blob/master/Dokumentation.pdf) [german].
