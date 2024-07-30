/**
 * Composes multiple callback functions into a single function. The returned function,
 * when called, invokes each provided callback in sequence with the same arguments.
 *
 * Inspired by the `chain` utility from the `@react-aria/utils`.
 *
 * @param {...Function[]} callbacks - The callback functions to be chained.
 * @returns {Function} A function that calls all the provided callbacks in sequence.
 */
function chain(...callbacks: any[]): (...args: any[]) => void {
  return (...args: any[]) => {
    for (let callback of callbacks) {
      if (typeof callback === 'function') {
        callback(...args);
      }
    }
  };
}

export { chain };