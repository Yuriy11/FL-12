function countNumbers(inputString) {
    let resultMap = new Map();
    for (let symbol of inputString) {
        if (Number(symbol) >= 0 && Number(symbol) <= 9) {
            if (resultMap.get(Number(symbol)) === undefined) {
                resultMap.set(Number(symbol), 1);
            } else {
                resultMap.set(Number(symbol), resultMap.get(Number(symbol)) + 1);
            }
        }
    }
    return resultMap;
}