/**
 * Removes duplicate elements from an array.
 * @param {Array} arr - The input array.
 * @returns {Array} - The array with duplicate elements removed.
 */
function removeDupes(arr) {
    var obj = {};
    var newArr = [];
    for (var i = 0; i < arr.length; i++) { // Fixed typo: changed 'arr.lengths' to 'arr.length'
        if (!obj[arr[i]]) {
            obj[arr[i]] = true; // Changed 'false' to 'true' to mark the element as seen
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDupes([1, 2, 3, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
console.log(removeDupes([1, 1, 2, 2, 3, 3])); // Expected output: [1, 2, 3]
console.log(removeDupes([1, 2, 3, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
console.log(removeDupes([])); // Expected output: []
console.log(removeDupes([1, 1, 1, 1, 1])); // Expected output: [1]



// write an email regex function
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Test cases
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("test@example")); // false
console.log(validateEmail("test@example.")); // false
console.log(validateEmail("test@example..com")); // false
console.log(validateEmail("test@.com")); // false
console.log(validateEmail("test@")); // false
console.log(validateEmail("@example.com")); // false
console.log(validateEmail("test@example.com.")); // false
console.log(validateEmail("test@example.com..")); // false


