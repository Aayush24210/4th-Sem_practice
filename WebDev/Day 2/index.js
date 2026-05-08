// // Functions 
// function add(a, b) {
//     return a + b;
// }

// const sum = (a, b) => a + b;
// console.log(sum(10, 5)); //  

// There are two phases of code execution 
// 1. Creation Phase
// 2. Execution Phase
// let  a = 5
// function sum (){
//     let b = 10
//     console.log(a);
//     console.log(b);
    
// }
// sum(); // 5, 10


// let a = 5
// function Outter(){
//     console.log(a);
//     function Inner(){
//         console.log("Hello");
// }
//     Inner();
// }
// Outter(); // 5, Hello
                            //Three phases of code execution

// Hoistring
// var a;
// console.log(a); // undefined
// a= 5;
// console.log(a); // 5

Sum();
function Sum() {
    console.log("Hello");
} // Hello   // In this you can call the function before & after the function declaration because of hoisting.





// But in arrow function you cannot call the function before the declaration because it is not hoisted.
// sum();
const sum = () => {
    console.log("Hello");
} // Uncaught ReferenceError: Cannot access 'sum' before initialization



console.log(a);
var a = 5; // undefined   // In this you can access the variable before the declaration because of hoisting. 


// console.log(b);
let b = 10; // Uncaught ReferenceError: Cannot access 'b' before initialization



let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]
arr.pop();
console.log(arr,"pop"); // [1, 2, 3, 4, 5]
arr.unshift(0);
console.log(arr,"unshift"); // [0, 1, 2, 3, 4, 5]
arr.shift();
console.log(arr,"shift"); // [1, 2, 3, 4, 5]
console.log(arr.indexOf(2)); // 2
console.log(arr.includes(11),"Kyaaak");
console.log();

let data  = arr.find((function (element) {
    return element === 4;
}));
console.log(data," data find"); // 4

arr.forEach((a, b, c) => {
    console.log(c,"forEach");
}); // [1, 2, 3, 4, 5] forEach

