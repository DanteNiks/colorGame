var numSquares=6;
var colors = generateRandomColors(numSquares);
var colorDisplay=document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var easyBtn=document.getElementById("easyBtn");
var hardBtn=document.getElementById("hardBtn");

easyBtn.addEventListener("click", function (){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click", function (){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		
	}
});


reset.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	this.textContent="New colors";
	message.textContent="";

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.background="lightblue";
});


var pickedColor=pickColor();
colorDisplay.textContent=pickedColor;

for(var i = 0; i < squares.length; i++){

	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function (){
		var clickedColor=this.style.background;
		if(clickedColor===pickedColor){
			changeColor(clickedColor); 
			message.textContent="correct";
			reset.textContent="PlayAgain ?"
			h1.style.background=clickedColor;
		}else{
			this.style.background="black";
			message.textContent="Try Again";
		}
	});
}


function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}


function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}


function generateRandomColors(num){
	var arr=[];

	for(var i=0;i<num;i++){
		arr.push(RandomColors());
	}

	return arr;

}


function RandomColors(){

	var r=Math.floor(Math.random() * 256);

	var g=Math.floor(Math.random() * 256);

	var b=Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}