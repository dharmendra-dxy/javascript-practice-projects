let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); 


let turnO = true;


const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let boxCount = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        // console.log("box was clicked");

        if(turnO){
            box.innerText = "O";
            turnO = false;
            boxCount++;

        }
        else{
            box.innerText = "X";
            turnO = true;
            boxCount++;
            box.classList.add("text-black")
        }

        console.log("Box count", boxCount);
        box.disabled = true;

        // to track the winner:
        checkWinner();

    }, false);
});



const checkWinner = () => {
    for(let pattern of winPatterns ){

        // console.log(pattern[0], pattern[1], pattern[2]);

        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );

        const pos1Val = boxes[pattern[0]].innerText;
        const pos2Val = boxes[pattern[1]].innerText;
        const pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val!="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("WINNER is:", pos1Val);

                // disable boxes:
                disableBoxes();

                // function to display winner:
                showWinner(pos1Val);
            }
        }
        // Match draw condition:
        if(boxCount ==9){
            showDraw();
        }

    }
}
 
// showDraw function:
const showDraw = () => {
    msg.innerText = "Match Draw";
    msgContainer.classList.remove("hide");
}


// Disabling boxes once winner is announced:
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
// Enable boxes  for new game:
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""; 
        box.classList.remove("text-black") ;
        boxCount=0;  
    }
}


// Show winner:
const showWinner = (winner) => {
    msg.innerText = `Congratulations! winner is "${winner}"`;
    msgContainer.classList.remove("hide");
}

// Setting RESET button:
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// New Game button: add event listener
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// Or alternately use:
// newGameBtn.addEventListener("click", ()=>{
//     window.location.reload();
// });
