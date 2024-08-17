// Define the toUnderscore function
function toUnderscore(string) {
    // Check if the input is a number
    if (typeof string === 'number') {
        return string.toString();
    }

    // Check if the input is a string
    if (typeof string !== 'string') {
        throw new Error('Input must be a string or a number');
    }

    // Initialize the result string
    let result = '';

    // Iterate through each character in the string
    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        // Check if the character is an uppercase letter
        if (char >= 'A' && char <= 'Z') {
            // If it's not the first character, add an underscore
            if (i > 0) {
                result += '_';
            }
            // Convert the uppercase letter to lowercase and append it to the result
            result += char.toLowerCase();
        } else {
            // Append lowercase letters and numbers directly to the result
            result += char;
        }
    }

    return result;
}

// Test cases
Test.assertEquals(toUnderscore("TestController"), "test_controller", "TestController should be converted to test_controller");
Test.assertEquals(toUnderscore("MoviesAndBooks"), "movies_and_books", "MoviesAndBooks should be converted to movies_and_books");
Test.assertEquals(toUnderscore("App7Test"), "app7_test", "App7Test should be converted to app7_test");
Test.assertEquals(toUnderscore(1), "1", "Input of 1 should be converted to '1'");
Test.assertEquals(toUnderscore("Single"), "single", "Single should be converted to single");
Test.assertEquals(toUnderscore("CamelCase"), "camel_case", "CamelCase should be converted to camel_case");
Test.assertEquals(toUnderscore("A1B2C3"), "a1_b2_c3", "A1B2C3 should be converted to a1_b2_c3");
Test.assertEquals(toUnderscore(""), "", "An empty string should remain an empty string");
Test.assertEquals(toUnderscore("OneMoreTest"), "one_more_test", "OneMoreTest should be converted to one_more_test");
