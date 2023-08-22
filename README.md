# PEP-Tooltips: Simplify Tooltip Integration

Enhance your web application's user experience by effortlessly incorporating tooltips using the PEP-Tooltips script. With minimal setup, this drop-in solution enables you to convert the "tooltip" attribute into interactive tooltips across your page.

## Examples

```html
<div tooltip="Dollars per hour">$9,001</div>
<button tooltip="We won't spam you!">Submit</button>
```

## Installation via NPM

Install directly from the PepsiCo GitHub repository:

```bash
npm install --save git+https://github.com/pepsico-ecommerce/pep-tooltips.git
```

## Usage

1. Import the PEP-Tooltips script into your project:

```javascript
import 'pep-tooltips';
```

2. Include the PEP-Tooltips CSS in your project:

```javascript
import './css/pep-tooltips.css';
```

3. Create a single wrapper div with the id `pep-tooltips` to hold all tooltip content:

```html
<div id="pep-tooltips"></div>
```

4. Apply the `tooltip` attribute to elements you want to attach tooltips to:

```html
<div tooltip="Dollars per hour">$9,001</div>
<button tooltip="Complete The Pepsi Challenge">Submit</button>
```

## Custom Styling

To customize the appearance of tooltips, utilize the `data-tooltip-class` attribute on the element. Then, in your CSS file, define rules for `#pep-tooltips.custom-tooltip`:

```html
<div tooltip="Dollars per hour" data-tooltip-class="custom-styles-for-tooltip">$9,001</div>
```

```css
#pep-tooltips.custom-styles-for-tooltip {
  width: 500px;
}
```

## Configuration

Tailor tooltips to your preferences using these custom data attributes:

- `data-tooltip-class="custom-class"`: Adds the specified class to the tooltip container.
- `data-tooltip-arrow`: Enables an arrow that points to the element.
- `data-tooltip-placement="auto"`: Sets the tooltip's placement ([official docs](https://popper.js.org/docs/v2/constructors/#placement)).
- `data-tooltip-offset-skidding`: Adjusts the tooltip's offset skidding ([official docs](https://popper.js.org/docs/v2/modifiers/offset/#skidding-1)).
- `data-tooltip-offset-distance`: Modifies the tooltip's offset distance ([official docs](https://popper.js.org/docs/v2/modifiers/offset/#distance-1)).

## Alternative Installation Methods

For different installation approaches, consider the following methods:

```html
<link rel="stylesheet" href="dist/styles.css">
<script src="dist/webpack.bundle.js"></script>
```

## Running PEP-Tooltips Locally

If you wish to work with PEP-Tooltips locally and test changes, follow these steps:

1. Navigate to the PEP-Tooltips folder and run `npm link`.
2. Move to the app folder using PEP-Tooltips (e.g., `pepsico-admin`) and execute `npm link pep-tooltips`.
3. Back in the PEP-Tooltips folder, run `make build`.

After completing these steps, you should observe your changes to PEP-Tooltips. Note that you need to perform step #3 and refresh your host app's page after each modification.