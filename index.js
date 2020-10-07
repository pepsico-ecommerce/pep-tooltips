(function () {
  'use strict';

  var _require = require('wicked-elements'),
      define = _require.define;

  var _require2 = require('@popperjs/core'),
      createPopper = _require2.createPopper;

  require('./styles.css');

  var ID_TOOLTIP = '#tooltip';
  /**
   * Upgrades elements with the `tooltip` attribute to enable tooltips.
   * Positions the tooltip wrapper element
   * and replaces the content with the value from the attribute.
   */

  define('[tooltip]', {
    get elmTooltip() {
      var elm = document.querySelector(ID_TOOLTIP);

      if (!elm) {
        throw new Error("Could not find the element ".concat(ID_TOOLTIP, ".\nThis element is required for tooltips."));
      }

      return elm;
    },

    onMouseenter: function onMouseenter() {
      var _el$dataset, _el$dataset2, _el$dataset3;

      var el = this.element;
      var placement = ((_el$dataset = el.dataset) === null || _el$dataset === void 0 ? void 0 : _el$dataset.tooltipPlacement) || 'auto'; // https://popper.js.org/docs/v2/constructors/#placement

      var offsetSkidding = ((_el$dataset2 = el.dataset) === null || _el$dataset2 === void 0 ? void 0 : _el$dataset2.tooltipOffsetSkidding) || 0; // https://popper.js.org/docs/v2/modifiers/offset/#skidding-1

      var offsetDistance = ((_el$dataset3 = el.dataset) === null || _el$dataset3 === void 0 ? void 0 : _el$dataset3.tooltipOffsetDistance) || 0; // https://popper.js.org/docs/v2/modifiers/offset/#distance-1

      var body = this.element.getAttribute('tooltip'); // Skip if there is no tooltip text

      if (body === '') {
        return;
      } // Replace the content in the element with the text value from the attribute.


      this.elmTooltip.innerHTML = body; // Create a popper to manage the element's position.

      this.popper = createPopper(this.element, this.elmTooltip, {
        placement: placement,
        modifiers: [{
          name: 'offset',
          options: {
            offset: [offsetSkidding, offsetDistance]
          }
        }]
      }); // Show the tooltip element.

      this.elmTooltip.style.display = 'inherit';
    },
    onMouseleave: function onMouseleave() {
      // Reset the tooltip element so it can be re-used.
      this.elmTooltip.innerHTML = '';
      this.elmTooltip.style.display = 'none'; // remove the popper.

      this.popper && this.popper.destroy();
    }
  });

}());
