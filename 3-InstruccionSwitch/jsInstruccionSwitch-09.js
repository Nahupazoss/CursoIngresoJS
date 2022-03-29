//NAHUEL PAZOS DIVZ
//EJERCICIO 09 SWITCH
function mostrar()
{
	let estacionDelAño;
	let destino;
	let precioFinal;
	let descuento;
	let aumento;
	let precio;

	precio = 15000;
	aumento = 0;
	descuento = 0;

	estacionDelAño = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	/*switch(estacionDelAño)
	{
		case "Invierno":
			if(destino == "Bariloche")
			{
				aumento = precio * 20 / 100;
			}
			else
			{
				if(destino == "Mar del plata")
				{
					descuento = precio * 20 / 100;
				}
				else
				{
					descuento = precio * 10 /100;
				}
			}
			break;		
		case "Verano":
			if(destino == "Bariloche")
			{
				descuento = precio * 20 / 100;
			}
			else
			{
				if(destino == "Mar del plata")
				{
					aumento = precio * 20 / 100;
				}
				else
				{
					aumento = precio * 10 /100;
				}
			}
			break;
		case "Otoño":
		case "Primavera":
			if(destino == "Cordoba")
			{
				precioFinal = precio;
			}
			else
			{
				aumento = precio * 10 /100;
			}
	precioFinal = precio + aumento - descuento
	
	alert("Precio Final $" + precioFinal );
	}
*/
	switch(estacionDelAño)
	{
		case "Invierno":
			switch(destino){
				case "Bariloche":
					alert("$" + precio*1.2);
					break;
				case "Cordoba":
				case "Cataratas":
					alert("$" + precio*0.9);
					break;
				case "Mar del plata":
					alert("$" + precio*0.8);
					break;
			}
			break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					alert("$" + precio*0.8);
					break;
				case "Mar del plata":
					alert("$" + precio*1.2);
					break;
				default:
					alert("$" + precio*1.1);
					break;
			}
			break;
			default:
				switch(destino){
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						alert("$" + precio*1.1);
						break;
					default:
						alert("$" + precio);
						break;
				}			
	}
}
//precioFinal=precioCobrado+(precioCobrado*aumento/100)-(precioCobrado*descuento/100);
//precioFinal = precio*porcentaje;
// 0.9 descuento del 10%
// 1.1 aumento del 10%
