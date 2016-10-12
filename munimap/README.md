# OpenLayers 3 for Munimap

## Requirements
* Run `make check-deps` to ensure that basic dependencies are OK.
* Run `npm install` to install NodeJS deps. Errors related to node-gyp and slimmerjs are not crucial.

## Change API
* Manually tag non-API methods you want to use with @api, e.g. `ol.extent.createOrUpdateFromCoordinate`.
* Change default values of @define variables in `munimap/config/ol.json`, e.g. `ol.ENABLE_DOM`.
* Change behaviour:
   * ol.source.Cluster

## Generate externs
* Run `node ./tasks/generate-externs.js ./munimap/build/ol.externs.js`
* Manually create `munimap/externs/missing.js` with missing externs. See e.g. [this issue](https://github.com/openlayers/ol3/pull/5010).
* Remove all occurences of `, undefined: (Object)` from `build/ol.externs.js`
* Manually fix externs issues related to inheritDoc, e.g. `ol.geom.Point#intersectsExtent`.


## Generate single JS file
* Run `node ./tasks/build-ext.js` to generate wrappers of external libraries for compiler.
* Run `node ./tasks/build.js ./munimap/config/ol.json ./munimap/build/ol.js`
* Run `node ./tasks/build.js ./munimap/config/ol-debug.json ./munimap/build/ol-debug.js`
