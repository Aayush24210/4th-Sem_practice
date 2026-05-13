// let box = document.querySelectorAll(".btn");
// let turn0 = true;
// let gameover = false;
// for(let a of box){
//  a.addEventListener("click", ()=>{
//     console.log("hahahah");
//     if (a.innerText === "" && !gameover) {
//         if (turn0) {
//             a.innerText = "X";
//             turn0 = false;
//         } else {
//             a.innerText = "O";
//             turn0 = true;

//  }       checkwin();
//     }
//     })
// }


let box = document.querySelectorAll(".btn");
let turn0 = true; // true = X's turn, false = O's turn
let gameover = false;

// 1. Define all the ways a player can win (indexes of the boxes)
const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal wins
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical wins
    [0, 4, 8], [2, 4, 6]             // Diagonal wins
];

// Your click logic (Formatted for readability)
for(let a of box) {
    a.addEventListener("click", () => {
        console.log("Button clicked!");
        
        if (a.innerText === "" && !gameover) {
            if (turn0) {
                a.innerText = "X";
                turn0 = false;
            } else {
                a.innerText = "O";
                turn0 = true;
            }
            
            // Call the function to see if that move won the game
            checkwin(); 
        }
    });
}

// 2. The missing function: Check if anyone has won
function checkwin() {
    for (let pattern of winningPatterns) {
        // Get the text inside the three boxes for the current pattern
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;

        // Make sure the boxes aren't empty, then check if they match
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner is " + pos1);
                gameover = true; // Stop the game!
                alert("Player " + pos1 + " wins!"); // Show a popup
            }
        }
    }
}