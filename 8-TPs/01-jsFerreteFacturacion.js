//NAHUEL PAZOS DIV Z
//TP E/S 1
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);
    
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    resultado = precio1 + precio2 + precio3;

    alert("la suma de tus productos es:" + " " + resultado);	
}

function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultado;
    let promedio;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);
    
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    resultado = precio1 + precio2 + precio3;

    promedio = resultado / 3;

    alert("El promedio de tus productos es $" + " " + promedio);
}

function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultado;
    let iva;
    let precioFinal;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);
    
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    resultado = precio1 + precio2 + precio3;

    iva = resultado * 21 / 100;

    precioFinal = resultado + iva;
    
    precioFinal = precioFinal;
    
    alert("El precio final de tus productos con el iva agregado es $" + " " + precioFinal);
    
    alert(precioFinal);
}