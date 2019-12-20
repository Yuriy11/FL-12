let a = parseFloat(prompt("input a fro quadratic equation ax^2 + bx + c = 0"))
let b = parseFloat(prompt("input a fro quadratic equation ax^2 + bx + c = 0"))
let c = parseFloat(prompt("input a fro quadratic equation ax^2 + bx + c = 0"))
console.log(a)
let discriminant = Math.sqrt(b * b - 4 * a * c)
if (discriminant < 0) {
    console.log("no solution")
}