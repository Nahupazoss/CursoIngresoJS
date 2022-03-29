/*NAHUEL PAZOS DIVZ
EJERCICIO IF 10 */
//Genero el número RANDOM entre 1 y 10 
function mostrar()
{
	let numero;
	let maximo;
	let minimo;

	maximo = 10;
	minimo = 1;

	numero = Math.floor(Math.random() * (maximo + 1 - minimo) + minimo);

	if(numero > 8)
	{
		alert("EXCELENTE SU NOTA ES: " + numero);	
    }
	else
	{
		if(numero > 3)
		{
			alert("APROBO SU NOTA ES: " + numero);	
		}	
		else
		{
			alert("DESAPROBO SU NOTA ES: " + numero);
		}
	}
}//FIN DE LA FUNCIÓN