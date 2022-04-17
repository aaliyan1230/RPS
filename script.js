const choicessss=["rock", "paper", "scissor"]
let computerPlay=()=>{
    let index = Math.floor(Math.random() * 3);
    let item = choicessss[index];
    
    // Math.floor(Math.random()*options.length)
    return item;
}

let gamePlay=(user, computer)=>{
    let answer="";
    user=user.toLowerCase();
    computer=computer.toLowerCase();
    if(user===computer){
        answer='tied!';
    }
    else if(user=='rock'){
        if(computer == "scissor"){
            answer='user wins!';
        }
        else{
            answer='computer wins!';
        }
    }
    else if(user=='paper' ){
        if(computer == 'rock'){
            answer='user wins!';
        }
        else{
            answer='computer wins!';
        }
    }
    else if(user=='scissor'){
        if(computer == "paper"){
            answer='user wins!';
        }
        else{
            answer='computer wins!';
        }
    }

    return answer;
}

let game = ()=>{
    for(let i=0;i<5;i++){
        let userChoice = prompt("enter your choice","");
        let result = gamePlay(userChoice,computerPlay());
        console.log(result);
    }
}
//no ui attatched currently
game();
