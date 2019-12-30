function addOne(input) {
    return input + 1;
}

function pipe(input) {
    let result = input;
    for (let i = 1; i < arguments.length; i++) {
        result = arguments[i](result);
    }
    return result;
}

pipe(1, addOne)