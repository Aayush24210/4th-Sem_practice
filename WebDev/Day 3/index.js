// Sum();
// function Sum() {
//     console.log("Hello");
// } // Hello   // In this you can call the function before & after the function declaration because of hoisting.





// // But in arrow function you cannot call the function before the declaration because it is not hoisted.
// sum();
// // const sum = () => {
//     console.log("Hello");
// // } // Uncaught ReferenceError: Cannot access 'sum' before initialization



// console.log(a);
// var a = 5; // undefined   // In this you can access the variable before the declaration because of hoisting. 


// console.log(b);
// let b = 10; // Uncaught ReferenceError: Cannot access 'b' before initialization



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
console.log(arr,indexOf(3)); // 2
console.log(arr.includes(11),"Kyaaak");
console.log();

let data  = arr.find((function (element) {
    return element === 4;
}));
console.log(data,"find"); // 4

arr.forEach((a, b, c) => {
    console.log(c,forEach);
}); // [1, 2, 3, 4, 5] forEach



arr.map((a) => {
    return a * 2;
}
); // [2, 4, 6, 8, 10] map
arr.filter((a) => {
    return a % 2 === 0;
}
); // [2, 4] filter

arr.forEach((a, b, c) => {
    console.log(c,forEach);
}); // [1, 2, 3, 4, 5] forEach


let sum = arr.reduce((a,b,c,d) => {
console.log(a,"Mai a hun");
console.log(b,"Mai b hun");
console.log(c,"Mai c hun");
console.log(d,"Mai d hun");

})

arr=[1,2,3,4,5,6,6,3,6,3,345,7]//values which is bigger than 2 and all even numbers sum 

let biggerThan2 = arr.filter((a) => {
    return a > 2;// [3, 4, 5, 6, 6, 3, 6, 3, 345, 7] biggerThan2
})
console.log(biggerThan2,"biggerThan2"); // [3, 4, 5, 6, 6, 3, 6, 3, 345, 7] biggerThan2

let evenNumbers = arr.filter((a) => {
    return a % 2 === 0;
})
console.log(evenNumbers,"evenNumbers"); // [2, 4, 6, 6, 6] evenNumbers

let sumOfEvenNumbers = evenNumbers.reduce((a,b) => {
    return a + b;
})

console.log(sumOfEvenNumbers,"sumOfEvenNumbers"); // 24 sumOfEvenNumbers


