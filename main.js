//랜덤번호 지정
//유저가 번호를 입력한다
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 , DOWN
//랜덤번호가 > 유저번호 , UP
// RESET 게임리셋
// 5번의 기회를 다쓰면 게임이 끝난다.(버튼이 DISABLE)
// 유저가 1~100 범위밖 숫자는 알려주고, 기회 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.

let computerNum=0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")

let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let chanceArea = document.getElementById("chance-area")
let history=[]


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){
    userInput.Value="";
});


function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log(computerNum)
    chances = 5
}

function play(){
    let userValue = userInput.value
    
    if(userValue<1 || userValue>100){
        resultArea.textContent="1과100사이 숫자를 입력해 주세요"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자 입니다."
        return
    }

    chances--;
    chanceArea.textContent= `남은기회:${chances}번`;
    console.log("chance",chances)

    if(userValue < computerNum) {
        resultArea.textContent = "Up!!"
        console.log("Up")
    } else if (userValue < computerNum){
        resultArea.textContent = "Down!!"
        console.log("Down")
    }else {
        resultArea.textContent = "맞췄습니다"
        console.log("맞췄다")
        gameOver=true
    }

    history.push(userValue)
    console.log(history)

    if(chances <1){
        gameOver=true;
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    //user input 창이 깨끗하게 정리되고
    userInput.value = ""
    //새로운 번호 생성
    pickRandomNum();

    chances=5;

    resultArea.textContent="결과값이 여기 나옵니다!"
}

pickRandomNum();