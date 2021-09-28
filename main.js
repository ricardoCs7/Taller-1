const comments_array = [10];
var box = document.getElementById("comentarios");

function addComentario() {

    var nombre = document.getElementById("nombre").value;
    var comentario = document.getElementById("comentario").value;


    if (!nombre == "" && !comentario == "") {
        if (localStorage.getItem("comentarios") == null) {
            localStorage.setItem("comentarios", "[]");
        }
    
        if (comentario) {
            const comments_array = JSON.parse(localStorage.getItem("comentarios"));
            comments_array.push({ nombre, comentario });
            localStorage.setItem("comentarios", JSON.stringify(comments_array));
        }
       
    }
}



function getLocallStorage() {
    var com = localStorage.getItem("comentarios");
    return document.getElementById("comentarios").innerHTML= com;
}


