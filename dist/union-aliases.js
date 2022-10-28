"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result; // +variableName converts it to number type
    }
    else {
        return result.toString();
    }
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedStringsAges = combine("30", "26", "as-number");
console.log(combinedStringsAges);
const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);