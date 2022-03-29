/*NAHUEL PAZOS DIVZ
EJERCICIO IF 08 */
function mostrar()
{
	let edad;
	let estado;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estado = document.getElementById("estadoCivil").value;

	if ( estado == "Soltero" && !( edad < 18 ) ) 
	{
		alert("Es soltero y no es menor");
    }

	alert("Fin de la funcion")
}//FIN DE LA FUNCIÓN