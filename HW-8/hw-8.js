// ******************  task  1  *******************

// function upperCase(data) {
//     let ss = /^[A-Z]/g;

//     if (ss.test(data)) {
//         console.log('String starts with uppercase character');
//     } else {
//         console.log('String does not starts with uppercase character');
//     }
// }
// upperCase('Ilovejs');



// ***********************  task 2  ***********************

// function emailCheck (email) {
//     let regExp = /\w+@\w+\.\w+/gi;

//     console.log(regExp.test(email));
// }
// emailCheck('abc2@gmail.com'); 


// **********************  task 3  ************************

// let str = "cdbBdbsbz"; 
// console.log( str.match(/db+d/gi) );  

// **********************  task 4  ************************
 
// let x = 'Java Script'
// let y = x.replace(/java\sscript/gi, 'Script, Java')
// console.log('Вихідний рядок: ' + x);
// console.log('Вихід: ' + y);

// **********************  task 5  ************************

// let regExp = /\d{4}\S\d{4}-\d{4}-\d{4}/g;
// let bankCardStatus = regExp.test('9999-9999-9999-9999');
// console.log(bankCardStatus);

// **********************  task 6  ************************

// function checkEmail (email) {
//     let regExp = /^\w+-?(\w+)?@\w+\.\w{2,3}+$/gi;
//     if (regExp.test(email)) {
//         console.log('Email is correct!');
//     } else {
//         console.log('Email is not correct!');
//     }
// }  
// checkEmail('my_mail@gmail.com')
// checkEmail('#my_mail@gmail.com')

// **********************  task 7  ************************

function checkLogin (login) {
        let regExp = /^[a-z]{1}[a-z0-9\.]{1,9}$/gi;
        let result = regExp.test(login);

        let regNum = /[0-9\.]+/g;
        let resultNumber = login.match(regNum);
        console.log(`${login} is ${result} - ${resultNumber}`)
    } 
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret33');