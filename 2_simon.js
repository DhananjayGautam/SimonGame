let gameSeq = [];
let userSeq = [];

let started = false;
let level  = 0; 
let btns = [`red`,`yellow`,`green`,`purple`]
let h2 = document.querySelector(`h2`)
document.addEventListener(`keypress`,function(){
    if(started == false ){
        console.log(`game has started`);
        started = true;
        levelup();
    }
});

function btnFlash (btn) {
    btn.classList.add("flash")
    setTimeout(function (){
        btn.classList.remove("flash")
    },250)
}
function checkans(idx){
    if( userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
        console.log("same");
    } 
    else{
        h2.innerText = `game over!!! your score is ${level} Press any key to start again`
        reset();
    }
}

function levelup() {
    userSeq = []
    level++;
    h2.innerText = `level ${level}`
    let indx = Math.floor(Math.random()*4);
    let randcolor = btns[indx];
    let color = document.querySelector(`.${randcolor}`) 
    console.log(randcolor)
    gameSeq.push(randcolor)


    btnFlash(color);

}

function btnpress() {
    let btn = this;
    btnFlash(btn)
     usercolor = btn.getAttribute("id")
     console.log(usercolor)
     userSeq.push(usercolor);
     checkans(userSeq.length-1)
}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset() {
gameSeq = [];
userSeq = [];

started = false;
level  = 0; 
}
