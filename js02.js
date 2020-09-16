
//var arreglo = ['HTML', 15, true]
//console.log(arreglo[0]);

/*var objeto = {
    nombre: 'HTML',
    duracion: 15,
    estado: true,
    capitulos: {
        nombre: 'Introduccion',
        videos: 15
    }

}
console.log(objeto);*/

var arrayObjetos = [{
    nombre: 'HTML',
    estado: true
},
{
    nombre: 'CSS',
    estado: true
},
{
    nombre: 'JS',
    estado: false
}]

console.log()

for (let indice of arrayObjetos) {
    console.log(indice)
}

var dolar = [{ "fecha": "2020-09-15T03:00:00.000Z", "valor": 767.01 }, { "fecha": "2020-09-14T03:00:00.000Z", "valor": 768.34 }, { "fecha": "2020-09-11T03:00:00.000Z", "valor": 764.99 }, { "fecha": "2020-09-10T03:00:00.000Z", "valor": 767.87 }, { "fecha": "2020-09-09T03:00:00.000Z", "valor": 776.65 }, { "fecha": "2020-09-08T03:00:00.000Z", "valor": 773.24 }, { "fecha": "2020-09-07T03:00:00.000Z", "valor": 773.76 }, { "fecha": "2020-09-04T04:00:00.000Z", "valor": 773.71 }, { "fecha": "2020-09-03T04:00:00.000Z", "valor": 771.45 }, { "fecha": "2020-09-02T04:00:00.000Z", "valor": 770.59 }, { "fecha": "2020-09-01T04:00:00.000Z", "valor": 776.46 }, { "fecha": "2020-08-31T04:00:00.000Z", "valor": 779.92 }, { "fecha": "2020-08-28T04:00:00.000Z", "valor": 784.27 }, { "fecha": "2020-08-27T04:00:00.000Z", "valor": 786.91 }, { "fecha": "2020-08-26T04:00:00.000Z", "valor": 784.44 }, { "fecha": "2020-08-25T04:00:00.000Z", "valor": 786.17 }, { "fecha": "2020-08-24T04:00:00.000Z", "valor": 790.88 }, { "fecha": "2020-08-21T04:00:00.000Z", "valor": 785.84 }, { "fecha": "2020-08-20T04:00:00.000Z", "valor": 784.25 }, { "fecha": "2020-08-19T04:00:00.000Z", "valor": 796.23 }, { "fecha": "2020-08-18T04:00:00.000Z", "valor": 803.4 }, { "fecha": "2020-08-17T04:00:00.000Z", "valor": 796.73 }, { "fecha": "2020-08-14T04:00:00.000Z", "valor": 793.32 }, { "fecha": "2020-08-13T04:00:00.000Z", "valor": 792.69 }, { "fecha": "2020-08-12T04:00:00.000Z", "valor": 793.61 }, { "fecha": "2020-08-11T04:00:00.000Z", "valor": 796.58 }, { "fecha": "2020-08-10T04:00:00.000Z", "valor": 784.28 }, { "fecha": "2020-08-07T04:00:00.000Z", "valor": 777.18 }, { "fecha": "2020-08-06T04:00:00.000Z", "valor": 774.82 }, { "fecha": "2020-08-05T04:00:00.000Z", "valor": 767.98 }, { "fecha": "2020-08-04T04:00:00.000Z", "valor": 761.34 }]

for(let indice of dolar){
    console.log(indice.valor);
}
