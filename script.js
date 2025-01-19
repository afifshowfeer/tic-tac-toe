let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");

let newgamebtn=document.querySelector(".new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turno=true;
let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];
let draw=false;


const resetgame=()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.style.backgroundColor='#F8F8F8';
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner} `;
    msgcontainer.classList.remove("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turno){
            box.style.color=' #ec4899';
            box.innerText="O";
            turno=false;

        }
        else{
            box.style.color=' #3b82f6';
            box.innerText="X";
            turno=true;
        }
        box.style.backgroundColor='#F4A7A3';
        box.disabled=true;
        checkwinner();
    });
});

const checkwinner=()=>{
    
    for(let pattern of winpattern){
        let pat1=boxes[pattern[0]].innerText;
        let pat2=boxes[pattern[1]].innerText;
        let pat3=boxes[pattern[2]].innerText;

        if(pat1!="" && pat2!="" && pat3!=""){
   
            if(pat1===pat2&&pat2===pat3){
                disablebox();
                boxes[pattern[0]].style.backgroundColor='#A1EF8B';
                boxes[pattern[1]].style.backgroundColor='#A1EF8B';
                boxes[pattern[2]].style.backgroundColor='#A1EF8B';
                showwinner(pat1);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

