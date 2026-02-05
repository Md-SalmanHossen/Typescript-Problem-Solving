var year = 2024;
if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 === 0))
    console.log("".concat(year, " is leap year"));
else
    console.log("".concat(year, " is not leap year"));
