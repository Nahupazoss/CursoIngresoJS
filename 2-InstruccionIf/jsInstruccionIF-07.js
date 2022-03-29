/* NAHUEL PAZOS DIVZ
EJERCICIO IF 07 */
/*
function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if ( estadoCivil != "Soltero" && edad < 18 )
	{
		alert("Es muy pequeño para NO ser soltero.");
    }

	alert("Fin de la funcion")
}//FIN DE LA FUNCIÓN
*/
function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13)
	{
		alert("Feliz dia")
	}
	else
	{
		if(edad > 12 && edad < 18)
		{
			alert("Usted es adolescente")
		}
		if(edad == 17)
		{
			alert("Ultimo año!!!")
		}
	}
	if(edad > 17)
	{
		alert("Tenes edad de laburar")
	}
	if(edad == 33)
	{
		alert("Como cristo")
	}
	else
	{
		if(edad == 60)
		{
			alert("A jubilarse")
		}
		if(edad == 80)
		{
			alert("Lindo numero")
		}
	}












}