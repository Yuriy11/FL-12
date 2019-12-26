function makeNumber(inputString) {
    let result = 0;
    for (let symbol of arguments) {
        if (symbol >= 0 && symbol <= 9) {
            result += parseInt(symbol);
        }
    }
    return result;
}