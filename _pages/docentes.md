---
layout: single
permalink: /docentes
title: Docentes
---

<!-- TODO: Mejorar página de docentes -->

<div class="row justify-content-center">
  <table class="tg" style="width: 100%;">
    <tbody>
      <!-- Nombrados -->
      {% for docente in site.data.docentes.nombrados %}
      {% assign cantFila = forloop.index0 | modulo:3 %}
      {% assign cantFilaIndex1 = cantFila | plus: 1 %}
      {% assign anchoEntrada = 100 | divided_by: cantFilaIndex1 %}
      {% if cantFila == 0 %}
      <tr>
      {% endif %} 
        <td class="tg-0lax" style="text-align:center; vertical-align:top; width: '{{anchoEntrada}}%';">
          <figure class="figure d-block" style="display: inline-block; text-align: center;">
            <img class="figure-img rounded img-fluid" style="height:180px;width:auto;" title="{{docente.nombre}}"
                src="{{site.baseurl}}{{docente.foto}}" alt="{{docente.nombre}}">
            <figcaption class="docente-social mt-2">
              <div style="text-align: center; font-weight: bold; color: black;">
                <span>{{docente.nombre}}</span>
              </div>
              <div style="text-align: center;">
                {% if docente.mail %}
                <a href="mailto:{{docente.mail}}"
                  class="btn-social btn-outline social-link"><span class="fa fa-fw fa-envelope"></span></a>
                {% endif %}
                {% if docente.github %}
                <a href="https://github.com/{{docente.github}}"
                  class="btn-social btn-outline social-link"><span class="fab fa-fw fa-github"></span></a>
                {% endif %}
              </div>
            </figcaption>
          </figure>
        </td>
      {% if cantFila == 2 or forloop.last %}
      </tr>
      {% endif %}
      {% endfor %}
      <!-- Colabs -->
      {% for docente in site.data.docentes.colaboradores %}
      {% assign cantFila = forloop.index0 | modulo:3 %}
      {% assign cantFilaIndex1 = cantFila | plus: 1 %}
      {% assign anchoEntrada = 100 | divided_by: cantFilaIndex1 %}
      {% if cantFila == 0 %}
      <tr>
      {% endif %} 
        <td class="tg-0lax" style="text-align:center; vertical-align:top; width: '{{anchoEntrada}}%';">
          <figure class="figure d-block" style="display: inline-block; text-align: center;">
            <img class="figure-img rounded img-fluid" style="height:180px;width:auto;" title="{{docente.nombre}}"
                src="{{site.baseurl}}{{docente.foto}}" alt="{{docente.nombre}}">
            <figcaption class="docente-social mt-2">
              <div style="text-align: center; font-weight: bold; color: black;">
                <span>{{docente.nombre}}</span>
              </div>
              <div style="text-align: center;">
                {% if docente.mail %}
                <a href="mailto:{{docente.mail}}"
                  class="btn-social btn-outline social-link"><span class="fa fa-fw fa-envelope"></span></a>
                {% endif %}
                {% if docente.github %}
                <a href="https://github.com/{{docente.github}}"
                  class="btn-social btn-outline social-link"><span class="fab fa-fw fa-github"></span></a>
                {% endif %}
              </div>
            </figcaption>
          </figure>
        </td>
      {% if cantFila == 2 or forloop.last %}
      </tr>
      {% endif %}
      {% endfor %}
    </tbody>
  </table>
</div>

