//Se crea la función cipher.

function cipher (str) {

    do{
    var str = prompt('Por favor, Ingresar Frase')

     var arr = []; // Se crea un array vacio para guardar los códigos de las letras en ASCII.

    for (var i= 0 ; i<str.length ; i++){

        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) //Usamos str.charCodeAt(i) para hallar su equivalente en ASCII
         {
            arr.push((str.charCodeAt(i)-65 + 33) % 26 + 65); //Con arrr.push(), agregamos al arr la conversión de las letras
         }
         else if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=120)

        {
            arr.push((str.charCodeAt(i)-97 + 33) %26 + 97);
        }

        else(str.charCodeAt(i)<65)
        {
            arr.push(str.charCodeAt[i]); //para los que no son letras mayúsculas ni minúsculas.
        }

    }
    return arr;

  }
  while(typeof str === 'string' && str !== '');
}

cipher ('AbC');
