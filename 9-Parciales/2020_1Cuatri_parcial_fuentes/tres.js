/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	//variables
	let nombre;
	let edad;
	let banderaEdad;
	let sexo;
	let estadoCivil;
	let respuesta;
	let temperaturaCorporal;
	let temperaturaMaxima;
	let pasajeroConMayorTemperatura;
	let banderaTemperatura;
	let contadorSolteros;
	let contadorViudos;
	let contadorHombresSolterosViudos;
	let contadorDeViejosConMasDe38Grados;
	let promedioEdadHombresSolteros;
	let acumuladorEdadHombres;
	let contadorSolterosHombres;

	respuesta = true;
	banderaEdad = 0;
	banderaTemperatura = 0;
	contadorSolteros = 0;
	contadorViudos = 0;
	contadorDeViejosConMasDe38Grados= 0;
	contadorHombresSolterosViudos= 0;
	contadorSolterosHombres = 0;

	//pedir todos los datos  e ir preguntando si desea seguir ingresando datos
	while(respuesta == true)
	{
		nombre = prompt("Ingrese su nombre");//pido nombre
		edad = prompt("Ingrese su edad");//pido edad
		edad = parseInt(edad);//parseo la edad
		sexo = prompt("Ingrese su sexo (f o m)");//pido su sexo f o m
		while(sexo != "f" && sexo != "m")//si no es f o m
		{
			sexo = prompt("Sexo no valido,reingresar (f o m)");//se pide reingresar el sexo
		}
		estadoCivil = prompt("Ingrese su estado civil(soltero,casado o viudo)");//pido el estado civil
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")//si no es ninguno de los indicados
		{
			estadoCivil = prompt("Estado civil incorrecto,reingresar(casado,soltero o viudo)");//se pide reingresar el estado civil
		}
		temperaturaCorporal = prompt("Ingrese su temperatura corporal");//pido la temperatura
		temperaturaCorporal = parseFloat(temperaturaCorporal);//pasrseo la temperatura

		//saco cual seria la temperatura maxima
		if(temperaturaCorporal > temperaturaMaxima || banderaTemperatura == 0)
		{
			temperaturaMaxima = temperaturaCorporal;
			pasajeroConMayorTemperatura = nombre;//indico cual es el pasajero con la temperatura maxima
			banderaTemperatura == 1;//utilizo y hago el cambio de valor de la bandera
		}
		
		if(edad > 18 && estadoCivil == "viudo")//si es mayor de edad y viudo
		{
			contadorViudos++;//se cuentan aca
		}

		if(sexo == "m" && (estadoCivil == "soltero" || estadoCivil == "viudo"))//si es masculino y su estado civil es soltero o viudo
		{
			contadorHombresSolterosViudos++;//los cuento aca
		}
		
		if(edad > 60 && temperaturaCorporal > 38)//si es mayor a 60 años y su temperatura es mayor a 38
		{
			contadorDeViejosConMasDe38Grados++;//los cuento aca
		}

		if(estadoCivil == "soltero" && sexo == "m")//si es soltero y es hombre
		{
			contadorSolterosHombres++;//los cuento aca
			acumuladorEdadHombres += edad; //y los acumulo
		}
		respuesta = confirm("Quiere seguir ingresando datos?");//esto es para que se vaya preguntando en cada vuelta si desea continuar
	}

	promedioEdadHombresSolteros = acumuladorEdadHombres / contadorSolterosHombres;//saco el promedio de los hombres solteros

//a) El nombre de la persona con mas temperatura.
document.write("la persona con mas temperatura es: " + pasajeroConMayorTemperatura + " y tiene: " + temperaturaMaxima + "<br>");
//b) Cuantos mayores de edad estan viudos
document.write("La cantidad de mayores de edad viudos es: " + contadorViudos + "<br>");
//c) La cantidad de hombres que hay solteros o viudos.
document.write("La cantidad de hombres solteros o viudos es: " + contadorHombresSolterosViudos + "<br>");
//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
document.write("La cantidad de personas de tercera edad con mas de 38 de temperatura son: " + contadorDeViejosConMasDe38Grados + "<br>" );
//e) El promedio de edad entre los hombres solteros.
document.write("El promedio de edad entre los hombres solteros es de: " + promedioEdadHombresSolteros + "<br>");
}
