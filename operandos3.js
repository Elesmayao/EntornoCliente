//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function quienEsMayor(a,b){

	if(a>b){
		return 1;
	}else if(a<b){
		return -1;
	}else{
		return 0;
	}

}

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elementos){
	let sumar = 0;
	for (let x=0;x<elementos.length;x++){
		if(elementos[x]%2==0){
			sumar = sumar + elementos[x];
		}

		}
		return sumar;
	}

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elementos){

let valor = elementos[0];
	for (let x=0;x<elementos.length;x++){
		if(elementos[x]>valor){
			valor = elementos[x];
		}

		}
		return valor;
}

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(String){

	var x = String.length;
	var cadenaInvertida = "";

	while (x>=0){
		cadenaInvertida = cadenaInvertida + String.charAt(x);
		x--;
	}
	return cadenaInvertida;

}

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(String){
	let sumar = 0;
	for (let x=0;x<String.length;x++){
		if(String[x]%2!==0){
			sumar++;
		}

		}
		return sumar;
	

}


