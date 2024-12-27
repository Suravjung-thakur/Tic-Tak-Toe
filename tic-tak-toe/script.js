let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let neww =  document.querySelector("#new");
let tom =  document.querySelector(".tom");
let mesg = document.querySelector("#mesg");
let turnO = true;  //player=o , player=x

//learning

// let arr = ["apple" , "mango" , "orange"];
//2d array
// let arr2 = [["mango","apple","pineapple"] , ["potato","tomato"] , ["car","bus","cycle"]];

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetG = () => {
    turnO = true;
    enableBoxes();
    tom.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        box.innerText = "X";
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        };
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText=""
    }
}

const showWinner = (winner) => {
    mesg.innerText = `Congratulations ,winner is ${winner}`;
    tom.classList.remove("hide");
    disableBoxes();
}



const checkWinner = () => {
    for(let pattern of winPattern){
    let posVal1 =boxes[pattern[0]].innerText;
    let posVal2 =boxes[pattern[1]].innerText;
    let posVal3 =boxes[pattern[2]].innerText;

    if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
        if (posVal1 === posVal2 && posVal2 === posVal3){
            console.log("winner",posVal1);

            showWinner(posVal1);
        }
    }
    }
}

neww.addEventListener("click",resetG);
reset.addEventListener("click",resetG);