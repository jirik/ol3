# OpenLayers 3 for Munimap

## Requirements
* Run `make check-deps` to ensure that basic dependencies are OK.
* Run `npm install` to install NodeJS deps. Errors related to node-gyp and slimmerjs are not crucial.

## How to generate externs
* Run `node ./tasks/generate-externs.js ./build/ol.externs.js`
* Manually create `munimap/externs/missing.js` with missing externs. See e.g. [this issue](https://github.com/openlayers/ol3/pull/5010).


## How to generate single JS file
* Run `node ./tasks/build-ext.js` to generate wrappers of external libraries for compiler.
* Run `node ./tasks/build.js ./munimap/config/ol.json ./munimap/build/ol.js`
* Run `node ./tasks/build.js ./munimap/config/ol-debug.json ./munimap/build/ol-debug.js`
