let gameSeq = [];
let userSeq = [];

let btn = [ "red","yellow","bleu","green"];


let started = false;
let level = 0;
let h2 = document.querySelector("h3");

document.addEventListener("keypress", () => {
    if( started == false)
    {

        started=true;
        levelup();
    }
    });

    function btnFlash(btn)
    {
        btn.classList.add("flash");
        setTimeout(()=>{
            btn.classList.remove("flash");
        },250);
    }

    function levelup(){
        level++;
        h2.innerHTML= `Level ${level}`;
        let randNum = Math.floor((Math.random() * 3));
        randcolor = btn[randNum];
        let randbtn = document.querySelector(`.${randcolor}`)
        btnFlash(randbtn);

    }

    function btnPress()
    {
        let btn = this;
        btnFlash(btn);
    }

    let allBtns = document.querySelectorAll(".box");
    for (btn of allBtns)
    {
        btn.addEventListener("click", btnPress);
    }