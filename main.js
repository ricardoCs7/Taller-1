document.addEventListener('DOMContentLoaded', getLocal, false);

const comments_array = [];
var box = document.getElementById("cajaComentarios");


function addComentario() {

    var nombre = document.getElementById("nombre").value;
    var commit = document.getElementById("comentario").value;


    if (!nombre == "" && !commit == "") {
        if (localStorage.getItem("comentarios") == null) {
            localStorage.setItem("comentarios", "[]");
        }

        if (commit) {
            const comments_array = JSON.parse(localStorage.getItem("comentarios"));
            comments_array.push({ nombre, commit });
            localStorage.setItem("comentarios", JSON.stringify(comments_array));
        }
        alert("comentario publicado")
    }
}


function getLocal() {
    let innerHTML = "";
    JSON.parse(localStorage.getItem("comentarios")).forEach((index) => {
 innerHTML += `
 <div class="card text-left" id="com">
 
   <div class="card-body">
     <h5 class="card-title"> <img display: "inline-flex"; id="perfil" src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" width="96" height="96">  ${index.nombre}</h4>
     <p class="card-text">${index.commit}</p>
     <p class="card-text">${Date().toLocaleString()}</p>
   </div>
 </div>
 `;
});
box.innerHTML = innerHTML;
}





// function getLocal() {
//     const comentario = localStorage.getItem("comentarios");

//     for (let index = 0; index < JSON.parse(localStorage.comentarios).length; index++) {
//         const element = JSON.parse(localStorage.getItem("comentarios"))[index];
//         const container = document.createElement('div')
//         const dvNombre = document.createElement('card-title');
//         const dvMensaje = document.createElement('card-body');
//         container.appendChild(dvNombre);
//         container.appendChild(dvMensaje);
//         box.appendChild(container);
//         dvNombre.textContent = JSON.stringify(element.commit);
//         dvMensaje.textContent = JSON.stringify(element.nombre);
//     }



// }


