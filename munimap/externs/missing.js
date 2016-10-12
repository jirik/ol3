/* 
 * See https://github.com/openlayers/ol3/pull/5010
 */


/**
 * @interface
 */
ol.events.Event = function() {};


/**
 * @type {Object}
 */
ol.events.Event.prototype.target;


/**
 * @type {string}
 */
ol.events.Event.prototype.type;


/**
 */
ol.events.Event.prototype.preventDefault = function() {};


/**
 */
ol.events.Event.prototype.stopPropagation = function() {};


/**
 * @typedef {{
 *     bindTo: (Object|undefined),
 *     boundListener: (ol.events.ListenerFunctionType|undefined),
 *     callOnce: boolean,
 *     deleteIndex: (number|undefined),
 *     listener: ol.events.ListenerFunctionType,
 *     target: (EventTarget),
 *     type: string
 * }}
 */
ol.events.ListenerObjType;
