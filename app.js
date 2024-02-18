let gameseq=[];
let uerseq=[];
let started = false;
let btns= ["yellow","red","green","purple"];
let level = 0;
let h2 = document.querySelector("h2");
let count = 0;;
let h3 = document.querySelector("h3");


document.addEventListener("keypress",function(){

    if(started == false){
    console.log("game started");
    started=true;
    levelup();
    }
    
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
function btnpressflash(btn) {
    btn.classList.add("greenflash");
    setTimeout(function() {
        btn.classList.remove("greenflash");
    },250);
}

function levelup(){
    uerseq=[];
    level++;
    h2.innerText = `level ${level}`;
    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);

    console.log(randbtn);
    console.log(randcolor);
    gameseq.push(randcolor);
    btnflash(randbtn);

}

function check(idx){

    if(uerseq[idx]==gameseq[idx])
    {
        if(uerseq.length==gameseq.length)
        {
           setTimeout(levelup(),1000);
        }
    }
    else{

        h2.innerHTML=`end !!! your score <b>${level}<br> press any key to start`;
        if (level > count) {
            count = level;
            h3.innerText = `highest score = ${count}`;
        }
        reset();
        
    }
  

}

function btnpress(){
    let btn =this;
    btnpressflash(btn);
    console.log(this);
    let usercolor = btn.getAttribute("id");
    console.log(usercolor);
    uerseq.push(usercolor);
    check(uerseq.length-1);

}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns)
{
    btn.addEventListener("click", btnpress);
}


function reset(){
    uerseq=[];
    gameseq=[];
    count=level;
    level=0;
    started=false;
}

