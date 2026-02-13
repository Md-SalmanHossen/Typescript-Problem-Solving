var student = /** @class */ (function () {
    function student(name, age) {
        this.name = name;
        this.age = age;
    }
    student.prototype.introduce = function () {
        console.log("Hi, I am ".concat(this.name, " and my age is ").concat(this.age));
    };
    return student;
}());
var student1 = new student('Salman', 25);
student1.introduce();
