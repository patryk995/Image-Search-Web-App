# Image Search Wep App

It's hosted on https://patryk995.github.io/Image-Search-Web-App/

---

## Used technologies:

- create-react-app
- redux
- prop-types
- unsplash-js
- react-infinite-scroll-component
- others

---

## Project Structure

Project source code is separeted into 3 parts:

- components - contains all UI components
- actions - redux actions
- reducers - redux reducers

Components contains:

- header - search bar
- images - main body component where images are loaded
- savedSearch - sidebar/ mobile pop-up part

---

## Implemented functionality

- Search by keyword
- Search keyword save in redux with first 30 images
- Load saved keyword
- Delete saved keyword
- Image modal

---

## Short Description

Logic and states are done and saved in Redux, so all components are functional except Search.js. Whole App design is based on css flex without fall-backs for older browsers support.

### Usage Instructions

- Write keyword or several keywords in search input press Enter or "Search Button"
- If search is successfull and you are on desktop device you can save it by pressing Save Search in rigth bottom corner of page. If you on mobile device you should press Open Saved Search button on the bottom of page and then Save Search.
- To delete saved search press X icon alongside keyword
- To open full size image press on the image, then image modal will appear.
