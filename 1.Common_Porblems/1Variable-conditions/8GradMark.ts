function getGrade(marks: number): string {
  if (marks < 0 || marks > 100) return "Invalid Marks";
  if (marks >= 90) return "A+"; 
  else if (marks >= 80) return "A";
  else if (marks >= 70) 
    return "B";
   else if (marks >= 60) 
    return "C";
   else if (marks >= 50) 
    return "D";
   else 
    return "F";
  
}

const studentMarks: number = 85;
const finalGrade: string = getGrade(studentMarks);

console.log(`Marks: ${studentMarks}, Grade: ${finalGrade}`);
