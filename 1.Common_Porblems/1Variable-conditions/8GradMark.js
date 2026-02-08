function getGrade(marks) {
    if (marks < 0 || marks > 100)
        return "Invalid Marks";
    if (marks >= 90)
        return "A+";
    else if (marks >= 80)
        return "A";
    else if (marks >= 70)
        return "B";
    else if (marks >= 60)
        return "C";
    else if (marks >= 50)
        return "D";
    else
        return "F";
}
var studentMarks = 85;
var finalGrade = getGrade(studentMarks);
console.log("Marks: ".concat(studentMarks, ", Grade: ").concat(finalGrade));
