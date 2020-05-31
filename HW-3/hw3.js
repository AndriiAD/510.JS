// // task 1 - for
// let arrNumber1 = [2,3,4,5];
// let res1 = 1;

// for (let dobutok = 0; dobutok < arrNumber1.length;  dobutok++) { 
//     res1 *= arrNumber1[dobutok];
    
// }
// console.log("Current Count : " + res1);

// // task 1 - while
// let arrNumber2 = [2,3,4,5];
// let result = 1;

// let i = 0;
// 	while (i < arrNumber2.length) {    
//         result *= arrNumber2[i];
//         i++;
// 	}
//     console.log("Current Count : " + result);



// // task 2
// let number = 15;

// for (let i=0; i<=number; i++) {
//      if (i % 2 == 0) {
//         document.write(i + ' is even' +'<br>');
//      } else {
//         document.write(i + ' is odd' +'<br>');
//      }
// }


// // task 3
// let k = [];

// function randArray (i) {
//         let n = 0;
//         do {
//                 k[n] = Math.floor(Math.random() * 500);
//                 n++;
//         } while (n < i)
//   console.log(k);    
// }

// randArray(5);




// // task 4
// function raiseToDegree (a, b) { 
// console.log(result = Math.pow(a,b));
// }

// raiseToDegree(3, 4);




// // task 5
// // get lost on this task
// function findMin(arguments) {
//         let result = 1;
//         for (let i = 0; i < arguments.length; i++) {
//                 result = Math.min(arguments);
//         }
//         console.log(result);
//      }
//      findMin(2, 0, 4, 5);   


// function findMin(arguments) {
//         let myArray = [arguments];
//        console.log(Math.min(myArray));
// }

// findMin (5, 4, 67, -4, 1);



// task 6
// let arr = [];

// function findUnique(arr) {
        
        // // solution 1

        // for (let i = 0; i < arr.length; i++) { 
        //         for (let j = i + 1 ; j < arr.length; j++) { 
        //                 if (arr[i] == arr[j]) {
        //                         console.log(true);   
        //                 } else {
        //                         console.log(false);
        //                 }
        //         } 
        // }

        // // solution 2

        // for (var i = 0; i < arr.length; i++) {
        //         if (arr.contains[i]) {
        //                 console.log(true);
        //         } else  {
        //                 console.log(false);
        //         }

        // solution 3

//         if (arr.Unique == true) {
//                 console.log(true);
//         } else  {
//                 console.log(false);
//         }
// }
// findUnique ([1, 2, 5, 4, 5])



// task 7
let myArray = [];

function lastElem(myArray, x) {
        if (x == null) {
                x = 1;
        }
        if (myArray == null) {
                return void 0;
        }
        return result = myArray[myArray.lenght - x]
}

lastElem([3, 4, 10, -5], 2);



// task 8

// function titleCase(str){
//         var array = str.split(' ');
//         for(var c = 0; c < array.length; c++){
//             array[c] = array[c][0].toUpperCase() + array[c].substring(1);
//         }
//     return array.join(' ');
//     }
    
//     'I love java script';
