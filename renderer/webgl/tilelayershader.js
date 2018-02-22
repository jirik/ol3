// This file is automatically generated, do not edit
import _ol_ from '../../index.js';
import _ol_webgl_Fragment_ from '../../webgl/fragment.js';
import _ol_webgl_Vertex_ from '../../webgl/vertex.js';
var _ol_renderer_webgl_tilelayershader_ = {};


_ol_renderer_webgl_tilelayershader_.fragment = new _ol_webgl_Fragment_(_ol_.DEBUG_WEBGL ?
  'precision mediump float;\nvarying vec2 v_texCoord;\n\n\nuniform sampler2D u_texture;\n\nvoid main(void) {\n  gl_FragColor = texture2D(u_texture, v_texCoord);\n}\n' :
  'precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}');

_ol_renderer_webgl_tilelayershader_.vertex = new _ol_webgl_Vertex_(_ol_.DEBUG_WEBGL ?
  'varying vec2 v_texCoord;\n\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\nuniform vec4 u_tileOffset;\n\nvoid main(void) {\n  gl_Position = vec4(a_position * u_tileOffset.xy + u_tileOffset.zw, 0., 1.);\n  v_texCoord = a_texCoord;\n}\n\n\n' :
  'varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}');
export default _ol_renderer_webgl_tilelayershader_;