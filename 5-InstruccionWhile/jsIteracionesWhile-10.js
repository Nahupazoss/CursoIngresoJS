/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let sumaPositivos;
	let sumaNegativos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	let banderaPositivo;
	let banderaNegativo;
	let maximoPositivo;
	let minimoNegativo;

	sumaPositivos = 0;
	sumaNegativos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	banderaNegativo = 0;
	banderaPositivo = 0;

	respuesta = true;

	while(respuesta == true) 
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos++;
			if(numeroIngresado < minimoNegativo || banderaNegativo == 0)
			{
				minimoNegativo = numeroIngresado;
			}
		}
		else
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivos++;
				if(numeroIngresado > maximoPositivo || banderaPositivo == 0)
				{
					maximoPositivo = numeroIngresado;
				}
			}
			else
			{
				contadorCeros++;
			}
		}

		if(numeroIngresado%2 == 0)
		{
			contadorPares++;
		}
		
		respuesta = confirm("Desea continuar?");
	}

	diferencia = contadorPositivos - contadorNegativos;

	document.write("La suma de negativos es :" + sumaNegativos + "<br>");
	document.write("La suma de positivos es :" + sumaPositivos + "<br>");
	document.write("La cantidad de positivos es :" + contadorPositivos + "<br>");
	document.write("La cantidad de negativos es :" + contadorNegativos + "<br>");
	document.write("La cantidad de ceros es :" + contadorCeros + "<br>");
	document.write("La cantidad de pares es :" + contadorPares + "<br>");
	
	if(contadorPositivos > 0)
	{
		promedioPositivos = sumaPositivos / contadorPositivos;
		document.write("El promedio de los positivos es :" + promedioPositivos + "<br>");
	}
	else
	{
		document.write("No se pudo calcular el promedio de positivos" + "<br>");
	}
	if(contadorNegativos > 0)
	{
		promedioNegativos = sumaNegativos / contadorNegativos;
		document.write("El promedio de los negativos es :" + promedioNegativos + "<br>");
	}
	else
	{
		document.write("No se pudo calcular el promedio de negativos" + "<br>");
	}

	document.write("La diferencia entre la cantidad de positivos y negativos es:  "+ diferencia + "<br>");
	document.write("El maximo de los postivos es: " + maximoPositivo + "<br>");
	document.write("El minimo de los positivos es: " + minimoNegativo + "<br>");
}
