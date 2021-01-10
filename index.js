var body = $("body");
var btn = $(".btn");
var heading = $("h1");
var started = false;
var pattern = [];
var level = 0;
var count = 0;

body.keypress(function () {
  if(!started) {
    generateRandomNumber();
    buttonClick();
  }
  started = true;
});

function buttonClick() {
  btn.click(function () {
    var btnId = this.id;
    animateButton(btnId);
    checkAnswer(btnId);
  });
}

function checkAnswer(userInput) {
  if(count < pattern.length){
    if(userInput != pattern[count]){
      changeHeading("the game is over");
      setTimeout(function(){
        restart()
      },300)
    }else{
      count++
      
    }    
  }

  if (count == pattern.length) {
      count = 0
    setTimeout(function(){
        generateRandomNumber();    
    },300)
    
  }
}

function generateRandomNumber() {
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  pattern.push(randomNumber);
  console.log(pattern)
  animateButton(randomNumber);
  changeHeading("level " + level);
}

function animateButton(value) {
  btn.eq(value).addClass("random");
  setTimeout(function () {
    btn.eq(value).removeClass("random");
  }, 300);
}

function changeHeading(data) {
  heading.text(data);
}

function restart() {
  changeHeading("Press a key to start game");
  pattern = [];
  level = 0
  count = 0
  started = false;
  btn.off('click')
}
