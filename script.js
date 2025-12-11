class Person {
  constructor(name, age) {
    this._name = name;   
    this._age = age;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }
}

class Student extends Person {
  study() {
    console.log(name, "is studying");
  }
}

class Teacher extends Person {
  teach() {
    console.log(name, "is teaching");
  }
}
