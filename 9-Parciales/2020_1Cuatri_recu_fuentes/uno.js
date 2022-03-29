/*
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/

function mostrar()
{
	let contador;
	let productos;
	let precio;
	let unidades;
	let marca;
	let fabricante;	
	let jabonCaro;
	let banderaJabonCaro;

	contador = 0;

	while(contador < 5)
	{
		productos = prompt("Ingrese su producto");
		while(productos != "barbijo" && productos != "jabon" && productos != "alcohol")
		{
			productos = prompt("Reingrese su producto.(barbijo,jabon o alcohol)");
		}

		precio = prompt("Ingrese el valor de su producto");
		precio = parseInt(precio);
		while(precio < 100 || precio > 300)
		{
			precio = prompt("Reingrese el valor de su producto");
			precio = parseInt(precio);
		}

		unidades = prompt("Ingrese la cantidad de unidades de su producto");
		unidades = parseInt(unidades);
		while(unidades <1 || unidades > 1000)
		{
			unidades = prompt("Reingrese la cantidad de unidades de su producto");
			unidades = parseInt(unidades);
		}

		marca = prompt("Ingrese la marca de su producto");
		
		fabricante = prompt("Ingrese al fabricante de su producto");

		contador++;
	}

	if(banderaJabonCaro == 0 || precio < jabonCaro)
	{
		 
	}

}
