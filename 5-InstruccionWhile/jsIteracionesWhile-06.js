//NAHUEL PAZOS DIVZ
//EJERCICIO 06 WHILE
function mostrar()
{
	let contador;
	let acumulador;
	let numero;
	let promedio;
	let i;

	i = 0;
	contador=0;
	acumulador=0;

	while(i < 5)
	{
		numero = prompt("Ingrese un numero:");
		numero = parseInt(numero);

		acumulador = acumulador + numero;

		i = i + 1; 
	}
	promedio = acumulador / 5;
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN