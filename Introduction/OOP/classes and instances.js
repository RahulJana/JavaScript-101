// Class for a car game.
class Person{
    name;
    constructor(name){
        this.name = name;
    }
    introduceSelf(){
        console.log(`Hi! I'am ${this.name}`);
    }
}

// const rahul = new Person("Rahul");
// rahul.introduceSelf();


// class Animal{
//     sleep(){
//         console.log("zzz");
//     }
// }

// const sloth = new Animal();

// sloth.sleep();

// console.log("------------------------");

// Inheritance

class Student extends Person{  // class Student inherits class Person
    designation;
    #grade;
    #year = 1;  // Default 

    constructor(name, designation, year, grade){
        super(name);
        this.designation = designation;
        this.#year = year;
        this.#grade = grade;
    }

    introduceSelf(){
        console.log(`Hi! I'am ${this.name} (${this.designation}). Year: ${this.#year}. grade ${this.#grade}`);
    }

    canStudyArchery(){
        return this.#year > 2;
    }
}

const rahulStu = new Student("Rahul", "Student", 4, "AA");
rahulStu.introduceSelf();
console.log(rahulStu.canStudyArchery());