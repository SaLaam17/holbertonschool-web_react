//1. Let's build a Teacher interface
interface Teacher {
  readonly firstName: string; //can only be set during initialization of an object of this interface
  readonly lastName: string; //can only be set during initialization of an object of this interface
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; //optional
  location: string;
  [propName: string]: any;
//Add the possibility to add any attribute to the Teacher object
//like contract(boolean) without specifying the name of the attribute:
//Property should be a string
//Type of this property can be anything
}

const teacher1: Teacher = {
  firstName: "Jacky",
  lastName: "Chan",
  fullTimeEmployee: true,
  yearsOfExperience: 18,
  location: "Bordeaux",
  contract: true,
}

console.log(teacher1);

//2. Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

//3. Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));

//4. Writing a class
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  displayName(): string;
  workOnHomework(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const stud: StudentClass = new StudentClass("Sam", "Lescasse");

console.log(stud.displayName());
console.log(stud.workOnHomework());
