document.addEventListener('DOMContentLoaded', getLocal, false);

const comments_array = [];
var box = document.getElementById("cajaComentarios");
var commit = document.getElementById("commit");

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
        alert("comentario publicado")
    }
}

function getLocal() {
    const comentario = JSON.parse(localStorage.getItem("comentarios"));
    console.log(comentario);

    box.innerHTML = JSON.parse(localStorage.getItem("comentarios"));
}


