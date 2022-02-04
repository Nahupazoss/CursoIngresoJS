function mostrar()
{
	//tomo la edad  

	let edad;


	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad >= 18 ){
		
		alert("Eres mayor de edad");
	}

	


     if (edad >12 && edad <18){

		alert("Eres adolescente");
	}

 

	alert("Fin de la funcion")
}
	