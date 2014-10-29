// Find the DOM element with the class name "button1"
var button = document.getElementsByClassName("button1");
var instructionsDiv = document.getElementsByClassName("instructions");
var buttonWidth = 25;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var circleRadians = (2*Math.PI);
var circleX = 50;
var circleY = 50;
var canvasW = canvas.width;
var canvasH = canvas.height;

// getElementsByClassName returns an array: [<button1>]
button = button[0];
instructionsDiv = instructionsDiv[0];

var clickResult = function () {
  //debugger;
  button.style.width = (++buttonWidth) + "%"; //increment and typecast a string.
  instructionsDiv.style.border = "solid red 2px";
  console.log("test1");
  //this outputs "test1"

}; // end clickResult()

var drawCircle = function() {
    context.clearRect(0,0,canvasW,canvasH)
    context.beginPath();
    context.arc(circleX, circleY, 50, 0, circleRadians);
    context.stroke();
    if(circleX - 50 > canvas.width) 
        circleX = 25; 
    else
        circleX+=1;    
} //end of drawCircle()

var animateCircle = function() {    
          
    setInterval(drawCircle, 30);
}