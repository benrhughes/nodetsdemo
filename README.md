# Super simple nodejs typescript demo

## Get it running
- have node installed
- cd \<repository\>
- npm install 
- ./node_modules/typescript/bin/tsc 
- node dist/index.js
- browse http://localhost:8080/Fred

## Overview

### index.ts
The entrypoint to the server. It basically just instantiates a Server and starts it.
### server.ts
A class encapsulating the configuation of the API. 
### package.json
The npm config file that holds information about this package, including its depencencies. `npm install` reads this file to determine what components need to be installed. This includes the installation of the typescript compiler, and the type files that it (and an IDE like VS Code) require.
### tsconfig.json
The typescript config file which controls the behaviour of the `tsc` compiler. Note that here we specify that compiled js files should be placed in the `dist` folder
