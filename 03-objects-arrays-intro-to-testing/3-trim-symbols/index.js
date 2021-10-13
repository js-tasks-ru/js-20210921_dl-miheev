/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    let resultString = '';
    let limitReached = false;
    let previousChar = '';
    let sequenceLength = 0;

    for (const char of string) {
        
        if (char != previousChar){
            sequenceLength = 0;
            previousChar = char;
        }

        limitReached = sequenceLength >= size;
        
        if (!limitReached){
            resultString += char;
            sequenceLength++;
        }
    }

    return resultString;
}
