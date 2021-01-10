
var started = false;
var level = 1
var count = 0;
var chosenColor = [];


$('body').keypress(function(){
    if (!started){
    selectButton();
    }
    started = true;
})
function selectButton(){
    $('h1').text('level ' + level)
    var a = Math.floor(Math.random()*10/3);
    $('.btn').eq(a).addClass('random')
    var bttn =$('.btn').eq(a).attr("id")
    chosenColor.push(bttn);
    console.log(chosenColor)
    setTimeout(function(){
        $('.btn').eq(a).removeClass('random')
    }, 200)
    level++
}

$('.btn').click(function(){
    count = 0;
    $(this).addClass('random')
    var buttonClicked = $(this);
    var userInput = $(this).attr('id')
    console.log(userInput)
    setTimeout(function(){
        buttonClicked.removeClass('random')
    },200)
    if(count < chosenColor.length){
        if(userInput != chosenColor[count]){
            restart()
        }
            count++
        if(count == chosenColor.length){
            selectButton()
        }
    }
    
});

function restart(){
    level = 1
    started = false
    $('h1').text("Press a key to start")
    chosenColor = []
}
