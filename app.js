//variables
// preguntamos el ultimo digito del intervalo para que el jugador pueda subir la dificultad.
let limite = prompt("Dame el ultimo digito del intervalo en el que quieres adivinar");
// este sirve pra que nos de un numero aleatorio entre 1 a 10;
let numeroSecreto = Math.floor(Math.random()*limite)+1;
let numeroDeUsuario = 0;
let x = "No acertaste";
let intentos = 1;
//let palabaraVeces = "vez";
let maximosIntentos = 3;

while (numeroDeUsuario != numeroSecreto){
     numeroDeUsuario =parseInt(prompt('Dame un numero entre 1 a '+limite));
    
    console.log(numeroDeUsuario);
    /*
    este codigo realiza la 
    comparacion
    */
    console.log("resultado de la comparacion;", numeroDeUsuario == numeroSecreto);
    // este sirve para ver en la consola si el jugador adivino en el juego.
    if (numeroDeUsuario == numeroSecreto){  
    // acertamos, la condicion fue verdadera.
    // usamos un operador ternario para que el juego identifique cuandi usar "vez" y "veces"
        alert(`acertaste, el numero es:  ${numeroDeUsuario}. Lo hiciste en  ${intentos}  ${intentos == 1 ? "vez":"veces"}` );
    }
    
    else{
        if(numeroDeUsuario>numeroSecreto){
            alert( x+ ', el numero es menor');
        }
        else{
            alert( x+ ', el numero es mayor');
        }
        // sirve para saber el numero secreto por si el jugador se equivoca.
        console.log( "El numero secreto es:", numeroSecreto);
        // incrementamos el contador cuando no acierta.
        intentos ++;
        //palabaraVeces = "veces";
        console.log('intentos: ' , intentos);
        /* en esta parte ponemos una condicíon como limite de intentos
        y despues colocamos el break para romper el ciclo. */
        if(intentos > maximosIntentos){
            alert('Llegaste al numero maximo de ' +maximosIntentos+ ' intentos. El numero era ' +numeroSecreto);
            
            break;
        }
    }
}

