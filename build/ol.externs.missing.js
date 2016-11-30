/**
 * @constructor
 * @extends {ol.events.EventTarget}
 * @param {ol.Extent} extent Extent.
 * @param {number|undefined} resolution Resolution.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.Image.State} state State.
 * @param {Array.<ol.Attribution>} attributions Attributions.
 */
ol.ImageBase = function(extent, resolution, pixelRatio, state, attributions) {};


/**
 * @constructor
 * @extends {ol.Disposable}
 */
ol.events.EventTarget = function() {};


/**
 * Base class for replay groups.
 * @constructor
 */
ol.render.ReplayGroup = function() {};


/**
 * @constructor
 * @extends {ol.Disposable}
 * @param {Element} container Container.
 * @param {ol.Map} map Map.
 * @struct
 */
ol.renderer.Map = function(container, map) {};


/**
 * @constructor
 * @param {Array.<number>=} opt_arr Array.
 * @param {number=} opt_usage Usage.
 * @struct
 */
ol.webgl.Buffer = function(opt_arr, opt_usage) {};
