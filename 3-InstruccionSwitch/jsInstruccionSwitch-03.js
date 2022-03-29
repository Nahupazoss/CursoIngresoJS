/*NAHUEL PAZOS DIVZ
EJERCICIO SWITCH 03 */
//tomo el mes
function mostrar()
{
	let mes;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
			
		default:
		alert("Este mes tiene mas de 30 dias");
		break;
	}
}//FIN DE LA FUNCIÓN