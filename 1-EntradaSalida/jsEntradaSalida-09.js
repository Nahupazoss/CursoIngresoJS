/*
NAHUEL PAZOS DIVZ
EJERCICIO E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let nuevosueldo;
	let aumento;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	nuevosueldo = document.getElementById("txtIdResultado").value;
	nuevosueldo = parseInt(nuevosueldo);

	aumento = sueldo * 10 / 100;

	nuevosueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevosueldo



	
}
