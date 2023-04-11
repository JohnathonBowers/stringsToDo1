/*

REMOVE BLANKS

Create a function that, given a string, returns all of that 
string’s contents, but without blanks. 

Examples:

removeBlanks(" Pl ayTha tF u nkyM usi c ") => 
"PlayThatFunkyMusic"
removeBlanks("I can not BELIEVE it's not BUTTER") => 
"IcannotBELIEVEit'snotBUTTER

*/

function removeAt(arr, idx) {
    for(let i = idx; i < arr.length - 1; i++){
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return arr;
}

function removeBlanks(str) {
    const arr = []
    let newString = ""
    for(let i = 0; i < str.length; i++) {
        arr[arr.length] = str[i]
    }
    for(let j = 0; j < arr.length; j++) {
        if (arr[j] === " ") {
            removeAt(arr, j)
        }
    }
    for(let k = 0; k < arr.length; k++) {
        newString += arr[k]
    }
    return newString
}


/* 

GET DIGITS

Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

Examples:

getDigits("abc8c0d1ngd0j0!8") => 801008

getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

*/

function getDigits(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            newStr += str[i]
        }
    }
    return Number(newStr)
}