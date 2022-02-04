//NAHUEL PAZOS DIVZ
//TP 3
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let Fahrenheit;
    let Centígrados;
    let resultado;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);

    Fahrenheit = temperatura;

    resultado = (((Fahrenheit - 32) * 5) / 9);

    Centígrados = resultado

    texto = Fahrenheit +" fahrenheit son " + Centígrados + " centigrados"

    alert(texto);
}
function CentigradosFahrenheit () 
{
    let temperatura;
    let Fahrenheit;
    let Centígrados;
    let resultado;
    let texto;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);

    Centígrados = temperatura

    resultado = ((Centígrados * 1.8) + 32);

    Fahrenheit = resultado 

    texto = Centígrados +" centigrados son " + Fahrenheit + " fahrenheit"

    alert(texto);
}
