var body = $('body')
var btn =$(".btn")
var heading = $('h1')
var started = false;
pattern = []
var level = 0;
var count = 0

body.keypress(function(){
    if(!started){
        generateRandomNumber()
        buttonClick()
    }
    started = true
})

function buttonClick(){
    btn.click(function(){
        var btnId = this.id
       animateButton(btnId)
       checkAnswer(btnId)
    })
}

function checkAnswer(userInput){
    console.log(pattern[count] , userInput)
   if(count < pattern.lenght){
       if(userInput != pattern[count]){
               changeHeading("the game is over")
               setTimeout(function(){
                restart()
               },300)   
       }
   }
   count++

   if(count == pattern.length){
       count = 0 
       generateRandomNumber()
   }
}


function generateRandomNumber(){
 level++
  var randomNumber = Math.floor(Math.random() * 4)
  pattern.push(randomNumber)
  animateButton(randomNumber)
  changeHeading("level " + level)
}

function animateButton(value){
    btn.eq(value).addClass('random')
    setTimeout(function(){
        btn.eq(value).removeClass('random')
    },300)
}

function changeHeading(data){
   heading.text(data)
}

function restart(){
    changeHeading("Press a key to start game")
  pattern = []
  started = false;
  count = 0
}