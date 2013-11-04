
/**
 * dependencies
 */

var dispatcher = require('k');

/**
 * Export `Shortcuts`
 */

module.exports = Shortcuts;

/**
 * Initialize `Shortcuts`.
 *
 * @param {Element} el
 * @param {Object} obj
 * @api public
 */

function Shortcuts(el, obj){
  if (!(this instanceof Shortcuts)) return new Shortcuts(el, obj);
  this.k = dispatcher(el);
  this.bindings = {};
  this.obj = obj;
  this.el = el;
}

/**
 * Bind `keys`, `method`.
 *
 * @param {String} keys
 * @param {String} method
 * @return {Shortcuts}
 * @api public
 */

Shortcuts.prototype.bind = function(keys, method){
  if (2 != arguments.length) throw new Error('expected 2 arguments');
  var bindings = this.bindings;
  var m = bindings[keys] = bindings[keys] || {};
  var callback = this.callback(method);
  m[method] = callback;
  this.k(keys, callback);
  return this;
};

/**
 * Unbind `keys`, `method`.
 *
 * @param {String} keys
 * @param {String} method
 * @return {Shortcuts}
 * @api public
 */

Shortcuts.prototype.unbind = function(keys, method){
  var methods = this.bindings[keys];

  if (2 == arguments.length) {
    this.k.unbind(keys, methods[method]);
    return this;
  }

  if (1 == arguments.length) {
    this.bindings[keys] = {};
    this.k.unbind(keys);
    return this;
  }

  this.bindings = {};
  this.k.unbind();
  return this;
};

/**
 * Wrap the given `method`.
 *
 * @param {String} method
 * @return {Function}
 * @api private
 */

Shortcuts.prototype.callback = function(method){
  var obj = this.obj;

  return function callback(){
    obj[method].apply(obj, arguments);
  }
};
