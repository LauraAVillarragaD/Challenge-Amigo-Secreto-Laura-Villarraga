// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Crear variable tipo lista para almacenar la lista de amigos a elegir
let array_amigo=[];
//let array_a_sortear=[...array_amigo];

//Crear función que agrega amigos a la lista 'amigos'

function agregarAmigo () {
    //Capturar el valor del campo de entrada nombre del amigo con la Id (#id)
    //let amigo_ingresado = document.getElementById("amigo");
    let amigo_ingresado = document.querySelector("#amigo");

    let amigo_nuevo = amigo_ingresado.value;

    if (amigo_nuevo == 0) {
        
        alert ('El campo esta vacio. Por favor, inserte un nombre: ');
        
    } else {

        array_amigo.push (amigo_nuevo);
        console.log(array_amigo);
        amigo_ingresado.value = "";
        // Funcion que crea la lista de los amigos
        crear_lista_amigos ();

    }    
}

// Crear Función para actualizar la lista de amigos
function crear_lista_amigos () {
    // Guardar en la variable lista_amigos los elementos de la listaAmigos
    let lista_amigos = document.getElementById ("listaAmigos");
    // inicializar lista_amigos
    lista_amigos.innerHTML = "" ;

   // Itera en el array amigo para adicionar el nombre de los amigos en la lista
    for ( let i = 0 ; i < array_amigo.length; i++) {

        let indice = document.createElement("li");

        indice.textContent = array_amigo [i];

       lista_amigos.appendChild (indice);

    }
}


//Función para generar de forma aleatoria el amigo secreto

function sortearAmigo() {

    if (array_amigo.length === 0) {

        alert ('Lista vacia. No hay amigos secretos para sortear')

    } else {
        
        //Calcula al azar el amigo secreto de la lista creada anteriormente
        let amigo_sorteado = array_amigo [Math.floor (Math.random()*array_amigo.length)];
        
        let resultado = document.getElementById ("resultado");
        resultado.innerHTML = `Y tu amigo secreto es: ${amigo_sorteado}`;
        
        
          
    }
        
    
}


/* //Posibles mejoras de programa
//Función para sortear amigo secreto
function sortearAmigo() {
   
    if (array_a_sortear.length === 0) {

        alert ('Lista vacia. No hay amigos secretos para sortear')
        array_a_sortear = [...array_amigo]; //reinicia la lista
        return;
    } 
        
    //Calcula al azar el amigo secreto de la lista creada anteriormente
    let indice = Math.floor (Math.random()*array_a_sortear.length);
        
    let amigo_sorteado = array_a_sortear.splice (indice,1)[0];
        
    console.log(`Tu amigo secreto es: ${amigo_sorteado}`);
    let resultado = document.getElementById ("resultado");
    resultado.innerHTML = `Y tu amigo secreto es: ${amigo_sorteado}`;
        
}
*/
//Posibles mejoras de programa
/*//Función para reiniciar el sorteo
function reiniciarSorteo() {

    let resultado = document.getElementById ("resultado");

    resultado.innerHTML = "";
    array_a_sortear = [...array_amigo]; 
}*/
