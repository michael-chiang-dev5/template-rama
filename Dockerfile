FROM node:18.14
# we use nodemon to run the server; we can't use node (without transpiling) because the server is in typescript. TODO: consider pm2 instead for something more full-featured
RUN npm install -g nodemon
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# this creates bundle.js, index.html in dist/ folder
RUN npm run build
EXPOSE 8080
# npm start runs `nodemon server.ts`, which serves bundled files in dist/ folder on localhost:8080/ 
CMD ["npm", "start"]
