# my_salad project

## Setup
It is easy and straight forward to get this website to work in a working environment. <br>
After downloading the code, in the main folder do `cd backend` to enter the backend folder. <br>
Open a new terminal then do the same but now for the frontend `cd frontend` to enter the frontend folder<br>
now run the next commands for the terminal in the backend folder `npm i` to download the node_modules and `npm run start`, you should get a message in the terminal says something like back-end is running. <br>
now for the frontend it is the same `npm i` to download the node_modules and `npm run start`, that should starts the React app.<br>
Make sure MongoDB is running in the background. And make sure to edit the .env file to add the right port for the express app. <br>
There might be some bugs here or there, we are trying our best to remove it. <br>

On this site, the MERN stack technology was used . the site is selling salads and consists of three types: protein salad, vegetable salad , and fruit salad


What is MERN stack?

•    MongoDB, a NoSQL database management system, is the first element. 

•    ExpressJS is the second element of the MERN stack. It is a framework for NodeJS-based backend web applications.

•    ReactJS, a JavaScript toolkit for creating UIs based on UI components, is the third component. 

•    NodeJS is the last element of the MERN stack. It is a JS runtime environment, allowing JavaScript code to be executed outside of a browser.

Front end using React.js
React.js, a declarative JavaScript framework for building dynamic client-side apps in HTML, makes up the top tier of the MERN stack. React enables you to link simple components to data on your back-end server, connect complicated interfaces to those connections, and render those interfaces as HTML.
React excels at handling stateful, data-driven interfaces with little effort and code, and it includes all the features you'd expect from a contemporary web framework, including excellent support for forms, error handling, events, lists, and more.

Node.js and Express.js server layer
The server-side framework Express.js, which functions inside a Node.js server, is the next level below. Express.js describes itself as a "fast, unopinionated, minimalist web framework for Node.js," and in fact, that is exactly what it is. Express.js offers robust models for handling HTTP requests and responses as well as URL routing (correlating an incoming URL with a server function).
database tier for MongoDB

You'll need a database that's just as simple to use as React, Express, and Node if your application stores any data (user profiles, content, comments, uploads, events, etc.).

MongoDB can help with this because it allows JSON documents created in your React.js front end to be sent to the Express.js server for processing and, if they're valid, direct storage in MongoDB for later retrieval. Once more, if you're building in the cloud, you should consider Atlas ,and change the MONGO_URL in the .env file and put the URL provided by Atlas.


How does the MERN stack work?
![MERN](https://github.com/sultankhaled9/my_salad/assets/50848447/241f5578-d5ae-4146-b65b-5ea4195f4d57)


ER Digram:

![image](https://github.com/sultankhaled9/my_salad/assets/50848447/2aa16cf0-4bc7-48c2-8688-addd397749ea)





Flowchart :

<img width="2345" alt="Flow-Diagram" src="https://github.com/sultankhaled9/my_salad/assets/50848447/333d1d85-e02a-413c-b41e-d1c85da3efeb">

