const verReceta = document.getElementById ("verreceta");
const comidaFavorita = document.getElementById ("comidafavorita");
const resultado = document.getElementById ("resultadoreceta");
verReceta.addEventListener("click", function(){
    const option = comidaFavorita.value;
    let receta ="";
    let imagen ="";
    switch (option){
        case "pan":
        receta = "Receta de Pan: harina,agua, levadura y sal. Amasar, leudar y hornear";
        imagen = "imagenes/chan.jpg";
        break;
        case "panchos":
        receta = "Receta de Panchos: hervir la salchicha y poner en pan con salva a tu gusto";
        imagen = "imagenes/descarga pancho.jpg";
        break;
        case "choripan":
        receta = "Receta de Chori Pan: asar el chori, poner en pan y agregar el chimichurri";
        imagen = "imagenes/chori con chumichurri.jpg";
        break;
        case "empanadas":
        receta = "Receta de Empanadas: rellenar masa con carne, cerrar y hornear";
        imagen = "imagenes/zzz.jpg";
        break;
        case "pizza":
        receta = "Receta de Pizza: masa, salsa, queso y hornear hasta derretir";
        imagen = "imagenes/gifpizza.jpg";
        break;
    }
    if (option) {
        resultado.innerHTML =`<p>${receta}</p><img src = "${imagen} alt ="${option}" width="200">`;
        resultado.classList.remove("oculto");}
        else {
            resultado.innerHTML = "";
            resultado.classList.add("oculto");
        }
});
const boton = document.getElementById ("mostrargaleria");
boton.addEventListener("click", function(){
const galeria = document.getElementById("galeria");
galeria.classList.toggle("oculto");
if (galeria.classList.contains("oculto")) {
    boton.textContent = "Mostrar Galeria";
}
else {
    boton.textContent = "Ocultar Galeria";}
});
const botonFormulario = document.getElementById("mostrarformulario");
const formulario = document.getElementById("formulario");
botonFormulario.addEventListener("click", function(){
    formulario.classList.toggle("oculto");
    if (formulario.classList.contains("oculto")){
        botonFormulario.textContent = "Responder al Preguntas";
    }
    else{
        botonFormulario.textContent = "Ocultar Formulario";
    }
});
document.getElementById("botonmagico").addEventListener("click", function(){
    const palabra = prompt("Ingrese La Palabra Magica");
    if(palabra === "aprobado"){
        window.location.href = "https://www.youtube.com/watch?v=JpwBE5e4pv0";
    }
    else {
        window.location.href = "https://www.youtube.com/watch?v=Bb-nTzGLLxo";
    }
});