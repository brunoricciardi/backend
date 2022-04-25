const suma = function (a, b) {
    return a + b
}

console.log(suma(2, 3));

;(async function(nombre) {
    const settings = await fetch()
    console.log({ settings })
    console.log("hola" + nombre);
})("bruno")