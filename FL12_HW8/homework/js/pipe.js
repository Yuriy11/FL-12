function addOne(input) {
    return input + 1;
}

function pipe(input) {
    result = input;
    for (let i = 1; i < arguments.length; i++) {
        result = arguments[i](result);
    }
    return result;
}