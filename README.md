# CS C3 Angular

Provides an Angular directive for simple plug an play charts of the following
types supported at the current moment.

- Line
- Area
- Spline
- Donut
- Pie
- Step
- Bar

These currently support the use of hovering tooltips, guides, custom colors, and additional Y axes.


## Usage

```html
<div cs-c-three
     id='container'
     container='"#container"'
     columns='csC3Ctrl.columns'
     axes='csC3Ctrl.axes'
     colors='csC3Ctrl.colors'
     type='"spline"'
     legend='true'
     ytwo='true'>
</div>
```

- container: string ( Must have a corresponding id )
- columns:   array
- axes:      object
- colors:    array
- type:      string
- legend:    boolean
- yTwo:      boolean

### Column Format

```javascript
var columns = [
  ['data1', 1, 2, 3, 4, 5, 6, 7],
  ['data2', 1, 2, 3, 4, 5, 6, 7]
]
```

### Axes Format

```javascript
var axes = [
  ['data1', 'y'],
  ['data2', 'y2']
]
```

### Colors Format

```javascript
var colors = [
  ['data1', '#333333'],
  ['data2', '#666666']
]
```

## Setup

- Install with either Bower or NPM
- Require the module with common js or include the script tag in index.html
- Include the stylesheet from either the node_modules or bower_components directory depending on your Install
- Inject the 'csC3' module into your main module
