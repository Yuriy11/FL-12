function countNumbers(inputString) {
    let result = "";
    for (let symbol of inputString) {
        if (Number(symbol) >= 0 && Number(symbol) <= 9) {
            result += symbol;
        }
    }
    return result;
}