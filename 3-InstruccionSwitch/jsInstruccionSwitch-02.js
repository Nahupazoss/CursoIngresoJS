/*NAHUEL PAZOS DIVZ
EJERCICIO SWITCH 02 */
//tomo el mes
function mostrar()
{
	let mes;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Abril":
		case "Mayo":
			alert("Falta para el invierno");
			break;
			
		case "Junio":
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;

		case "Enero":
		case "Febrero":
		case "Marzo":
			alert("Ya paso el invierno ahora hace calor");
			break;
	}
}//FIN DE LA FUNCIÓN