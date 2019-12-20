let side1 = parseFloat(prompt("input first side len for triangle"));
let side2 = parseFloat(prompt("input first side len for triangle"));
let side3 = parseFloat(prompt("input first side len for triangle"));
if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
  window.alert("Input values should be only numbers");
} else if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    window.alert("A triangle must have 3 sides with a positive definite length");
}
else if((side1>=side2+side3)||(side2>=side1+side3)||(side3>=side1+side2)){
    console.log("Triangle doesn’t exist")
}
else if(side1==side2==side3){
    console.log("Equilateral triangle’")
}
else if((side1==side2)||(side2==side3)||(side3==side1)){
    console.log("Isosceles triangle")
}
else{
    console.log("Scalene triangle")
}