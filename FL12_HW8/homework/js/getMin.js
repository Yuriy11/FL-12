function getMin() {
    let result;
    for (let number of arguments) {
        if (result < number) {
            result = number;
        }
    }
    return result;
}