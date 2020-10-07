# pep-tooltips
Turn the attribute "tooltip" into tooltips with this drop in script using custom elements. Drop into a page and all new and existing elements with the `tooltip` attribute will be upgraded.

### Examples:
```
<div tooltip="Dollars per hour">$9,001</div>

<button tooltip="We won't spam you!">Submit<button>
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
