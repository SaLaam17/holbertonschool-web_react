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

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstname, lastname) => {
  return `${firstname.charAt(0)}. ${lastname}`;
}

console.log(printTeacher("John", "Doe")); // J. Doe
