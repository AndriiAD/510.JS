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


// task 3
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

// // I copy the solution form Oleg
// function findMin() {
//         let result = arguments[0];
//         for (let i = 1; i < arguments.length; i++) {
//                 if (arguments[i] < result) {
//                         result = arguments[i];
//                 }
//         }
//         console.log(result);
//      }
//      findMin(10, 22, -4, 5);   


// function findMin() {
//         let myArray = arguments[0];
//        console.log(Math.min(myArray));
// }

// findMin (44, 4, 67, -4, 1);



// task 6
// let arr = [];

// function findUnique(arr) {
        
        // solution 1
        
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

        // // solution 3

        // if (arr.Unique == true) {
        //         console.log(true);
        // } else  {
        //         console.log(false);
        // }


// }findUnique ([1, 2, 33, 4, 5]);


// solution from Oleg

function findUnique(arr) {
    for (i = 0; i < arr.length; i++) {
        let k = arr[i];
        for (j = 0; j < arr.length; ++j) {
            if (i === j) {
                continue;
            } else if (k === arr[j]) {
                return false;
            }
        }
    }
    return true;
}
findUnique([1, 2, 3, 5, 3]);





// task 7
// solution from Oleg

// let myArray = [];

// function lastElem(myArray, count) {
//         if (count == null) {
//                console.log(myArray.slice(-1)[0]);
//         } else {
//                 console.log(myArray.slice(-count));
//         }
      
// }

// lastElem([3, 4, 10, -5], 3);


// task 8

// function titleCase(str){
//         var array = str.split(' ');
//         for(var i = 0; i < array.length; i++){
//             array[i] = array[i][0].toUpperCase() + array[i].substring(1);
//         }
//     return array.join(' ');
//     }
    
//     console.log(titleCase('i love java script. do you?'));


//     //  solution from Oleg

//     function titleCase(str){
//         let oldArray = str.split('');
//         let array = [];
//         for (var i = 0; i < oldArray.length; i++) {
//             array.push(oldArray[i].charAt(0).toUpperCase()+oldArray[i].slice(1));
//         }
//     return array.join(' ');
//     }
    
//     console.log(titleCase('I love java script'));