import { define } from 'wicked-elements';
import { createPopper } from '@popperjs/core';

const ID_TOOLTIP = '#pep-tooltips';

/**
 * Upgrades elements with the `tooltip` attribute to enable tooltips.
 * Positions the tooltip wrapper element
 * and replaces the content with the value from the attribute.
 */
define('[tooltip]', {
  get elmTooltip() {
    const elm = document.querySelector(ID_TOOLTIP);
    if (!elm) {
      throw new Error(`Could not find the element ${ID_TOOLTIP}.\nThis element is required for tooltips.`);
    }
    return elm;
  },

  onMouseenter() {
    const el = this.element;
    const placement = el.dataset?.tooltipPlacement || 'auto'; // https://popper.js.org/docs/v2/constructors/#placement
    const offsetSkidding = el.dataset?.tooltipOffsetSkidding || 1; // https://popper.js.org/docs/v2/modifiers/offset/#skidding-1
    const offsetDistance = el.dataset?.tooltipOffsetDistance || 1; // https://popper.js.org/docs/v2/modifiers/offset/#distance-1
    const customClasses = el.dataset?.tooltipClass || null;
    const useArrow = el.dataset?.tooltipArrow || false;
    const body = this.element.getAttribute('tooltip');

    // Skip if there is no tooltip text
    if (body === '' || !body) {
      return;
    }
    // Replace the content in the element with the text value from the attribute.
    this.elmTooltip.innerHTML = body;
    // if they want an arrow, append the div
    if (useArrow) {
      const elmArrow = document.createElement('div');
      elmArrow.dataset.popperArrow = true;
      this.elmTooltip.appendChild(elmArrow);
    }
    // Apply custom class
    if(customClasses) {
      this.elmTooltip.classList.add(...customClasses.split(' ')) 
    }

    // Create a popper to manage the element's position.
    this.popper = createPopper(this.element, this.elmTooltip, {
      placement: placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [offsetSkidding, offsetDistance],
          },
        },
      ],
    });

    // Show the tooltip element.
    this.elmTooltip.style.display = 'inherit';
  },
  onMouseleave() {
    const el = this.element;
    const customClasses = el.dataset?.tooltipClass || null;
    // Reset the tooltip element so it can be re-used.
    this.elmTooltip.innerHTML = '';
    this.elmTooltip.style.display = 'none';
    if(customClasses) {
      this.elmTooltip.classList.remove(...customClasses.split(' '))
    }
    // remove the popper.
    this.popper && this.popper.destroy();
  },
  onFocusOut: function onFocusOut() {
    // Close the tooltip when the element loses focus.
    // This happens when React updates the element.
    this.onMouseleave();
  },
});
