---
layout: single
permalink: /calendario
---

Calendario
==========

La materia será dictada en 32 clases a lo largo de 16 semanas.
Cada clase estará dividida en una parte teórica y una práctica, de 1:30 hs cada una. Los horarios serán:

* Miércoles de 18:30 a 21:30
* Viernes de 17:30 a 20:30

## Clases

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
  {% for semana in site.data.calendario %}
  <tr>
    <td class="tg-0lax" rowspan="2">{{semana.semana}}</td>
    <td class="tg-0lax">Miércoles</td>
    {% if semana.miercoles.parcial %}
      <td class="tg-0lax">{{semana.miercoles.fecha}}</td>
      <td class="tg-0lax" style="background-color:MistyRose;" colspan="2">{{semana.miercoles.parcial}}</td>
    {% elsif semana.miercoles.tp %}
      <td class="tg-0lax">{{semana.miercoles.fecha}}</td>
      <td class="tg-0lax" style="background-color:Ivory;" colspan="2">{{semana.miercoles.tp}}</td>
    {% elsif semana.miercoles.feriado %}
      <td class="tg-0lax">{{semana.miercoles.fecha}}</td>
      <td class="tg-0lax" style="background-color:LightGray;" colspan="2">Feriado</td>
    {% else %}
      <td class="tg-0lax">{{semana.miercoles.fecha}}</td>
      <td class="tg-0lax" style="background-color:AliceBlue;">{{semana.miercoles.teorica}}</td>
      <td class="tg-0lax" style="background-color:MintCream;">{{semana.miercoles.practica}}</td>
    {% endif %}
  </tr>
  <tr>
    <td class="tg-0lax">Viernes</td>
    {% if semana.viernes.parcial %}
      <td class="tg-0lax">{{semana.viernes.fecha}}</td>
      <td class="tg-0lax" style="background-color:MistyRose;" colspan="2">{{semana.viernes.parcial}}</td>
    {% elsif semana.viernes.tp %}
      <td class="tg-0lax">{{semana.viernes.fecha}}</td>
      <td class="tg-0lax" style="background-color:Ivory;" colspan="2">{{semana.viernes.tp}}</td>
    {% elsif semana.viernes.feriado %}
      <td class="tg-0lax">{{semana.viernes.fecha}}</td>
      <td class="tg-0lax" style="background-color:LightGray;" colspan="2">Feriado</td>
    {% else %}
      <td class="tg-0lax">{{semana.viernes.fecha}}</td>
      <td class="tg-0lax" style="background-color:AliceBlue;">{{semana.viernes.teorica}}</td>
      <td class="tg-0lax" style="background-color:MintCream;">{{semana.viernes.practica}}</td>
    {% endif %}
  </tr>
  {% endfor %}
</tbody>
</table>
