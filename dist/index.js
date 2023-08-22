"use strict";

var _wickedElements = require("wicked-elements");
var _core = require("@popperjs/core");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var ID_TOOLTIP = '#pep-tooltips';

/**
 * Upgrades elements with the `tooltip` attribute to enable tooltips.
 * Positions the tooltip wrapper element
 * and replaces the content with the value from the attribute.
 */
(0, _wickedElements.define)('[tooltip]', {
  get elmTooltip() {
    var elm = document.querySelector(ID_TOOLTIP);
    if (!elm) {
      throw new Error("Could not find the element ".concat(ID_TOOLTIP, ".\nThis element is required for tooltips."));
    }
    return elm;
  },
  onMouseenter: function onMouseenter() {
    var _el$dataset, _el$dataset2, _el$dataset3, _el$dataset4, _el$dataset5;
    var el = this.element;
    var placement = ((_el$dataset = el.dataset) === null || _el$dataset === void 0 ? void 0 : _el$dataset.tooltipPlacement) || 'auto'; // https://popper.js.org/docs/v2/constructors/#placement
    var offsetSkidding = ((_el$dataset2 = el.dataset) === null || _el$dataset2 === void 0 ? void 0 : _el$dataset2.tooltipOffsetSkidding) || 1; // https://popper.js.org/docs/v2/modifiers/offset/#skidding-1
    var offsetDistance = ((_el$dataset3 = el.dataset) === null || _el$dataset3 === void 0 ? void 0 : _el$dataset3.tooltipOffsetDistance) || 1; // https://popper.js.org/docs/v2/modifiers/offset/#distance-1
    var customClasses = ((_el$dataset4 = el.dataset) === null || _el$dataset4 === void 0 ? void 0 : _el$dataset4.tooltipClass) || null;
    var useArrow = ((_el$dataset5 = el.dataset) === null || _el$dataset5 === void 0 ? void 0 : _el$dataset5.tooltipArrow) || false;
    var body = this.element.getAttribute('tooltip');

    // Skip if there is no tooltip text
    if (body === '' || !body) {
      return;
    }
    // Replace the content in the element with the text value from the attribute.
    this.elmTooltip.innerHTML = body;
    // if they want an arrow, append the div
    if (useArrow) {
      var elmArrow = document.createElement('div');
      elmArrow.dataset.popperArrow = true;
      this.elmTooltip.appendChild(elmArrow);
    }
    // Apply custom class
    if (customClasses) {
      var _this$elmTooltip$clas;
      (_this$elmTooltip$clas = this.elmTooltip.classList).add.apply(_this$elmTooltip$clas, _toConsumableArray(customClasses.split(' ')));
    }

    // Create a popper to manage the element's position.
    this.popper = (0, _core.createPopper)(this.element, this.elmTooltip, {
      placement: placement,
      modifiers: [{
        name: 'offset',
        options: {
          offset: [offsetSkidding, offsetDistance]
        }
      }]
    });

    // Show the tooltip element.
    this.elmTooltip.style.display = 'inherit';
  },
  onMouseleave: function onMouseleave() {
    var _el$dataset6;
    var el = this.element;
    var customClasses = ((_el$dataset6 = el.dataset) === null || _el$dataset6 === void 0 ? void 0 : _el$dataset6.tooltipClass) || null;
    // Reset the tooltip element so it can be re-used.
    this.elmTooltip.innerHTML = '';
    this.elmTooltip.style.display = 'none';
    if (customClasses) {
      var _this$elmTooltip$clas2;
      (_this$elmTooltip$clas2 = this.elmTooltip.classList).remove.apply(_this$elmTooltip$clas2, _toConsumableArray(customClasses.split(' ')));
    }
    // remove the popper.
    this.popper && this.popper.destroy();
  },
  onFocusOut: function onFocusOut() {
    // Close the tooltip when the element loses focus.
    // This happens when React updates the element.
    this.onMouseleave();
  }
});