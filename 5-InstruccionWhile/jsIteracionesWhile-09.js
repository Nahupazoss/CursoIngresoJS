/*NAHUEL PAZOS DIV Z
EJERCICIO 09 WHILE
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numeroIngresado;
	let numeroMaximo;
 	let numeroMinimo;
	let respuesta;
	let banderaDelPrimerIngreso;

	banderaDelPrimerIngreso = 0;
	numeroMaximo = -100000;
	numeroMinimo = 100000;
	respuesta = true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado < numeroMinimo || banderaDelPrimerIngreso == 0)
		{
			numeroMinimo = numeroIngresado;
		}
		if( numeroIngresado > numeroMaximo || banderaDelPrimerIngreso == 0)
		{
			numeroMaximo = numeroIngresado;
			banderaDelPrimerIngreso = 1;
		}
		respuesta = confirm("Desea continuar?");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}