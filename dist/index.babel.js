(function () {
  'use strict';

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var _require = require('wicked-elements'),
      define = _require.define;

  var _require2 = require('@popperjs/core'),
      createPopper = _require2.createPopper;

  require('./styles.css');

  var ID_TOOLTIP = '#pep-tooltips';
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
      var _el$dataset, _el$dataset2, _el$dataset3, _el$dataset4;

      var el = this.element;
      var placement = ((_el$dataset = el.dataset) === null || _el$dataset === void 0 ? void 0 : _el$dataset.tooltipPlacement) || 'auto'; // https://popper.js.org/docs/v2/constructors/#placement

      var offsetSkidding = ((_el$dataset2 = el.dataset) === null || _el$dataset2 === void 0 ? void 0 : _el$dataset2.tooltipOffsetSkidding) || 1; // https://popper.js.org/docs/v2/modifiers/offset/#skidding-1

      var offsetDistance = ((_el$dataset3 = el.dataset) === null || _el$dataset3 === void 0 ? void 0 : _el$dataset3.tooltipOffsetDistance) || 1; // https://popper.js.org/docs/v2/modifiers/offset/#distance-1

      var customClasses = ((_el$dataset4 = el.dataset) === null || _el$dataset4 === void 0 ? void 0 : _el$dataset4.tooltipClass) || null;
      var body = this.element.getAttribute('tooltip'); // Skip if there is no tooltip text

      if (body === '' || !body) {
        return;
      } // Replace the content in the element with the text value from the attribute.


      this.elmTooltip.innerHTML = body; // Apply custom class

      if (customClasses) {
        var _this$elmTooltip$clas;

        (_this$elmTooltip$clas = this.elmTooltip.classList).add.apply(_this$elmTooltip$clas, _toConsumableArray(customClasses.split(' ')));
      } // Create a popper to manage the element's position.


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
      var _el$dataset5;

      var el = this.element;
      var customClasses = ((_el$dataset5 = el.dataset) === null || _el$dataset5 === void 0 ? void 0 : _el$dataset5.tooltipClass) || null; // Reset the tooltip element so it can be re-used.

      this.elmTooltip.innerHTML = '';
      this.elmTooltip.style.display = 'none';

      if (customClasses) {
        var _this$elmTooltip$clas2;

        (_this$elmTooltip$clas2 = this.elmTooltip.classList).remove.apply(_this$elmTooltip$clas2, _toConsumableArray(customClasses.split(' ')));
      } // remove the popper.


      this.popper && this.popper.destroy();
    },
    onFocusOut: function onFocusOut() {
      // Close the tooltip when the element loses focus.
      // This happens when React updates the element.
      this.onMouseleave();
    }
  });

}());
