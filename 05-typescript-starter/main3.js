var Student = /** @class */ (function () {
    function Student(first, last) {
        this.firstName = "";
        this.lastName = "";
        this.firstName = first;
        this.lastName = last;
    }
    Student.prototype.display = function () {
        console.log("first name= " + this.firstName);
        console.log("last name = ".concat(this.lastName));
    };
    return Student;
}());
"";
var student1 = new Student('Aditya', 'Pradhan');
student1.display();
