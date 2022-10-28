"use strict";
const BLOCK = "#";
function printBlocks(n) {
    let blockString = BLOCK;
    for (let i = 0; i < n; i++) {
        console.log(blockString);
        blockString += BLOCK;
    }
}
printBlocks(4);
printBlocks(5);
printBlocks(6);
printBlocks(7);
