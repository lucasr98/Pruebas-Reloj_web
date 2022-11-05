const puntoHTML = document.querySelectorAll(".punto");
let opacidad = 0

const barraHTML = document.querySelectorAll(".barra");

const horaHTML = document.querySelectorAll(".hora");
const minutoHTML = document.querySelectorAll(".minuto");
const segundoHTML = document.querySelectorAll(".segundo");

let horaValor;
let minutoValor;
let segundoValor;

const numeros = [
	
	[
		1,1,1,
		1,0,1,
		1,0,1,
		1,0,1,
		1,1,1
	],
	[
		0,1,0,
		0,1,0,
		0,1,0,
		0,1,0,
		0,1,0
	],
	[
		1,1,1,
		0,0,1,
		1,1,1,
		1,0,0,
		1,1,1
	],
	[
		1,1,1,
		0,0,1,
		1,1,1,
		0,0,1,
		1,1,1
	],
	[
		1,0,1,
		1,0,1,
		1,1,1,
		0,0,1,
		0,0,1
	],
	[
		1,1,1,
		1,0,0,
		1,1,1,
		0,0,1,
		1,1,1
	],
	[
		1,1,1,
		1,0,0,
		1,1,1,
		1,0,1,
		1,1,1
	],
	[
		1,1,1,
		0,0,1,
		0,0,1,
		0,0,1,
		0,0,1
	],
	[
		1,1,1,
		1,0,1,
		1,1,1,
		1,0,1,
		1,1,1
	],
	[
		1,1,1,
		1,0,1,
		1,1,1,
		0,0,1,
		0,0,1
	]

]

function mostrarHora(){

	const reloj = new Date();
	
	horaValor = reloj.getHours();
	minutoValor = reloj.getMinutes();
	segundoValor = reloj.getSeconds();

	puntoHTML.forEach(punto=>{
		punto.style.opacity = `${opacidad}`;
	})
	opacidad == 0 ? opacidad = 1 : opacidad = 0

	return pintarNumero();

}

mostrarHora();

setInterval(mostrarHora, 1000)

function pintarNumero(){

	barraHTML.forEach(barrita=>{
		barrita.style.removeProperty("background-color")
	})

	if(horaValor < 10){
		for(let i = 0; i < (horaHTML.length / 2); i++){
			if(numeros[0][i] === 1){
				horaHTML[i].style.backgroundColor = "#89e12f"
			}
		}
		for(let i = 0; i < horaHTML.length; i++){
			if(numeros[horaValor][i] === 1){
				horaHTML[i + (horaHTML.length / 2)].style.backgroundColor = "#89e12f"
			}
		}
	}

	else if(horaValor >= 10){
		for(let i = 0; i < (horaHTML.length / 2); i++){
			if(numeros[Math.floor(horaValor / 10)][i] === 1){
				horaHTML[i].style.backgroundColor = "#89e12f"
			}
		}
		for(let i = 0; i < horaHTML.length; i++){
			if(numeros[horaValor - ((Math.floor(horaValor / 10)) * 10)][i] === 1){
				horaHTML[i + (horaHTML.length / 2)].style.backgroundColor = "#89e12f"
			}
		}
	}


	if(minutoValor < 10){
		for(let i = 0; i < (minutoHTML.length / 2); i++){
			if(numeros[0][i] === 1){
				minutoHTML[i].style.backgroundColor = "#89e12f"
			}
		}
		for(let i = 0; i < minutoHTML.length; i++){
			if(numeros[minutoValor][i] === 1){
				minutoHTML[i + (minutoHTML.length / 2)].style.backgroundColor = "#89e12f"
			}
		}
	}

	else if(minutoValor >= 10){
		for(let i = 0; i < (minutoHTML.length / 2); i++){
			if(numeros[Math.floor(minutoValor / 10)][i] === 1){
				minutoHTML[i].style.backgroundColor = "#89e12f"
			}
		}
		for(let i = 0; i < minutoHTML.length; i++){
			if(numeros[minutoValor - ((Math.floor(minutoValor / 10)) * 10)][i] === 1){
				minutoHTML[i + (minutoHTML.length / 2)].style.backgroundColor = "#89e12f"
			}
		}
	}


	if(segundoValor < 10){
		for(let i = 0; i < (segundoHTML.length / 2); i++){
			if(numeros[0][i] === 1){
				segundoHTML[i].style.backgroundColor = "#89e12f"
			}
		}
		for(let i = 0; i < segundoHTML.length; i++){
			if(numeros[segundoValor][i] === 1){
				segundoHTML[i + (segundoHTML.length / 2)].style.backgroundColor = "#89e12f"
			}
		}
	}

	else if(segundoValor >= 10){
		for(let i = 0; i < (segundoHTML.length / 2); i++){
			if(numeros[Math.floor(segundoValor / 10)][i] === 1){
				segundoHTML[i].style.backgroundColor = "#89e12f"
			}
		}
		for(let i = 0; i < segundoHTML.length; i++){
			if(numeros[segundoValor - ((Math.floor(segundoValor / 10)) * 10)][i] === 1){
				segundoHTML[i + (segundoHTML.length / 2)].style.backgroundColor = "#89e12f"
			}
		}
	}

}