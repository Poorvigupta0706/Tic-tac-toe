let boxes= document.querySelectorAll(".box");
let resetbn= document.querySelector("reset-bn");
let newgamebn=document.querySelector("new-bn");
let msgContainer=document.querySelector("msg-container");
let msg=document.querySelector("msg");
let turnO = true;
const winPatterns =[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if(turnO){
      box.innerText="0";
      turnO=false;
    }else{
      box.innerText="X";
      turnO=true;
    }
    box.disabled= true;
    checkWinner();
  });
});
const showWinner=(Winner) =>{
  msg.innerText='Congratulation, winner is ${(winner}';
  msgContainer.classList.remove("hide");

};
const checkWinner=() => {
  for(let pattern of winPatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if(pos1val != "" && pos2val && pos3val !=""){
      if(pos1val==pos2val && pos2val==pos3val ){
        console.log("winner",pos1val);
      }
    }
  }
}


