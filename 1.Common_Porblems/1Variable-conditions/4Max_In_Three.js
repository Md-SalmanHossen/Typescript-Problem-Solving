var num1 = 125;
var num2 = 155;
var num3 = 195;
console.log("Given numbers are : ".concat(num1, " ").concat(num2, " ").concat(num3));
if (num1 > num2 && num1 > num3)
    console.log("".concat(num1, " is a max number"));
if (num2 > num1 && num2 > num3)
    console.log("".concat(num2, " is a max number"));
else
    console.log("".concat(num3, " is a max number"));
