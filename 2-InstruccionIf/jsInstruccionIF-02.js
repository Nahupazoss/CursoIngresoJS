//NAHUEL PAZOS DIVZ
//EJERCICIO IF 02

function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if ( edad >= 18 )
	{
		alert("Eres mayor de edad");
	}

	alert("Fin de la funcion");
}//FIN DE LA FUNCIÓN