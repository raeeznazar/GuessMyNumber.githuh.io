
let score = 20
let secretNumber = Math.trunc(Math.random()*20)+1;
let highestScore = 0;



document.querySelector('.check-btn').addEventListener("click",function(){
    const guess = Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector(".message").textContent = "⛔ No number";
    } 
    // when player wins
    else if (guess === secretNumber){
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".message").textContent = "🥳 correct number"
        score++
        document.querySelector(".score").textContent = score
        document.querySelector("body").style.backgroundColor = "#00A508";
        document.querySelector(".number").style.width = "30rem"
        if(score>highestScore){
            highestScore = score;
            document.querySelector(".highscore").textContent = (`Heightest Score: ${highestScore}`)
        }



        
    } 
    // when guess is too high
    else if (guess !== secretNumber){
        if(score>1){
            document.querySelector(".message").textContent = guess>secretNumber ?" 📈Too High" :  " 📉Too Low"
            score--
            document.querySelector(".score").textContent = score
        } else{
            document.querySelector(".message").textContent = "💥You lost the game"
            
            document.querySelector("body").style.backgroundColor ="red"
        }
        
    } 
     // when guess is too low
    // else if(guess<secretNumber){

    //     if(score>1){
    //         document.querySelector(".message").textContent = " 📉Too Low"
    //         score--
    //         document.querySelector(".score").textContent = score
    //     }else{
    //         document.querySelector(".message").textContent = "💥You lost the game"
            
    //         document.querySelector("body").style.backgroundColor ="red"
    //     }
        
    // }
})
   

document.querySelector("#btn-tryAgain").addEventListener("click",function(){

score = 20
secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector(".message").textContent = "Start guessing...";

document.querySelector(".score").textContent = score;
document.querySelector(".number").textContent = "?";
document.querySelector("body").style.backgroundColor="#2193b0";
document.querySelector(".guess").value = "";
document.querySelector(".number").style.width = "15rem"
})