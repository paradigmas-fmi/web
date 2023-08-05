---
layout: js
---

window.addEventListener("load", renderizarProximasClases);

function renderizarFila(dia) {
    if (dia.parcial) {
        return `
            <td class="tg-0lax">${dia.fecha}</td>
            <td class="tg-0lax" style="background-color:MistyRose;" colspan="2">${dia.parcial}</td>
        `
    } else if (dia.tp) {
        return `
            <td class="tg-0lax">${dia.fecha}</td>
            <td class="tg-0lax" style="background-color:Ivory;" colspan="2">${dia.tp}</td>
        `
    } else if (dia.feriado) {
        return `
            <td class="tg-0lax">${dia.fecha}</td>
            <td class="tg-0lax" style="background-color:LightGray;" colspan="2">Feriado</td>
        `
    } else {
        return `
            <td class="tg-0lax">${dia.fecha}</td>
            <td class="tg-0lax" style="background-color:AliceBlue;">${dia.teorica}</td>
            <td class="tg-0lax" style="background-color:MintCream;">${dia.practica}</td>
        `
    }
}

function renderizarProximasClases() {
    var hoy = new Date();
    var inicioCuatrimestre = new Date(Date.parse("{{site.data.info.inicio_cuatrimestre}}"));
    
    var semana = Math.floor((hoy - inicioCuatrimestre)/(1000 * 3600 * 24 * 7));
    if (semana < 0) {
        semana = 0;
    } else if (semana > 15) {
        semana = 15;
    }

    var calendario = {{ site.data.calendario | jsonify }};

    var proximasClases = document.getElementById("proximas-clases");

    proximasClases.innerHTML = `
        <table class="tg">
        <thead>
        <tr>
            <td class="tg-0lax">Semana</td>
            <td class="tg-0lax">Día</td>
            <td class="tg-0lax">Fecha</td>
            <td class="tg-0lax">Teórica</td>
            <td class="tg-0lax">Práctica</td>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td class="tg-0lax" rowspan="2">${calendario[semana].semana}</td>
                <td class="tg-0lax">Miércoles</td>
                ${renderizarFila(calendario[semana].miercoles)}
            </tr>
            <tr>
                <td class="tg-0lax">Viernes</td>
                ${renderizarFila(calendario[semana].viernes)}
            </tr>
        </tbody>
        </table>
    `;
}
