var goBtn = document.getElementById('goButton')
var slowBtn = document.getElementById('slowButton')
var stopBtn = document.getElementById('stopButton')

var goBulb = document.getElementById('goLight')
var slowBulb = document.getElementById('slowLight')
var stopBulb = document.getElementById('stopLight')

goBtn.addEventListener("click", function() {
  goBulb.classList.toggle('go')
});
slowBtn.addEventListener("click", function() {
  slowBulb.classList.toggle('slow')
});
stopBtn.addEventListener("click", function() {
  stopBulb.classList.toggle('stop')
});

function buttonLog(buttonName){
  console.log(`${buttonName} button`)
}

let buttons = document.querySelectorAll(' .button')

for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('mouseenter', (event) => {
    buttonLog('Entered ' + event.target.innerText)
    })
}

for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('mouseleave', (event) => {
      buttonLog('Left ' + event.target.innerText)
    })
}