//validacion galeria fotos

    const slider=[...document.querySelectorAll("image-slider")];
    const flechaAnterior = document.querySelector("#anterior");
    const flechaSiguiente = document.querySelector("#siguiente");

    var valor;

    flechaSiguiente.addEventListener("Click",function(){
        return cambioPosicion(1);});
    flechaAnterior.addEventListener("Click",function(){
        return cambioPosicion(-1);});

        function cambioPosicion (change){
            console.log(change)
        }

    
    
    
    //let imagen2 = document.getElementById('imagen2').src;
    //function siguienteImagen(){
       //for (i=0; i<=3; i++){
        //if(currentImageIndex <=4)
        //{
           // arrayContenedor[i].src = "IMG/galeria" + currentImageIndex + ".jpg"; 
           // currentImageIndex ++;
        //}
        //else{
           // currentImageIndex = 1;
        //}
     // }
    //}