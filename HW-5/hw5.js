// **********************   task - 1  ********************

// let mentor = { 
//     course: 'JS fundamental', 
//     duration: 3,
//     direction: 'web-development',
//     lector: 'Oleg'
// };

// function propsCount() {
//     console.log(count = Object.keys(mentor).length);
// }

// propsCount ();

 


// **********************   task - 2  ********************

// let country = {
//     name: 'Ukraine',
//     regions: 25,
//     capital: 'Kyiv',
//     status: 'independent',
//     hasASea: true,
// };

// function showProps() {
//     return Object.keys(country);
// }
// console.log(showProps());

// console.log(Object.values(country));




// **********************   task - 3  ********************

// class Person {
//     constructor (name, surname) {
//         this.name = name;
//         this.surname = surname; 
//     }

//     showFullName () {
//         alert(this.name + ' ' + this.surname)
//     }
// }
// class Student extends Person {
//     constructor (name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }

//     showFullName (midleName) {
//         alert(this.name + ' ' + midleName + ' ' + this.surname);
//     }

//     showCourse () {
//         let currentYear =  new Date().getFullYear();
//         alert(currentYear - this.year);
//     }
// }

// let stud1 = new Student('Joan', 'Smith', 2010);
// console.log(stud1.showFullName('Murial')); 
// console.log('Current course: ' + stud1.showCourse()); 




// **********************   task - 4  ********************

class Worker {
    constructor (fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

// 1
    showSalary () {
        return this.dayRate * this.workingDays;
        
    }
// 2
    #experience = 1.2;

    showSalaryWithExperience () {
        let result = this.showSalary() * this.#experience;
        return result;
    }
// 3
    get setExp() {
        return this.#experience;
    }
    set setExp(value) {
        this.#experience = value;
        return;
    }
// 4
// 5

}
// 0
let worker1 = new Worker("John Watson", 10, 10);
console.log(worker1.fullName); 
// 1           
console.log(worker1.fullName + "'s salary " + worker1.showSalary());
// 2
console.log("New experience: " + worker1.setExp);
console.log(worker1.fullName + "'s salary " + worker1.showSalaryWithExperience());
// 3
worker1.setExp = 1.5;
console.log("Second New experience: " + worker1.setExp);
// 4
console.log(worker1.fullName + "'s salary " + worker1.showSalaryWithExperience());
console.log('******************');

// 5
let worker2 = new Worker("Tim Kuk", 48, 221);
console.log(worker2.fullName);         
console.log(worker2.fullName + "'s salary " + worker2.showSalary());
console.log("New experience: " + worker2.setExp);
console.log(worker2.fullName + "'s salary " + worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("Second New experience: " + worker2.setExp);
console.log(worker2.fullName + "'s salary " + worker2.showSalaryWithExperience());
console.log('******************');

let worker3 = new Worker("Jeff Bezos", 88, 502);
console.log(worker3.fullName);         
console.log(worker3.fullName + "'s salary " + worker3.showSalary());
console.log("New experience: " + worker3.setExp);
console.log(worker3.fullName + "'s salary " + worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("Second New experience: " + worker3.setExp);
console.log(worker3.fullName + "'s salary " + worker3.showSalaryWithExperience());
console.log('******************');

let worker4 = new Worker("Nill Armstrong", 18, 122);
console.log(worker4.fullName);         
console.log(worker4.fullName + "'s salary " + worker4.showSalary());
console.log("New experience: " + worker4.setExp);
console.log(worker4.fullName + "'s salary " + worker4.showSalaryWithExperience());
worker4.setExp = 1.5;
console.log("Second New experience: " + worker4.setExp);
console.log(worker4.fullName + "'s salary " + worker4.showSalaryWithExperience());
console.log('******************');

let worker5 = new Worker("Elon Mask", 500, 500);
console.log(worker5.fullName);         
console.log(worker5.fullName + "'s salary " + worker5.showSalary());
console.log("New experience: " + worker5.setExp);
console.log(worker5.fullName + "'s salary " + worker5.showSalaryWithExperience());
worker5.setExp = 1.5;
console.log("Second New experience: " + worker5.setExp);
console.log(worker5.fullName + "'s salary " + worker5.showSalaryWithExperience());
console.log('******************');

//here I putted my objects into array before sorting
let arrayWorkers = [worker1, worker2, worker3, worker4, worker5];

// here i am sorting my array of objects
                // let sortedSalary = arrayWorkers.sort((a,b) => {
                //     return a.showSalaryWithExperience() - b.showSalaryWithExperience();
                // })
function compare( a, b ) {
    if ( a.showSalaryWithExperience < b.showSalaryWithExperience){
      return -1;
    }
    if ( a.showSalaryWithExperience > b.showSalaryWithExperience){
      return 1;
    }
    return 0;
  }
let sortedSalary = arrayWorkers.sort(compare);

console.log(sortedSalary);
for (let i = 0; i < arrayWorkers.length; i++) {
    console.log(arrayWorkers[i].fullName + ': ' + sortedSalary[i].showSalaryWithExperience());
} 




// **********************   task - 5  ********************

// class GeometricFigure {
//     getArea() {
//         return 0;
// }
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
// }
// }
// class Triangle extends GeometricFigure {
//     constructor (side, hight) {
//         super();
//         this.side = side;
//         this.hight = hight;
//     }

//     static getArea() {
//         return this.side * this.hight/2;
// }

// }
// class Square extends GeometricFigure {
//     constructor (sqrSize) {
//         super();
//         this.sqrSize = sqrSize;
//     }

//     static getArea() {
//         return Math.pow(this.sqrSize, 2);
//     }

// }
// class Circle extends GeometricFigure {
//     constructor (radius) {
//         super();
//         this.radius = radius;
//     }

//     static getArea() {
//         return Math.PI * Math.pow(this.radius, 2);
//     }

// }


// //2
// function handleFigures () {

//     return figures.reduce(function(sum, figure) {
//         if (figure instanceof GeometricFigure) {
//             console.log(`Geometric figure: ${fugure.toString()} - area: ${figure.getArea()}`);
//             return sum + figure.getArea();
//         }
//         throw new Error ('Bad argument figure.');
//     }, 0);
// }
    
//     // console.log(Triangle instanceof GeometricFigure);
//     // console.log(Square instanceof GeometricFigure);
//     // console.log(Circle instanceof GeometricFigure);


//     // console.log(GeometricFigure.name + ': ' + Triangle.name + ': ' + Triangle.getArea());
//     // console.log(GeometricFigure.name + ': ' + Square.name + ': ' + Square.getArea());
//     // console.log(GeometricFigure.name + ': ' + Circle.name + ': ' + Circle.getArea());

//     // var figures = [Triangle.getArea(), Square.getArea(), Circle.getArea()];
//     // return figures.reduce(totalArea);
    
//     // function totalArea(figure1, figure2, figure3) {
//     //   return figure1 + figure2 + figure3;
//     // } 

//     // console.log(totalArea());


// //result
// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

// console.log(handleFigures(figures));
