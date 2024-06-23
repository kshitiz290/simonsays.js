let gameseq= [];
let userseq = [];

let started = false;
let level =0;
let highestscore =0;

let btns = ["yellow","red","green","purple"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started==false){
        console.log("game is started");
        started=true;   
    }
    levelup();
});

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let rndidx = Math.floor(Math.random()*3 + 1);
    let rndclr = btns[rndidx];
    let rndbtn = document.querySelector(`.${rndclr}`);
    gameseq.push(rndclr);
    console.log(gameseq);
    gameflash(rndbtn);
}

function checkans(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,500);
        }
    }else{
        h2.innerHTML=`Game Over !! Your score was <b>${level}</b> <br> Please press any key to start again !!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}
let btnss = document.querySelectorAll(".btn");
for(bt of btnss){
    bt.addEventListener("click",btnpress);
}
let p = document.createElement("h3");
document.querySelector("body").append(p);
function reset(){
    highestscore = Math.max(highestscore,level);
    level = 0;
    gameseq = [];
    userseq = [];
    started = false;
    p.innerText = `Highest score is ${highestscore}`;
}

