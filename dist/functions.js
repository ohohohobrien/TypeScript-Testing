"use strict";
function addV2(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResults(addV2(5, 6));
// let combineValues: (argument: type) => return-type;
let combineValues;
combineValues = addV2;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
