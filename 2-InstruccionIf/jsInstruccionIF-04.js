/*NAHUEL PAZOS DIV Z
EJERCICIO IF 04 */
function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

    if (edad > 12 && edad <= 17)
	{
		alert("Eres adolescente");
	}
	
	alert("Fin de la funcion")
}
	