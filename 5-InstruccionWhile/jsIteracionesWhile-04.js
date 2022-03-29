/*NAHUEL PAZOS DIV Z
EJERCICIO 04 WHILE
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt("Ingrese un numero ");
	numeroIngresado = parseInt(numeroIngresado);

	while(!(numeroIngresado >=0) || !(numeroIngresado <10))
	{
		numeroIngresado = prompt("Numero incorrecto , reintentar");
		numeroIngresado = parseInt(numeroIngresado);
	}
	
}//FIN DE LA FUNCIÓN