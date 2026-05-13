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








// let h1 = document.getElementById("kyaa");
// // let h2 = document.querySelector("h2");

// h1.style.color = "red";
// h1.style.fontSize = "50px";
// h1.style.textAlign = "center";
// console.log(h1[0].innerFlex);

// for(let a of h1){
//     a.style.color = "red";
// }

// console.log(h1,"kyaa");

// let h1 = document.getElementById("kyaa");
// console.log(h1[0].innerText());

//  let h3 = document.querySelectorAll("h1");

//  let name = prompt("Enter your name");
//  h3[0].innerText = `Welcome ${name} to JavaScript Day 5`;

// next 
// let h1 = document.getElementById("kyaa");
// h1.innerText = "Welcome to JavaScript Day 5";

// let h1 = document.querySelector("h1")
//     let p = document.querySelector("p")
    
//     h1.innerText = "Welcome to JavaScript Day 5"
//     p.innerText = "This is a paragraph"

// let button = document.querySelector("button")
    // button.style.backgroundColor = "purple"
    // button.style.fontSize = "50px"

    // let inp = document.querySelector("input")
    // let h2 = document.querySelector("h2")
//  let inp = document.querySelector("input")
//     let h2 = document.querySelector("h2")

    // inp.addEventListener("input", function(e){
        // console.log(e.target.value);
        // h2.innerText = e.target.value;
    // })

    // By clicking the button the data will show which is innput 


    // inp.addEventListener("input", function(e){
    //     // console.log(e.target.value);
    //     h2.innerText = e.target.value;
    // })

    // // By clicking the button the data will show which is innput 



    // button.addEventListener("click", function(){
    //     console.log("Hello");
              
    //     h2.innerText = inp.value;

    // })


    // eval()
