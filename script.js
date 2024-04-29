console.log("tic tak toc");

let box =document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msg=document.querySelector(".winner");
let newgame=document.querySelector("#new");
let container=document.querySelector(".hide");
let turnO =true;
let count=0;

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        // box.innerText="x";
        if (turnO) {
            box.innerText="O";
            turnO=false;
        } else {
            box.innerText="X";
            turnO=true;
            
        }
        box.disabled=true;
        count++; 
        let isWinner= checkWinner();   
        if (count===9 && !isWinner) {
            gamedraw();
        }

        
    });
})
const gamedraw=()=>{
    msg.innerText=`Game was draw`;
    container.classList.remove("hidenow");
    box.disabled=true;
}

const enablebox=()=>{
    for(let boxx of box){
        boxx.disabled=false;
        boxx.innerText="";
    }
}
const WinPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const winners=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    container.classList.remove("hidenow");
    box.disabled=true;
}

const checkWinner=()=>{
    for(pattern of WinPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let value1=box[pattern[0]].innerText;
        let value2=box[pattern[1]].innerText;
        let value3=box[pattern[2]].innerText; 

        if(value1!=""&& value2!="" && value3!=""){
            if(value1===value2 && value2===value3){
                winners(value1);
                
            }
        }
  }
};
const resetgame=()=>{
    turnO=true;
    count=0;
    enablebox();
    container.classList.add("hidenow");
    // box.innerText="";
}
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);















