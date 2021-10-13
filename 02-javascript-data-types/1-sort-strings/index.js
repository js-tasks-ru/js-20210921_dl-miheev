/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
	const result = arr.slice();
	const directions = {
		'asc': 1,
		'desc': -1
	}

	result.sort(function(a, b) { return directions[param] * a.localeCompare(b, 'ru', { caseFirst: 'upper' }); });
	return result;
}
