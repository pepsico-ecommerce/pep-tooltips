import { AriaAttributes, DOMAttributes } from "react";

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    tooltip?: string;
    'data-tooltip-placement'?: string; // https://popper.js.org/docs/v2/constructors/#placement
    'data-tooltip-offset-distance'?: number; // https://popper.js.org/docs/v2/modifiers/offset/#distance-1
    'data-tooltip-offset-skidding'?: number; // https://popper.js.org/docs/v2/modifiers/offset/#skidding-1
  }
}
