// 5. Advanced types Part 1

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string{ 
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string{ 
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string) {
  const numericSalary = typeof salary === "string" ? parseInt(salary) : salary;

  if (numericSalary <= 500) {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(200) instanceof Teacher ? "Teacher" : "Director");
console.log(createEmployee(1000) instanceof Director ? "Director" : "Teacher");
console.log(createEmployee("$500") instanceof Director ? "Director" : "Teacher");

