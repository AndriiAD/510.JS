
// // task 4
// let cities = ["Rome", "Lviv", "Warsaw"];

// console.log = cities.join("*");




// //task 5

// let isAdult = prompt('How old are you?', 'enter your age ... for example 20');

// // i dont know but, switch operator part is not working for this case
// switch(true) {  
//     case (isAdult >= 18):alert('You are adult'); break;  
//     case (isAdult < 18):alert('You are way to young'); break; 
//     default:alert('Your input is invalid. Please enter the valid number.');
//     } 

    // if (isAdult >= 18) {
    //     alert('Ви досягли повнолітнього віку');
    // } else if (isAdult < 10) {
    //     alert('Ви ще надто молоді');
    // } else {
    //     alert('Your input is invalid. Please enter the valid number.');
    // }



//task 6
let size1 = prompt('Enter first short side of the triangular', 'for exaple => 4');
let size2 = prompt('Enter second short side of the triangular', 'for exaple => 5');
let size3 = prompt('Enter third, the longest side of the triangular', 'for exaple => 9');

switch (true) {
case (size1 <= 0) :
    alert('Incorrect data');
break;
case (size2 <= 0) :
    alert('Incorrect data');
break;
case (size3 <= 0) :
    alert('Incorrect data');
break;
default :
    var result = size1 * size2 * size3;
    var resRounded = result.toFixed(3);

    console.log('the area of the triangle is ');
    console.log(resRounded);

    check1 = Math.pow(size1, 2) + Math.pow(size2, 2)
    check2 = Math.pow(size3, 2)

    if (check1 == check2) {
        console.log('Your triangular ' + size1 + ', ' + size2 + ', ' + size3 + ' is right-sided')
    } else {
        console.log('Your triangular ' + size1 + ', ' + size2 + ', ' + size3 + ' is NOT right-sided')
    }
}
// // task 7

// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// console.log(time)
// console.log(today)

// let currentHour = today.getHours();
// console.log(currentHour);

// // having trouble. the system always takes the first result and do not go farther down on the operator.

// // switch (currentHour) {
// //     case (currentHour = 23) : console.log('good night'); break;
// //     case (0<currentHour<5) : console.log('good night'); break;
// //     case (5<currentHour<11) : console.log('good morning'); break;
// //     case (11<currentHour<17) : console.log('good afternoon'); break;
// //     case (17<currentHour<23) : console.log('good evening'); break;
// // }

// if (0<currentHour<5) {
//     alert('good night');
// } else if (5<currentHour<11) {
//     alert('good morning');
// } else if (11<currentHour<17) {
//     alert('good afternoon');
// } else if (17<currentHour<23) {
//     alert('good evening');
// } 

