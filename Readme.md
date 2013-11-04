
# shortcuts

  keyboard shortcuts, similiar to [component/events](https://github.com/component/events).

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

#### Shortcuts

  Bind shortcuts on the given `el` with `obj`.

### .k

  [k](/yields/k) instance

### #bind

  Bind `keys` with `method`

### #unbind

  Unbind all events, or `keys` or `keys` with `method`.

```js
shortcuts.unbind('command + z', 'undo') // => unbind `undo`, `command + z`
shortcuts.unbind('command + z'); // => unbind `command + z`
shortcuts.unbind(); // => unbind all
```

## License

  MIT
