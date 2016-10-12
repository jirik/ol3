# OpenLayers 3 for Munimap

## How to generate externs
* Run `make check-deps` to ensure that basic dependencies are OK.
* Run `npm install` to install NodeJS deps. Errors related to node-gyp and slimmerjs are not crucial.
* Run `node ./tasks/generate-externs.js ./build/ol.externs.js`
