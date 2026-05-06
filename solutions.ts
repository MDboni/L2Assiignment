// ************************1****************

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}
const plm1 = filterEvenNumbers([1, 2, 3, 4, 5, 6])
console.log(plm1);

// ********************************2****************

function reverseString(text: string): string {
  return text.split("").reverse().join("");
}

const plm2 = reverseString("typescript");
console.log(plm2);

// ********************************3****************

type StringOrNumber = string | number;
function checkType(value: StringOrNumber): "String" | "Number" {
  return typeof value === "string" ? "String" : "Number";
}
const plm3 = checkType("Hello");
console.log(plm3);
const plm32 = checkType(42);
console.log(plm32);

// *******************************4**************


function getProperty<T, boni extends keyof T>(object: T, key: boni): T[boni] {
  return object[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
const plm4 = getProperty(user, "name");
console.log(plm4);

// ********************************5****************
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
const plm5 = toggleReadStatus(myBook);
console.log(plm5);

// *******************************6****************
class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
const plm6 = student.getDetails();
console.log(plm6);

// ********************************7****************

export function getIntersection(
  firstArray: number[],
  secondArray: number[]
): number[] {
  const secondArrayValues = new Set(secondArray);
  const uniqueFirstArrayValues = new Set(firstArray);

  return Array.from(uniqueFirstArrayValues).filter((number) =>
    secondArrayValues.has(number)
  );
}

const plm7 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
console.log(plm7);
