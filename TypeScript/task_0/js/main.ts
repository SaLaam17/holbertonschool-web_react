interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jean",
  lastName: "Bon",
  age: 16,
  location: "Bordeaux",
};
const student2: Student = {
  firstName: "Samir",
  lastName: "Itlequ",
  age: 17,
  location: "Pau",
};

const studentsList = [student1, student2];
