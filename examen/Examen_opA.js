

function buscarPalabras() {
    //aqui declaracion del texto insertado en HTML y el caracter en el HTML
    const texto = document.getElementById("text").value.trim();
    const caracter = document.getElementById("character").value.trim();
    const mensaje = document.getElementById("message"); //declarar un mensaje
    const listaResultados = document.getElementById("lista_resultat"); //listar los  resultados
    
    
    mensaje.innerText = "LAS PALABRAS Y LAS POSICIONES !!";
    listaResultados.innerHTML ="";
    
    
    const palabras = texto.toLowerCase().split(" ");   //convertir los carateres en minisculas
    if (palabras.length < 2) {
        
        alert("el texto debe contener como minimo 2 palabras");
        
        return;
    }
    
       //aqui he usado un contador Plabras enconttradas que su valor inicial vale 0 , y cuando el caracter se repite el contador aumenta "contador"
    let palabrasEncontradas = 0;
    palabras.forEach((palabra) => {
        const posicion = palabra.indexOf(caracter); 
        
        if (posicion !== -1) {
            palabrasEncontradas++;
            const item = document.createElement("li");
            const palabraResaltada = palabra.slice(0, posicion) + "<b>" + palabra.charAt(posicion) + "</b>" + palabra.slice(posicion + 1);
               
         

            item.innerHTML = `Palabra: ${palabraResaltada} - Posición: ${posicion + 1}`;
            listaResultados.appendChild(item);
            
        }
    });

    if (palabrasEncontradas === 0) {
        
        alert("no se encontro ninguna palabra que contenga el caracter insertado !!");
        mensaje.innerText="INTENTALO OTRA VEZ !!";
    }
}