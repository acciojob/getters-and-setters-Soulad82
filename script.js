class Person {
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  get name(): string {
    return this._name;
  }
  get age(): number {
    return this._age;
  }
  set age(age: number) {
    this._age = age;
  }
}
class Student extends Person {
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach(): void {
    console.log(`${this.name} is teaching`);
  }
}
