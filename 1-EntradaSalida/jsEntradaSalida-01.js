/*
NAHUEL PAZOS DIVZ
EJERCICIO E/S 01
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
/* 
function mostrar()

	let productoUno;
	let productoDos;
	let productoTres;
	let nombreProducto1;
	let nombreProducto2;
	let nombreProducto3;

	let resultadoSuma;
	let precioBruto;
	let promedioDePrecios;
	let iva;
	let descuento;

	let texto;
	let texto2;
	let texto3;

    nombreProducto1 = prompt("ingrese nombre del producto");
	productoUno = prompt("Ingrese el valor de su primer producto");
	productoUno = parseFloat(productoUno);

    nombreProducto2 = prompt("ingrese nombre del producto");
	productoDos = prompt("Ingrese el valor de su segundo producto");
	productoDos = parseFloat(productoDos);

	nombreProducto3 = prompt("ingrese nombre del producto");
	productoTres = prompt("Ingrese el valor de su tercer producto");
	productoTres = parseFloat(productoTres);

	resultadoSuma = productoUno + productoDos + productoTres;

	promedioDePrecios = resultadoSuma / 3;

	iva = resultadoSuma * (21/100);

	descuento = resultadoSuma * (25/100);

	texto = "El valor de producto1 es de " + nombreProducto1 + " $" + productoUno + "\n" + "El valor de producto dos es de " + nombreProducto2 + " $" + productoDos + "\n" + "El valor de producto tres es de " + nombreProducto3 + " $" + productoTres + "\n";

	texto2 = "El precio bruto es de $" + resultadoSuma + " , y el promedio de tus productos es de $" + promedioDePrecios + "\n";

	texto3 = "El precio con el iva agregado es de $" + iva + "\n" + "El precio final con un descuento del 25% es de $" + descuento;

	alert(texto + texto2 + texto3);	

*/
/*

/*function mostrar()
{
	let diametroMayor;
	let diametroMenor;

	let areaTotal;
	let porcentajeArea;
	let perimetro;

	let varillasPlastico;
	let varillaMetro;
	let papel;
	let resultadoPapel;
	let resultadoVarilla;

	let catetos;
	let hipotenusaAlCuadrado;
	let hipotenusa;
	let cateto2;
	let hipotenusaAlCuadrado2;
	let hipotenusa2;

	let texto;

	diametroMayor = prompt("ingrese el diamatro mayor");
	diametroMayor = parseFloat(diametroMayor);

	diametroMenor = prompt("ingrese el diametro menor");
	diametroMenor = parseFloat(diametroMenor);

	catetos = (diametroMenor / 2);
	hipotenusaAlCuadrado = (catetos) ** 2 + (catetos) **2;
	hipotenusa = Math.sqrt(hipotenusaAlCuadrado);

	cateto2 = diametroMayor - catetos;
	hipotenusaAlCuadrado2 = (cateto2)**2 + (cateto2)**2;
	hipotenusa2 = Math.sqrt(hipotenusaAlCuadrado2);

	perimetro = (hipotenusa)*2 + (hipotenusa2)*2;
	
	varillasPlastico = perimetro + diametroMenor + diametroMayor;
	varillaMetro = varillasPlastico / 100;

	areaTotal = (diametroMayor * diametroMenor) / 2;

	porcentajeArea = (areaTotal * 10 ) / 100;

	papel = (porcentajeArea + areaTotal) / 100;

	resultadoPapel = papel * 10;
	resultadoVarilla = varillaMetro * 10;


	texto = "Para la construccion de 10 cometas se necesitan " + "\n" 
	+ "\n" + resultadoPapel + " metros de papel " + "\n" 
	+ resultadoVarilla + " metros de varillas de plastico";

	alert(texto);
}
*/

/*Se piden tres nombre de producto, 
y los precios de cada producto ingresado, 
sacar el precio bruto(la suma de los tres sin impuestos), 
el promedio de los precios y el precio final total más iva(21%),
pedir un porcentaje de descuento y aplicarlo al precio final ,
 mostrar todos los datos calculados e ingresados ​​por alerta. 
(solo una alerta en el código). Los datos se piden por prompt.
*/
/*
function mostrar()
{
	let nombreProducto;
	let nombreProducto2;
	let nombreProducto3;
	let producto;
	let producto2;
	let producto3;
	let resultadoSuma;
	let promedioDePrecios;
	let texto;
	let iva;
	let resultado;
	let resultado2;
	let descuento;

	descuento = 0;
	iva = 0.21;

	nombreProducto = prompt ("Ingrese el nombre de su primer producto : ");
	producto = prompt ("Ingrese el valor de su primer producto : ");
	producto = parseFloat(producto);

	nombreProducto2 = prompt ("Ingrese el nombre de su segundo producto : ");
	producto2 = prompt ("Ingrese el valor de su segundo producto : ");
	producto2 = parseFloat(producto2);

	nombreProducto3 = prompt ("Ingrese el nombre de su tercer producto : ");
	producto3 = prompt ("Ingrese el valor de su tercer producto : ");
	producto3 = parseFloat(producto3);
	
	descuento = prompt("Ingrese su % de descuento")
	descuento = parseInt(descuento);

	resultadoSuma = producto + producto2 + producto3;
	promedioDePrecios = resultadoSuma / 3;
	resultado2 = resultadoSuma * (21/100);
	resultado =  resultado2 * (descuento/100);

	texto = nombreProducto + " tiene el valor de $" + producto + "\n"
	+ nombreProducto2 + " tiene el valor de $" + producto2 + "\n" 
	+ nombreProducto3 + " tiene el valor de $" + producto3 + "\n" 
	+ "El precio bruto es de $" + resultadoSuma + "\n" 
	+ "El promedio de tus productos es de $" + promedioDePrecios + "\n" 
	+ "El precio con el iva agregado del 21% es de $" + resultado2 + "\n" 
	+ "El precio con el descuento aplicado es de $" + resultado

	alert(texto);
} */
