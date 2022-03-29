/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */ 
/*NAHUEL PAZOS DIVZ
TP 4 */
/*function CalcularPrecio ()
{
    let cantidadDeLamparas;
    let precioPorLampara;
    let descuento;
    let marca;
    let resultado;
    let precioFinal;
    let recargo;
    let mensaje;
    let precioConImpuesto;

    precioPorLampara = 35;
    descuento = 0;
    recargo = 10;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marca = document.getElementById("Marca").value;

    resultado = cantidadDeLamparas*precioPorLampara;
    
    if (cantidadDeLamparas>5)
        {  
            descuento = 50;
        }
    else 
    {
        if (cantidadDeLamparas==5)
        {
            if(marca=="ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
        }
        else
        {
            if (cantidadDeLamparas == 4)
            {
                if (marca == "Argentina" || marca == "FelipeLamparas")
                {
                    descuento = 25;
                }
                else
                {
                    descuento = 20;
                }
            }
            else
            {
                if(cantidadDeLamparas == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        descuento = 15;
                    } 
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            descuento = 10;
                        }
                        else
                        {
                            descuento = 5;
                        }
                    }
                }
            }
        }          
    }  

    precioFinal = resultado - (resultado * descuento / 100);

    if(precioFinal > 119)
    {
        impuesto = precioFinal * recargo / 100;
        mensaje = "Usted pago $" + impuesto + " de IBB";
        alert(mensaje);
        precioConImpuesto = precioFinal + impuesto;
        document.getElementById("txtIdprecioDescuento").value = precioConImpuesto;
    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
} */
function CalcularPrecio () 
{
    var precioLampara;
    var cantidadLamparas;
    var precioBruto;
    var precioFinal;
    var marca;
    var descuento;
    var recargo;
    var impuestoAgregado;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marca = document.getElementById("Marca").value;

    precioLampara = 35;
    descuento = 50;
    recargo = 10;
    
    precioBruto = precioLampara * cantidadLamparas;

    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
                    break;
            }
            break;
        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;

                default:
                    descuento = 20;
                    break;
            }
            break;
        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                    break;

                default:
                    descuento = 30;
                    break;
            }
            break;
    }
    precioFinal = precioBruto -( precioBruto * descuento/100);

    if(precioFinal > 120)
    {
        impuestoAgregado = precioFinal * recargo/100;
        precioFinal = precioFinal + impuestoAgregado;
        alert("Usted pago $" + impuestoAgregado +" de IIBB.”");
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}

