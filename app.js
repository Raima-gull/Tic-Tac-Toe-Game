let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset');
let msg=document.querySelector('#msg');
let gamebtn=document.querySelector('#msg_btn')
let msgcontainer=document.querySelector(".msg_container");
let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
let turnO=true //playerO to ye print kardo

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO===true){
            box.innerText='O';
            turnO=false;
        }else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;

        checkwinner();
    });
   
});

const reset=()=>{
    turnO=true;
    enabled();

}
const game_btn=()=>{
    turnO=true;
    enabled();
    msgcontainer.classList.add('hidemsg');

}




const showwinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner} `;
    msg.style.color='red';
    msg.style.fontSize='50px'
    msgcontainer.classList.remove("hidemsg");
}

//disabled
const disabled=()=>{
    for(let box of boxes){
      box.disabled=true;
    }
}
//enabled
const enabled=()=>{
    for( box of boxes){
    box.disabled=false;
    box.innerText='';
    }
}

const checkwinner=()=>{
    for (let pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
     let product1=boxes[pattern[0]].innerText;
    let  product2=boxes[pattern[1]].innerText;
    let product3=boxes[pattern[2]].innerText;
    
    if(product1 != "" && product2 != "" && product3 != ""){
        if(product1===product2 && product2===product3){
            console.log(`Winner ${product1}`);
            showwinner(product1);
            disabled()
            
        }
    }
}
};

gamebtn.addEventListener('click',game_btn);
resetbtn.addEventListener('click',reset);