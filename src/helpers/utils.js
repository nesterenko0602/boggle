/**
 * Make deep copy of object
 *
 * @param {Object} object Object to copy
 */
export const deepCopy = object => JSON.parse(JSON.stringify(object));
