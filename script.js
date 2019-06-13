var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomGradient() {
	var random1 = "#"+((1<<24)*Math.random()|0).toString(16);
	var random2 = "#"+((1<<24)*Math.random()|0).toString(16);

	color1.value = random1;
	color2.value = random2;

	body.style.background = 
	"linear-gradient(to right, " 
	+ random1 
	+ ", " 
	+ random2 
	+ ")";
	css.textContent = body.style.background + ";";

	console.log(random1 + " " + random2);
}

setGradient();

button.addEventListener("click", randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);