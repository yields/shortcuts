
/**
 * dependencies
 */

var dispatcher = require('k');

/**
 * Create `shortcuts`.
 * 
 * Example:
 * 
 *      function Editable(el){
 *        this.shortcuts = shortcuts(el, this);
 *        this.shortcuts.bind('command + z', 'undo');
 *        this.shortcuts.bind('command + b', 'bold');
 *        etc..
 *      }
 *      
 *      Editable.prototype.undo = function(e){
 *        // do undo
 *      };
 *      
 *      Editable.prototype.bold = function(e){
 *        // do bold
 *      };
 * 
 * @param {Element} el
 * @param {Object} obj
 */

module.exports = function(el, obj){
  var k = dispatcher(el)
    , ret = {};

  // bindings
  var bindings = ret.bindings = {};

  // bind `keys` to `method`.
  ret.bind = function(keys, method){
    if (2 != arguments.length) throw new Error('expected 2 arguments');
    var methods = bindings[keys] = bindings[keys] || {};
    var callback = wrap(method);
    methods[method] = callback;
    k(keys, callback);
    return callback;
  };

  // unbind all, unbind `keys`, unbind `keys` with `method`.
  ret.unbind = function(keys, method){
    if (2 == arguments.length) {
      var methods = bindings[keys];
      k.unbind(keys, methods[method]);
    } else if (1 == arguments.length) {
      bindings[keys] = {};
      k.unbind(keys);
    } else {
      bindings = {};
      k.unbind();
    }
  };

  // wrap the given `method`.
  function wrap(method){
    return (function callback(){
      obj[method].apply(obj, arguments);
    });
  }
};
