function isAlphabetic(cadena)
{
      if (cadena.match(/^[a-zA-Z]+$/))
      {
        return true;
      }
      else
      {
        return false;
      }
}
function isVacio(cadena,nombre)
{
	 if(cadena=="")
    {
    	alert("te falta llenar el "+nombre);
    	return true;
    }
    return false;
}
function isMayuscula(letra){


}
function validateForm(){
	/* Escribe tú código aquí */
    camposTexto = document.getElementById("formulario").elements;
    var nombre= camposTexto[0].value;
    var apellido= camposTexto[1].value;
    var email= camposTexto[2].value;
    var contraseña= camposTexto[3].value;
    var opcion= camposTexto[4].value;
    var login= camposTexto[5].value;
    isVacio(nombre,"nombre");
    isVacio(apellido,"apellido");
    isVacio(email,"email");
    isVacio(contraseña,"contraseña");


    if( isVacio(nombre,"nombre")|| isVacio(apellido,"apellido")||isVacio(email,"email")||isVacio(contraseña,"contraseña"))
    {}
    else {
      if(isAlphabetic(nombre)!=true)
    	{
    	alert("ingrese solo letras en el nombre");
    	}
	  if(isAlphabetic(apellido)!=true)
    	{
    	alert("ingrese solo letras en el Apellido");
    	}  
      if(esMayuscula(nombre)==false)
      {
      	alert("Por favor escriba su nombre con la primera letra en Mayuscula")
      }
       if(esMayuscula(apellido)==false)
      {
      	alert("Por favor escriba su nombre con la primera letra en Mayuscula")
      }

  }