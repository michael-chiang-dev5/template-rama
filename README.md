# Description

This is a minimal template for connecting the frontend with backend

## Setting up NPM

### Initialize npm

`$ npm init -y`

This will make package.json

### Install dependencies

` $ npm install <LIST_DEPENDENCIES>

- use --save-dev for devDependencies. These are dependencies that will only be used in dev build
- normal dependencies will be used for both the dev and test build
- if you install devDependencies as normal dependencies, everything will still work.

#### Copy-paste commands

- npm i @babel/core @babel/preset-env @babel/preset-react babel-loader concurrently css-loader
- npm i file-loader html-webpack-plugin nodemon style-loader webpack webpack-cli webpack-dev-server
- npm i react react-dom react-router-dom express axios cors mongoose

### Some useful devDependencies

- @babel/core
- @babel/preset-env
- @babel/preset-react
- @testing-library/react
- babel-loader
- concurrently
- css-loader
- file-loader
- html-webpack-plugin
- jest
- nodemon
- style-loader
- webpack
- webpack-cli
- webpack-dev-server

### Some useful dependencies

- "@emotion/react"
- "@emotion/styled"
- "@google-cloud/vision"
- "@mui/material"
- "axios"
- "cors"
- "dotenv"
- "eslint"
- "express"
- "jwt-decode"
- "fs-extra"
- "multer"
- "pg"
- "react"
- "react-dom"
- "react-router-dom"

Set entry point
"main": "index.js",

Set scripts
"scripts": {
"start": "NODE_ENV=production node server/server.js ",
"build": "NODE_ENV=production webpack",
"dev": "concurrently \"NODE_ENV=development webpack serve\" \"NODE_ENV=development nodemon ./server/server.js\""
},

Create file structure
create a client folder
Inside the client folder, create files

- app.js
- index.html
- index.js
