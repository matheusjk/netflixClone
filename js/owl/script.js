// imagemCarrousel = document.getElementsByClassName(".box-series")

// imagemCarrousel


// serie-principal

var modal = document.getElementById('myModal');
var btnModal = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0]

modal.style.display = "none";

btnModal.addEventListener('click', function() {
    modal.style.display = "block";
})

span.addEventListener('click', function () {
    modal.style.display = "none";
})

window.onclick = function (event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

var btnInfo = document.querySelectorAll(".botao")[1]

btnInfo.addEventListener('click', function(event){
    fetch('http://www.omdbapi.com/?t=silicon&apikey=5c5529d').then((resp) => resp.json())
    .then(function(data){
        // alert(data.Actors)  
        document.getElementsByTagName('p')[0].innerText = `Titulo: ${data.Title} \n Ano: ${data.Year} \n Genero: ${data.Genre} \n Escritores: ${data.Writer} \n Atores: ${data.Actors} \n Premiações: ${data.Awards}`
    })
})