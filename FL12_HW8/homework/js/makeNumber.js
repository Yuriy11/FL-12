function makeNumber(inputString) {
    let result = "";
    for (let symbol of arguments) {
        if (symbol >= 0 && symbol <= 9) {
            result += symbol;
        }
    }
    return parseInt(result);
}