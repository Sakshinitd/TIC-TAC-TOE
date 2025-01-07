let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-game");
let message=document.querySelector("#msg");
let newGameButton=document.querySelector(".new-game-button");
let MessageHide=document.querySelector(".hide");
let draw_game=document.querySelector(".draw_msg");

let turnX=true;//player x , player o

//store winning pattern
let winningArr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//add event listener on each box
let cnt=0;
boxes.forEach((box) => {
      box.addEventListener("click",()=>{
        cnt++;
        console.log("box was clicked");
        if(turnX===true){
            console.log("x turn");
            box.innerText="X";
            turnX=false;
        }else{
            console.log("o turn");
            box.innerText="O";
            turnX=true;
        }
        //want to disable button once clicked
        box.disabled=true;
        
        checkWinner();

        if(cnt===9){
            console.log("draw");
            draw_game.classList.remove("draw_msg");
        }


        
      });
});



const showWinner=(winner)=>{
     message.innerText=`Congratulations WINNER is ${winner}`;
     //unhide class hide
     MessageHide.classList.remove("hide");
     draw_game.classList.add("draw_msg");
     

};

const disabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    turnX=true;
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    }
};

const checkWinner=()=>{
    for(let pattern of winningArr){
        let pos1Val=boxes[pattern[0]].innerText;  //pattern[0]= selecting pattern and in pattern its index 0. boxes[pattern[0]]= selecting box from pattern value. boxes[pattern[0]].innerText = give text inside box
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("WINNER",pos1Val);
                disabled();
                showWinner(pos1Val);
            }
        }
    }
}

//RESETTING GAME FUNCTION
const resetGame=()=>{
     
          turnX=true;
          enableboxes();
          //hide congractulation message
          MessageHide.classList.add("hide");
          draw_game.classList.add("draw_msg");

          



     
};

//APPLYING RESET GAME FUNCTION ON BUTTONS(new game button,reset game button)
newGameButton.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);
