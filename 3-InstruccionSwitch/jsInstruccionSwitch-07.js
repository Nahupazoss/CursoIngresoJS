/*NAHUEL PAZOS DIVZ
EJERCICIO 07 SWITCH*/
function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Sur");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert("Este");
			break;		
	}
}//FIN DE LA FUNCIÓN