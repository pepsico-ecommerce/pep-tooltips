# pep-tooltips
Turn the attribute "tooltip" into tooltips with this drop in script using custom elements. Drop into a page and all new and existing elements with the `tooltip` attribute will be upgraded.

### Examples:
```
<div tooltip="Dollars per hour">$9,001</div>

<button tooltip="We won't spam you!">Submit</button>
```


## Install with NPM
Install directly from the PepsiCo github repo.
```
npm install --save git+https://github.com/pepsico-ecommerce/pep-tooltips.git
```


## How to Use
Import/Include  the pep-tooltips once into your project.
```
import 'pep-tooltips';
```

Create a wrapper div with the id `pep-tooltips` to hold the tooltip content. You only need one of these elements on the page. All tooltips will re-use the same wrapper.
```
<div id="pep-tooltips"></div>
```


Add the attribute `tooltip="tooltip text content"` to all the elements you want to show a tooltip.

```
<div tooltip="Dollars per hour">$9,001</div>

<button tooltip="Complete The Pepsi Challenge">Submit<button>
```

## Applying custom styles
In order to apply custom styling, add `data-tooltip-class` to the element you want to show a tooltip.
Then in corresponding CSS file add rules for `#pep-tooltips.custom-tooltip`

```
<div tooltip="Dollars per hour" data-tooltip-class="custom-styles-for-tooltip">$9,001</div>
```

```
#pep-tooltips.custom-styles-for-tooltip {
  width: 500px;
}
```

## Properties
You can configure the tooltip with custom data attributes.

* data-tooltip-class="custom-class"
  * Adds `custom-class` to the tooltip container.
* data-tooltip-arrow
  * When set, enables the Arrow the points to the element.
* data-tooltip-placement="auto"
  * Sets the tooltip's placement. [offical docs](https://popper.js.org/docs/v2/constructors/#placement)
* data-tooltip-offset-skidding
  * [offical docs](https://popper.js.org/docs/v2/modifiers/offset/#skidding-1)
* data-tooltip-offset-distance
  * [offical docs](https://popper.js.org/docs/v2/modifiers/offset/#distance-1)


## Install Other methods.

```
<link rel="stylesheet" href="dist/styles.css">
<script src="dist/webpack.bundle.js"></script>
```


## Running pep-tootips locally
If you want to work with `pep-tooltips` locally and test out your changes, follow these steps
1. Go to pep-tooltips folder and run `npm link` command
2. Go to the app folder that uses `pep-tooltips`, e.g. `pepsico-admin`,
and run `npm link pep-tooltips` command there
3. Back in pep-tooltips folder run `make build` command.

You now should be able to see your changes to `pep-tooltips`. Please note, you need to run step #3 and refresh the page of your host app after each change.

