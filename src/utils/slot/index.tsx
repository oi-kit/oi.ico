/**
 * This module exports components and utilities related to slot management in React.
 *
 * - **`Slot`**: A component that manages the rendering of slotted content, supporting
 *   dynamic content injection and cloning.
 * - **`SlotClone`**: A component that clones its children with merged props and 
 *   combined refs.
 * - **`Slottable`**: A simple component used as a marker for slotted content.
 */

export { default as Slot } from './Slot';
export { default as SlotClone } from './SlotClone';
export { default as Slottable } from './Slottable';