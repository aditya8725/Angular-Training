class Student
{
    firstName: string = "";
    lastName: string = "";
    

    constructor(first,last)
    {
        this.firstName = first;
        this.lastName = last;
    }
    display(): void
    {
        console.log("first name= "+ this.firstName );
        console.log(`last name = ${this.lastName}`);
    }
}

""
let student1: Student = new Student('Aditya','Pradhan');
student1.display();