/* NAHUEL PAZOS DIV Z
EJERCICIO 04 SWITCH */
//tomo el mes
function mostrar()
{
	let mes;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias");
			break;
			
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		
		default:
			alert("Este mes tiene 31 dias");
			break;	
	}		
}//FIN DE LA FUNCIÓN