let terminar = prompt("ingrese ESC para terminar, sino escriba EMPEZAR")
while (terminar != "ESC") {
    function sumarEdades(sumaUno, sumaDos, sumaTres) {
        let suma = sumaUno + sumaDos + sumaTres
        return suma
    }

    function promedioDeEdad() {
        let edadUno = parseFloat(prompt(" ingrese su edad"))
        let edadDos = parseFloat(prompt(" ingrese su edad"))
        let edadTres = parseFloat(prompt(" ingrese su edad"))

        let resultadoDeSuma = sumarEdades(edadUno, edadDos, edadTres)

        let promedio = resultadoDeSuma / 3
        alert("El promedio de edad es " + promedio)
    }
    promedioDeEdad()
    terminar = prompt("ingrese ESC para terminar o CONTINUAR para seguir")
}