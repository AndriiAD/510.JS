// // ********************  task - 1  ************************

// function calcRectangleArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//         throw 'Enter a number, please!';
//     } 
//     return width * height;
// }
// try {
//     let result = calcRectangleArea(3, "a");
//     console.log(result);
// } catch (exception) {
//     console.log(exception);
// }








// // ********************  task - 2  ************************

// function checkAge() {
//     let userAge = prompt('enter your age', '22');
    
//     switch (true) {
//         case (userAge.trim() == ''):
//             throw 'The field is empty! Please enter your age';
//         break;
//         case (userAge == isNaN):
//             throw 'The input is not a number. Please enter a number';
//         break;
//         case (userAge < 14):
//             throw 'You are still too young.. Try again later';
//         break;
//         case (userAge !== NaN):
//             alert('Good news. Your age is acsepted. Enjoy your movie');
//         break;
//     }
    
// try {
//     checkAge();
// } catch (exception) {
//     console.log(exception.name);
//     console.log(exception);
// }



// // solution from Oleg

// function checkAge() {
//     try {
//         let userAge = prompt('enter your age', '22');
    
//         if (userAge.trim() == '') {
//         throw new Error ('The field is empty! Please enter your age');
//     } else if (userAge = isNaN) {
//         throw new Error('The input is not a number. Please enter a number');
//     } else if (userAge < 14) {
//         throw new Error('You are still too young.. Try again later');
//     } else {
//         alert('Good news. Your age is acsepted. Enjoy your movie');
//     }
// }

//     catch (exception) {
//         console.log(exception.name);
//         console.log(exception.message);
//     }
// }
// checkAge();







// ********************  task - 3  ************************
// let month;

// function showMonthName(month) {

//     switch (month){
//         case 1 :
//             console.log('January');
//         break;
//         case 2 :
//             console.log('February');
//         break;
//         case 3 :
//             console.log('March');
//         break;
//         case 4 :
//             console.log('April');
//         break;
//         case 5 :
//             console.log('May');
//         break;
//         case 6 :
//             console.log('June');
//         break;
//         case 7 :
//             console.log('July');
//         break;
//         case 8 :
//             console.log('August');
//         break;
//         case 9 :
//             console.log('September');
//         break;
//         case 10 :
//             console.log('October');
//         break;
//         case 11 :
//             console.log('November');
//         break;
//         case 12 :
//             console.log('December');
//         break;
//     }

//     if (month == null || 12 < month < 1 || month.isNaN) {
//         throw new Error(month + ' is incorrect month number');
//     } if (12 < month < 1) {
//         throw new Error(month + ' is incorrect month number');
//     } 

// }
// try {
//     console.log(showMonthName(2));
// } catch (exception) {
//     console.log(exception.name);
//     console.log(exception.message);
// }




// solution from Oleg

// class MonthException {
//     constructor(message) {
//         this.message = message;
//         this.name = 'MonthException';
//     }
// }

// function showMonthName(month) {
//     month = month - 1;
//     let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     if (months[month] !== undefined) {
//         return months[month];
//     } else {
//         throw new Error ('Incorrect month number. Please Enter the valide number.');
//     }
// }

// try {
//     var myMonth = showMonthName(3);
//     console.log(myMonth);
// } catch (e) {
//     myMonth = 'unknown';
//     console.log(e.name);
//     console.log(e.message);
// }





// // ********************  task - 4  ************************
// I copied this solution from Oleg

let id = [];

function showUser(id) {
    if (id <= 0) {
        throw new Error('ID must not be negative or Zero: ' + id);
    }
    return {id: id};
}

function showUsers(ids) {
    let result = [];
    ids.forEach(function (id) {
        try {
            let person = showUser(id);
            result.push(person);
        } catch (exception) {
            console.log(exception.message);
        }
    });
    return result;
}
console.log(showUsers([12, -15, 16, 23, -44, 0]));

