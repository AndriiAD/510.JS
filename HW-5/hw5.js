// task 1 

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

 


// // task 2

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




// // task 3

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




// // task 4 

// class Worker {
//     constructor (fullName, dayRate, workingDays){
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }
// // 1
//     showSalary () {
//         let result = this.dayRate * this.workingDays;
//         return result;
//     }
// // 2
//     #experience = 1.2;

//     showSalaryWithExperience () {
//         return this.dayRate * this.workingDays * this.#experience;
//     }
// // 3
//     get setExp() {
//         return this.#experience;
//     }
//     set setExp(value) {
//         this.#experience = value;
//         return;
//     }
// // 4
// // 5



// }
// // 0
// let worker1 = new Worker("John Watson", 10, 10);
// console.log(worker1.fullName); 
// // 1           
// console.log(worker1.fullName + "'s salary " + worker1.showSalary());
// // 2
// console.log("New experience: " + worker1.setExp);
// console.log(worker1.fullName + "'s salary " + worker1.showSalaryWithExperience());
// // 3
// worker1.setExp = 1.5;
// console.log("Second New experience: " + worker1.setExp);
// // 4
// console.log(worker1.fullName + "'s salary " + worker1.showSalaryWithExperience());
// // 5
// let worker2 = new Worker("Tim Kuk", 48, 221);
// let worker3 = new Worker("Jeff Bezos", 88, 502);
// let worker4 = new Worker("Nill Armstrong", 18, 122);
// let worker5 = new Worker("Elon Mask", 50, 50);

// //here I putted my objects into array before sorting
// let arrayWorkers = [worker1, worker2, worker3, worker4, worker5];

// // here i am sorting my array of objects
// function compare( a, b ) {
//     if ( a.workingDays < b.workingDays){
//       return -1;
//     }
//     if ( a.workingDays > b.workingDays){
//       return 1;
//     }
//     return 0;
//   }
  
//   arrayWorkers.sort(compare);
 
// // here i want to return the result in the correct format. But it is returming 'undefined'. I tried to play with function and convert it back to object but it gets too complicated and no result at the end.
// console.log(Worker.fullName + ': ' + Worker.workingDays);
// // so i made just this
// console.log(arrayWorkers);





// task 5

class GeometricFigure {
    getArea() {
        return 0;
}
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
}
}
class Triangle extends GeometricFigure {
    constructor (side1, side2, side3) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    static getArea() {
        return this.side1 * this.side2 * this.side3;
}

}
class Square extends GeometricFigure {
    constructor (sqrSize) {
        super();
        this.sqrSize = sqrSize;
    }

    static getArea() {
        return Math.pow(this.sqrSize, 2);
    }

}
class Circle extends GeometricFigure {
    constructor (radius) {
        super();
        this.radius = radius;
    }

    static getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

}


//2
function handleFigures () {

    console.log(Triangle instanceof GeometricFigure);
    console.log(Square instanceof GeometricFigure);
    console.log(Circle instanceof GeometricFigure);


    console.log(GeometricFigure.name + ': ' + Triangle.name + ': ' + Triangle.getArea());
    console.log(GeometricFigure.name + ': ' + Square.name + ': ' + Square.getArea());
    console.log(GeometricFigure.name + ': ' + Circle.name + ': ' + Circle.getArea());

    var figures = [Triangle.getArea(), Square.getArea(), Circle.getArea()];
    return figures.reduce(totalArea);
    
    function totalArea(figure1, figure2, figure3) {
      return figure1 + figure2 + figure3;
    } 

    console.log(totalArea());
}

//result
const figures = [new Triangle(4, 5, 3), new Square(7), new Circle(5)];

console.log(handleFigures(figures));
