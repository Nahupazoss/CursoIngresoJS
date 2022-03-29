/*NAHUEL PAZOS DIVZ
EJERCICIO SWITCH 01 */
//tomo el mes
function mostrar()
{
	let mes;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!");
			break;
		default:
			alert("Opcion no valida");
			break;		
	}
}//FIN DE LA FUNCIÓN