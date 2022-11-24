function sum(a, b) {
	return a + b;
}

let sum2 = (a, b) => a + b;

function isPositive(number) {
	return number >= 0;
}

let isPositive2 = (number) => number >= 0;

function randomNumber() {
	return Math.random;
}

let randomNumber2 = () => Math.random;

document.addEventListener("click", () => console.log("Click"));

let x = 3;
let y = 4;
let z = -2;

let testResult = sum(x, y);
let testResult2 = sum2(x, y);
let isPositiveTest = isPositive2(z);
console.log(randomNumber2.result);

class Person {
	constructor(name) {
		this.name = name;
	}

	printNameArrow() {
		setTimeout(() => {
			console.log("Arrow: " + this.name);
		}, 100);
	}

	printNameFunction() {
		setTimeout(function () {
			console.log("Function: " + Person.name);
		}, 100);
	}
}

let person = new Person("Bob");
person.printNameArrow();
person.printNameFunction();
