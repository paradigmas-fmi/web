---
layout: single
permalink: /calendario
title: Calendario
---

La materia será dictada en 32 clases a lo largo de 16 semanas.
Cada clase estará dividida en una parte teórica y una práctica, de 1:30 hs cada una. Los horarios serán:

* Martes de 18:30 a 21:30
* Miércoles de 18:30 a 21:30

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
    <td class="tg-0lax">Martes</td>
    {% if semana.martes.parcial %}
      <td class="tg-0lax">{{semana.martes.fecha}}</td>
      <td class="tg-0lax" style="background-color:MistyRose;" colspan="2">{{semana.martes.parcial}}</td>
    {% elsif semana.martes.tp %}
      <td class="tg-0lax">{{semana.martes.fecha}}</td>
      <td class="tg-0lax" style="background-color:Ivory;" colspan="2">{{semana.martes.tp}}</td>
    {% elsif semana.martes.noclases %}
      <td class="tg-0lax">{{semana.martes.fecha}}</td>
      <td class="tg-0lax" style="background-color:LightGray;" colspan="2">{{semana.martes.noclases}}</td>
    {% else %}
      <td class="tg-0lax">{{semana.martes.fecha}}</td>
      <td class="tg-0lax" style="background-color:AliceBlue;">{{semana.martes.teorica}}</td>
      <td class="tg-0lax" style="background-color:MintCream;">{{semana.martes.practica}}</td>
    {% endif %}
  </tr>
  <tr>
    <td class="tg-0lax">Miércoles</td>
    {% if semana.miercoles.parcial %}
      <td class="tg-0lax">{{semana.miercoles.fecha}}</td>
      <td class="tg-0lax" style="background-color:MistyRose;" colspan="2">{{semana.miercoles.parcial}}</td>
    {% elsif semana.miercoles.tp %}
      <td class="tg-0lax">{{semana.miercoles.fecha}}</td>
      <td class="tg-0lax" style="background-color:Ivory;" colspan="2">{{semana.miercoles.tp}}</td>
    {% elsif semana.miercoles.noclases %}
      <td class="tg-0lax">{{semana.miercoles.fecha}}</td>
      <td class="tg-0lax" style="background-color:LightGray;" colspan="2">{{semana.miercoles.noclases}}</td>
    {% else %}
      <td class="tg-0lax">{{semana.miercoles.fecha}}</td>
      <td class="tg-0lax" style="background-color:AliceBlue;">{{semana.miercoles.teorica}}</td>
      <td class="tg-0lax" style="background-color:MintCream;">{{semana.miercoles.practica}}</td>
    {% endif %}
  </tr>
  {% endfor %}
</tbody>
</table>
