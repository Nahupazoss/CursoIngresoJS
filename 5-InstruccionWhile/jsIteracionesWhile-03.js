/*NAHUEL PAZOS DIVZ
EJERCICIO 03 WHILE
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("Ingrese la clave :");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Contraseña incorrecta , intentelo de nuevo :");
	}
}//FIN DE LA FUNCIÓN
