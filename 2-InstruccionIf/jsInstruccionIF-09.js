/* NAHUEL PAZOS DIVZ
EJERCICIO IF 09 */
//Genero el número RANDOM entre 1 y 10 
function mostrar()
{
	let numero;
	let maximo;
	let minimo;

	maximo = 10;
	minimo = 1;

	numero = Math.floor(Math.random() * (maximo + 1 - minimo) + minimo);

	alert(numero);
}//FIN DE LA FUNCIÓN