
var contenido = document.querySelector('#contenido')
function traer() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            contenido.innerHTML = `<div class="card-body" style="width: 60rem; ">
            <center><img src="${data.results[0].picture.large}" width="190px" class="img-fluid rounded-circle "></center>
            <h5 class="text-dark mt-3 card-text" align="justify" >
            Nombre: ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last} <br>
            Edad: ${data.results[0].registered.age} <br>
            Fecha: ${data.results[0].registered.date} <br>
            Telefono: ${data.results[0].cell}<br>
            Email: ${data.results[0].email}<br>
            Ciudad: ${data.results[0].location.city}<br>
            País: ${data.results[0].location.country}<br>
            Estado: ${data.results[0].location.state}<br>
            Direccion: ${data.results[0].location.street.name} ${data.results[0].location.street.number} 
            </h5>
            </div>
            
            `
        })


}
