// Your code goes here

function convert(...elements) {
    let result = [];
    for (let element of elements) {
        if (typeof element === "string") {
            result.push(parseInt(element));
        } else if (typeof element === "number") {
            result.push(element.toString())
        } else {
            result.push(element)
        }
    }
    return result;
}

function executeforEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        array[i] = func(array[i]);
    }
}

function mapArray(array, func) {
    let _array = [];
    for (let element of array) {
        _array.push(parseInt(element));
    }
    executeforEach(_array, func);
    return _array;
}
let a = [1, 2, 3, 4];
function filterArray(array, func) {
    let result = [];
    executeforEach(array, function (el) {
        if (func(el)) {
            result.push(el);
        }
    });
    return result;
}

function flipOver(string) {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

function makeListFromRange(array) {
    let result = [];
    for (let i = array[0]; i <= array[1]; i++) {
        result.push(i);
    }
    return result;
}

const actors = [
    { name: "tommy", age: 36 },
    { name: "lee", age: 28 }
];

function getArrayOfKeys(objects, keyName) {
    let result=[];
    executeforEach(objects, function (el) { 
        result.push(el[keyName]);
        return el;
    });
    return result;
}

function substitute(arr) {
    let substituteSubFun=function (el) {
        if (el < 30) {
            return "*";
        } else {
            return el;
        }
    }
    let _arr = mapArray(arr, substituteSubFun);
    return _arr;
}
const date = new Date('6/15/2018 09:14:00');
function getPastDay(date, daysBefore) {
    return new Date(date.getTime() - daysBefore * 86400000);
}

function formatDate(date) {
    let addZero = function (val) {
        if (val < 10) {
            return `0${val}`
        }
        return val;
    }
    return date.getFullYear().toString() + "/" + (date.getMonth() + 1).toString() + 
    "/" + date.getDate().toString() + " " +
        addZero(date.getHours()).toString() + ":"
         + addZero(date.getMinutes()).toString();
}