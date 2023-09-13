/**
 * Parses a CSV-like string and returns an array of values.
 * If a multiline string is passed (e.g.: an entire csv file read) it will return an array of arrays
 * The function can handle quoted and unquoted texts, escaped quotes and both commas (,) and semicolons (;) as cell delimiters
 *
 * @param {string} input - The CSV-like input string to parse.
 * @returns {Array} An array of parsed values.
 */
function parseCSV(input) {
    // Check if the input is empty or null, and return an empty array if so.
    if (!input || input === '') {
        return [];
    }

    // Determine if the input contains multiple rows (line breaks).
    const multirow = input.includes("\r\n");

    // Define the regular expression pattern for matching CSV values.
    const pattern = new RegExp("(,|;|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^\",;\\r\\n]*))", "gi");

    // Initialize an array to store the parsed values.
    let output = multirow ? [[]] : [];
    let matches;

    // Use a while loop to iterate through the input string and extract CSV values.
    while ((matches = pattern.exec(input)) !== null) {
        // Check if a new row should be created in multirow mode.
        if (multirow && matches[1].length && !matches[1].match(/,|;/)) {
            output.push([]);
        }

        // Extract the value, unescaping double quotes.
        const val = matches[2] ? matches[2].replace(/""/g, "\"") : matches[3];

        // Push the value to the appropriate row or directly to the output array.
        if (multirow) {
            output[output.length - 1].push(val);
        } else {
            output.push(val);
        }
    }

    return output;
}
