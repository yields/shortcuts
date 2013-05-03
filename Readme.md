
# shortcuts

  keyboard shortcuts, similiar to [component/events](https://github.com/visionmedia/events).

## Installation

    $ component install yields/shortcuts

## Example

```js

function Editable(el){
  this.shortcuts = shortcuts(el, this);
  this.shortcuts.bind('command + z', 'undo');
  this.shortcuts.bind('command + b', 'bold');
}

Editable.prototype.undo = function(e){};
Editable.prototype.bold = function(e){};

```

## API

#### cuts = shortcuts(el, obj)

  Bind shortcuts on the given `el` with `obj`.

### cuts.bind(keys, method)

  Bind the `keys` with `method` on `obj`

### cuts.unbind(keys, method)
  
  Unbind all events, or `keys` or `keys` with `method`.

## License

  MIT
