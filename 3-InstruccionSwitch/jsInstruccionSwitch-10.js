//NAHUEL PAZOS DIV Z
//EJERCICIO 10 SWITCH
function mostrar()
{
	let estacionDelAño;
	let destino;

	estacionDelAño = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacionDelAño)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					alert("En invierno se viaja a " + destino);
					break;
				default:
					alert("En invierno NO se viaja a " + destino);
					break;
				}
				break;
		case "Verano":
				switch(destino)
				{
					case "Cataratas":
					case "Mar del plata":
						alert("En verano se viaja a " + destino);
						break;
					default:
						alert("En verano NO se viaja a " + destino);
						break;
				}
				break;
		case "Otoño":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
				case "Bariloche":
				case "Cordoba":
					alert("En otoño se viaja a " + destino);
					break;
			}
			break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					alert("En primavera NO se viaja a " + destino);
					break;
				default:
					alert("En primavera se viaja a " + destino);
					break;
			}
			break;	
	}		
}
//FIN DE LA FUNCIÓN	let estacionDelAño;
