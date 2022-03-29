//NAHUEL PAZOS DIVZ
//EJERCICIO IF 03

function mostrar()
{
	//tomo la edad  

	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if ( edad > 17 )
	{
		alert("Eres mayor de edad");
	}
	else
	{
		alert("Eres menor de edad");
	}
	
	alert("Fin de la funcion");
}//FIN DE LA FUNCIÓN