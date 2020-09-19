var contenido = document.getElementById('app')
function traer(){
    fetch('https://api.datos.gob.mx/v1/calidadAire')
    .then(data => data.json())
    .then(data=> {
        console.log(data.results[0].stations[0])
        app.innerHTML= //html 
        `
            <p>Datos: ${data.results[0].stations[0].indexes[0].calculationTime}</p>
        
        `
    })
}