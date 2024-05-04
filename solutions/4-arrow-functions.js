// BEGIN
/**
 * @param {object[]} objects
 * @param {function} callback
 */
const each = (objects, callback) => {
    if (!Array.isArray(objects) || typeof callback !== 'function')
        return;

    objects.forEach((obj) => {
        callback.apply(obj);
    })
}

export default each;
// END
