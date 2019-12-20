let a = parseFloat(prompt("input a for quadratic equation ax^2 + bx + c = 0"));
let b = parseFloat(prompt("input a for quadratic equation ax^2 + bx + c = 0"));
let c = parseFloat(prompt("input a for quadratic equation ax^2 + bx + c = 0"));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Invalid input data");
} else {
  let discriminant = b * b - 4 * a * c;
  console.log("disc:" + discriminant);
  if (discriminant < 0) {
    console.log("no solution");
  } else if (discriminant == 0) {
    console.log("disc=0");
    console.log("x=" + -b / (2 * a));
  } else {
    console.log(
      "x1=" +
        (-b + Math.sqrt(discriminant)) / (2 * a) +
        " x2=" +
        (-b - Math.sqrt(discriminant)) / (2 * a)
    );
  }
}
