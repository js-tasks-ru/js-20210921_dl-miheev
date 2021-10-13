/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    const resultObj = {};
    for (const entry of Object.entries(obj)) {
        if (!fields.includes(entry[0]))
            resultObj[entry[0]] = entry[1];
    }
    return resultObj;
};
