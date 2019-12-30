function getMin() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        console.log("result:" + result + ";number:" + arguments[i])
        if (result > arguments[i]) {
            result = arguments[i];
        }
    }
    return result;
}

getMin(-1, 2, 5, 888);