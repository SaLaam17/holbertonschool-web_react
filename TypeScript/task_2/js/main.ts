// 5. Advanced types Part 1

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
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
  workDirectorTasks(): string {
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

console.log(createEmployee(200));
console.log(createEmployee(100));
console.log(createEmployee("$100"));
