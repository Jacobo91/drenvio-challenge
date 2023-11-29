# CHALLENGE DESCRIPTIONS

Althought the challenge was to only create the API, this project encompasses a fullstack configuration using MERN Stack, in the instructions you will find how to start it and the dependencies to install (note: no front end has been coded, but the configuration is ready to start one).

### API Testing:

    - if you have the rapidAPI Client extension in VS code you can use the following:
        - GET http://localhost:5000/products (returns all products in stock)
        - GET http://localhost:5000/users (returns all users - used to see the structure althought it can be looked at the compass using the URI provided -)
        - GET ​http://localhost:5000/price/1/Nike Air Max 90 (returns the special price for this person)
        - GET ​http://localhost:5000/price/2/Nike Air Max 90 (returns the base price, because this person has no special price for this reference)


# MERN Starter

the aim with this starter is to have a fully configured starter project to begin creating a MERN Stack application.

it uses lazy and suspense to load components to Routes in a way that is more performant.

lazy  load image can be used to load images lazily and add effect to it while it loads (for performance and user experience)

## Instructions:

## /MERN_STARTER:

1. run rm -rf .git ( to detach the project from the git repo in case you plan to use this starting configuration )


## Install Dependencies:

### /client:

1. run npm install to install all node_modules
2. run npm install react-router-dom @tanstack/react-query axios @tanstack/react-query-devtools react-player 
3. npm i --save react-lazy-load-image-component
4. npm install --save-dev @types/react-lazy-load-image-component
 

### /server:

1. run npm i express mongodb nodemon mongoose dotenv cors

# /server/.env

change username and password for the corresponding ones to your cluster

### scripts

### /client:
- npm run dev

#### /server:
- npm run dev (nodemon server.js)
- npm start (node server.js)


## DOCS

- https://www.npmjs.com/package/react-lazy-load-image-component
- https://www.npmjs.com/package/react-player
- https://mongoosejs.com/docs/queries.html

# drenvio-challenge
