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


