// BEGIN
/**
 * @param {object} context
 * @param {function} func
 */
const bind = (context, func) => {
  if (typeof context !== 'object' || typeof func !== 'function')
    return () => {};

  return (...args) => func.apply(context, args);
}

export default bind;
// END