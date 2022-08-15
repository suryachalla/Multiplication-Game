function changeNumber(){
    const firstNumber = document.getElementById("fNum");
    const secondNumber = document.getElementById("sNum");

    firstNumber.innerHTML = Math.trunc(Math.random()*10);
    secondNumber.innerHTML = Math.trunc(Math.random()*10);
}


function submit(){
    console.log("you click on submit");

    const score = document.getElementById("score");
    const firstNumber = document.getElementById("fNum").innerHTML;
    const secondNumber = document.getElementById("sNum").innerHTML;

    const answer = parseInt(document.getElementById("answer").value);
    const result = Number(firstNumber*secondNumber);

    if(answer === result){
        score.innerHTML = Number(score.innerHTML) +1;
    }else{
        score.innerHTML = Number(score.innerHTML) -1;
    }
    
}

