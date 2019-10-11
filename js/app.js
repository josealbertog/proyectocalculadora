//declaramos variables
var numero1;
var numero2;
var operacion;

function init(){
	var display = document.getElementById('display')
      display.innerHTML = '0';
	var on = document.getElementById('on');
	var mas = document.getElementById('mas');
	var menos = document.getElementById('menos');
	var por = document.getElementById('por');
	var dividido = document.getElementById('dividido');
	var igual = document.getElementById('igual');
	var punto = document.getElementById('punto');
	var sign = document.getElementById('sign');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');
	var raiz = document.getElementById('raiz');

}
//Eventos de click
uno.onclick = function(e){
	if (display.textContent=="0") {
		display.textContent = "";
	}
	if (display.textContent.length >= 8) {

	}else{
		display.textContent +="1"
	}
}

dos.onclick = function(e){
	if (display.textContent=="0") {
		display.textContent = "";
	}
	if (display.textContent.length >= 8) {

	}else{
		display.textContent +="2"
	}
}

tres.onclick = function(e){
	if (display.textContent=="0") {
		display.textContent = "";
	}
	if (display.textContent.length >= 8) {

	}else{
		display.textContent +="3"
	}
}

cuatro.onclick = function(e){
	if (display.textContent=="0") {
		display.textContent = "";
	}
	if (display.textContent.length >= 8) {

	}else{
		display.textContent +="4"
	}
}

cinco.onclick = function(e){
	if (display.textContent=="0") {
		display.textContent = "";
	}
	if (display.textContent.length >= 8) {

	}else{
		display.textContent +="5"
	}
}

seis.onclick = function(e){
	if (display.textContent=="0") {
		display.textContent = "";
	}
	if (display.textContent.length >= 8) {

	}else{
		display.textContent +="6"
	}
}

siete.onclick = function(e){
	if (display.textContent=="0") {
		display.textContent = "";
	}
	if (display.textContent.length >= 8) {

	}else{
		display.textContent +="7"
	}
}

ocho.onclick = function(e){
	if (display.textContent=="0") {
		display.textContent = "";
	}
	if (display.textContent.length >= 8) {

	}else{
		display.textContent +="8"
	}
}

nueve.onclick = function(e){
	if (display.textContent=="0") {
		display.textContent = "";
	}
	if (display.textContent.length >= 8) {

	}else{
		display.textContent +="9"
	}
}
cero.onclick = function(e){
	if (display.textContent=="0") {
		display.textContent = "";
	}
	if (display.textContent.length >= 8) {

	}else{
		display.textContent +="0"
	}
}

    
/*ojo*/
punto.onclick = function(e){
	display.textContent = display.textContent + ".";
}

sign.onclick = function(e){
	display.textContent = display.textContent + "-";
}

on.onclick = function(e){
	resetear();
}

mas.onclick = function(e){
	numero1 = display.textContent;
	operacion = "+";
	limpiar();

}

menos.onclick = function(e){
	numero1 = display.textContent;
	operacion = "-";
	limpiar();
	
     

}

por.onclick = function(e){
	numero1 = display.textContent;
	operacion = "*";
	limpiar();
	
     
}

dividido.onclick = function(e){
	numero1 = display.textContent;
	operacion = "/";
	limpiar();
	
}

igual.onclick = function(e){
	numero2 = display.textContent;
	resolver();
	
     
}


function limpiar(){
	display.textContent = "";
}

function resetear(){
	display.textContent = "";
	numero1 = 0;
	numero2 = 0;
	operacion = "";
}


function resolver(){
	var respuesta = 0;
	switch(operacion){
		case "+":
		respuesta = parseFloat(numero1) + parseFloat(numero2);
		break;
		case "-":
		respuesta = parseFloat(numero1) - parseFloat(numero2);
		break;
		case "*":
		respuesta = parseFloat(numero1) * parseFloat(numero2);
		break;
		case "/":
		respuesta = parseFloat(numero1) / parseFloat(numero2);
		break;
		

	}
	resetear();
	display.textContent = respuesta;
}