document.addEventListener('DOMContentLoaded', getLocal, false);

const comments_array = [];
var box = document.getElementById("cajaComentarios");


function addComentario() {

    var nombre = document.getElementById("nombre").value;
    var commit = document.getElementById("comentario").value;
    var fecha = (new Date()).toLocaleString();


    if (!nombre == "" && !commit == "") {
        if (localStorage.getItem("comentarios") == null) {
            localStorage.setItem("comentarios", "[]");
        }

        if (commit) {

            const comments_array = JSON.parse(localStorage.getItem("comentarios"));
            comments_array.push({ nombre, commit, fecha });
            localStorage.setItem("comentarios", JSON.stringify(comments_array));
        }
        alert("comentario publicado")
    }
}




function getLocal() {
    let innerHTML = "";
    JSON.parse(localStorage.getItem("comentarios")).reverse().forEach((index) => {
        innerHTML += `
 <div class="card text-left" id="com">
   <div class="card-body">
     <h5 class="card-title"> <img display: "inline-flex"; id="perfil" src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" width="96" height="96">  ${index.nombre}</h4>
     <p class="card-text">${index.commit}</p>
     <p class="card-text">${index.fecha}</p>
   </div>
 </div>
 `;
    });
    box.innerHTML = innerHTML;
}





