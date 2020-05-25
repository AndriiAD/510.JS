//task 1
let x = 1;
let y = 2;

let res1 = (x + y) ** y + (x + y) + ""

console.log(res1); // "12"
console.log(typeof res1); // "string" —- let res1 = x + “” + y
console.log(res1); // "12"
console.log(typeof res1); // "string"
——
let res2 = true + '' + y;
console.log(res2); // "true2"
console.log(typeof res2); // "string" — let res2 = !!x + String(y)
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = !!x
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = (parseFloat(“xy”)); 
console.log(res4); // NaN
console.log(typeof res4);

// task 2
let someNumber = prompt("Enter your number", "Your number should be possitive. Example => 7");
let a
a = someNumber % 2;

if (a > 0 && a = 0) {
    console.log('Your number ' + someNumber + ' is even and positive')
} if (a <= 0 || a = 0) {
    console.log('Your number ' + someNumber + ' is even but Not positive')
} else {
    console.log(('Your number ' + someNumber + ' is NOT even or positive'))
}

let b;
b = someNumber % 7;

if (b = 0) {
    console.log('Your number ' + someNumber + ' is aliquot to 7')
} else {
    console.log(('Your number ' + someNumber + ' is NOT aliquot to 7'))
}

// task 3
let arrNumber = []; 

arrNumber.push (22);
arrNumber.push ("that is a line");
arrNumber.push (true);
arrNumber.push (null);

document.writeln(arrNumber.length);

let userNumber = prompt("Enter any number, please", "Example => 7");
arrNumber.push(userNumber);

document.writeln(arrNumber[4]);

arrNumber.splice(0,0);

document.writeln(arrNumber)

console.log(arrNumber)

// task 4
let cities = ["Rome", "Lviv", "Warsaw"];

cities.concat(newCities: *);
