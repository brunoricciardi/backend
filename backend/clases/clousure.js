function crearGritarNombre(nombre) {
    const signosDeExclamacion = '!!!'
    return function () {
        console.log('${nombre}${signosDeExclamacion}');
    }
}

const gritarCH = crearGritarNombre('coderhouse')

gritarCH()


function saludar(saludo) {
    return function (nombre) {
        return saludo + " " + nombre
    }
}

const buenosDias = saludar("buenos dias")
const buenosDias = saludar("buenos tardes")

console.log(saludar("buenos dias")("bruno"))
console.log(saludar("buenos dias")("pablo"))
console.log(saludar("buenos dias")("pepe"))

console.log(buenosDias("bruno"))
console.log(buenosDias("pablo"))
console.log(buenosDias("pepe"))

console.log(buenasTardes("bruno"))
console.log(buenasTardes("pablo"))
console.log(buenasTardes("pepe"))