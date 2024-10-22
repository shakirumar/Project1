let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let new1 = document.querySelector("#new");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turn0 = true;


const winPattern =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetGame = () => {
    turn0 = true;
    enableBoxes ();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
   
    if(turn0) {
        box.innerText = "0";
        box.style.color = "blue";
        turn0 = false;  
    } else {
        box.innerText = "X";
        box.style.color = "aqua"
        turn0 = true;
    }
    box.disabled = true;

    checkWinner();
});
 });

 const disableBoxes = () => {
    for(let box of boxes)
        box.disabled = true;
 }
 const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
  };
 };
 const showWinner = (winner) => {
    msg.innerText = `Congratilation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
    
 };

 const checkWinner = () => {
    for ( let pattern of winPattern) { 
        let pos1val = boxes[pattern[0]].innerText; 
        let pos2val = boxes[pattern[1]].innerText;  
        let pos3val = boxes[pattern[2]].innerText; 

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner",pos1val);
                 showWinner(pos1val);
            }
        }
    }
 };

 new1.addEventListener("click", resetGame);
 reset.addEventListener("click", resetGame);