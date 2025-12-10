//complete this code
class Person {
	constructor(name: string, age:number){
		this.name = name;
		this.age = age;
	}
	get name(name){
		this.name=name;
	}
	set age(age:numbeer){
		this.age=age;
	}
}

class Student extends Person {
	public static void study(){
		console.log(name," is studying")
	}
}

class Teacher extends Person {
	public static void teach(){
		console.log(name," is teaching")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
