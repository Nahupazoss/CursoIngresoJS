/*NAHUEL PAZOS DIVZ
EJERCICIO 07 WHILE
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let acumulador;
	let contador;
	let promedio;

	respuesta = true;
	acumulador = 0;
	contador = 0;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		contador++;

		respuesta = confirm("Ingresa otro numero?");
	}
	promedio = acumulador/contador;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;

}//FIN DE LA FUNCIÓN