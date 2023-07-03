const mostrarReloj = () => {
    let fechaActual = new Date();
    let horaActual = formatoHora(fechaActual.getHours());
    let minutoActual = formatoHora(fechaActual.getMinutes());
    let segundoActual = formatoHora(fechaActual.getSeconds());
    document.getElementById("hora").innerHTML = horaActual + ":" + minutoActual + ":" + segundoActual;
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ]
    const dias = [
        "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"
    ]
    let diaSemana = dias[fechaActual.getDay()];
    let dia = fechaActual.getDate();
    let mes = meses[fechaActual.getMonth()];
    document.getElementById("fecha").innerHTML = diaSemana + ", " + dia + " " + mes;
    document.getElementById("contenedor").classList.toggle("animar");
}
const formatoHora = (horaActual) => {
    if (horaActual < 10){
        horaActual = "0" + horaActual;
    }
    return horaActual;
}
setInterval(mostrarReloj, 1000);