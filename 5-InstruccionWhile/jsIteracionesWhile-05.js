/*NAHUEL PAZOS DIVZ
EJERCICIO 05 WHILE
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let genero;

	sexoIngresado = prompt("ingrese f(femenino) o m(masculino)");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("El sexo ingresado es incorrecto , reintentar");
	}

	/*switch(genero)
	{
		case "f":
			sexoIngresado = "Femenino";
		break;
		case "m":
			sexoIngresado = "Masculino";
		break;
		default:
			sexoIngresado = "No Binario";
		break;
	}*/
	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN