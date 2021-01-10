
var started = false;
var level = 1
var chosenColor = [];
let userInput = []


$('body').keypress(function(){
    if (!started){
    selectButton();
    }
    started = true;
})
function selectButton(){
    userInput = []
    $('h1').text('level ' + level)
    var a = Math.floor(Math.random()*10/3);
    $('.btn').eq(a).addClass('random')
    var bttn =$('.btn').eq(a).attr("id")
    console.log(chosenColor)
    chosenColor.push(bttn);
    setTimeout(function(){
        $('.btn').eq(a).removeClass('random')
    }, 200)
    level++
}

$('.btn').click(function(){
    
    $(this).addClass('random')
    var buttonClicked = $(this);
    userInput.push($(this).attr('id'))
    console.log(userInput)
    setTimeout(function(){
        buttonClicked.removeClass('random')
    },200)
    checkAnswer()
});

function checkAnswer(){
    for(let i = 0; i<userInput.length; i++){
        if(userInput[i] !== chosenColor[i]){
            $('h1').text("Game-Over")
        setTimeout(function(){
            restart()
        },500)
        }else{
            selectButton()
        }
    }
    
}

function restart(){
    level = 1
    started = false
    $('h1').text("Press a key to start")
    chosenColor = []
}
