/*NAHUEL PAZOS DIVZ
EJERCICIO IF 06*/
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
 
	if(edad > 17)
	{
		alert("Eres mayor de edad");
	}
	else
	{
        if(edad > 12 && edad < 18 )
		{
			alert("Eres adolescente");
		}
		else
		{
			alert("Eres niño");
		}
	}

	alert("Fin de la funcion");
}
//FIN DE LA FUNCIÓN