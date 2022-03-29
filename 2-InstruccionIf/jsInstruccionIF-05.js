//NAHUEL PAZOS DIV Z
//EJERCICIO IF 05
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

    if (edad < 13  ||  edad > 17)
	{
		alert("No eres adolescente");
	}
	alert("Fin de la funcion")

}//FIN DE LA FUNCIÓN