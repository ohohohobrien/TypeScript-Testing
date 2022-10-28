"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Sean';
if (typeof userInput === 'string') {
    userName = userInput;
} // guaranteed string 
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// the return type will grey out any code below it in the IDE
generateError('An error occured!', 505);
const gday = 'string'; // <--- greyed out
const aaa = "big doe";
