# Super simple nodejs + typescript API demo
This is a very simple project demonstrating how to set up a web server using nodejs and typescript. 

## Get it running
- have node installed
- clone this repo
- cd \<repository\>
- npm install 
- ./node_modules/typescript/bin/tsc 
- node dist/index.js
- browse http://localhost:8080/users

## Overview

### index.ts
The entrypoint to the server. It basically just instantiates a Server and starts it.
### server.ts
A class encapsulating the configuation of the API. It constructs an express app and provides a public method for starting the express app.

It registers 4 routes:
- `GET /users` to list known users
- `GET /users/:name/` to get a user
- `POST /users/:name/` to create a user
- `DELETE /users/:name/` to delete a user

It has a commented out line to inject the headerFilter middleware.

### middleware/headerFilter.ts
This is a simple middleware filter that checks for the existence of a header called 'customHeader' on every request, and 400s if it does not exist. 

### package.json
The npm config file that holds information about this package, including its depencencies. `npm install` uses this to install dependencies, including the typescript compiler (`tsc`), and the type files that it (and an IDE like VS Code) require.
### tsconfig.json
The typescript config file which controls the behaviour of the `tsc` compiler. Note that here we specify that compiled js files should be placed in the `dist` folder
