---
layout: single
permalink: /docentes
title: Docentes
---

{% comment %} Docentes por fila. Tiene que coincidir con el perRow de shuffleDocentes.js {% endcomment %}
{% assign porFila = 5 %}
{% assign ultimaCol = porFila | minus: 1 %}
{% assign anchoEntrada = 100 | divided_by: porFila %}

<div class="row justify-content-center">
  <table class="tg" style="width: 100%;">
    <!-- Nombrados -->
    <tbody id="docentes-nombrados">
      {% for docente in site.data.docentes.nombrados %}
      {% assign cantFila = forloop.index0 | modulo: porFila %}
      {% if cantFila == 0 %}
      <tr>
      {% endif %} 
        <td class="tg-0lax" style="text-align:center; vertical-align:top; width: {{anchoEntrada}}%;">
          <figure class="figure d-block" style="display: inline-block; text-align: center;">
            <img class="figure-img rounded img-fluid" style="height:180px;width:180px;object-fit:cover;" title="{{docente.nombre}}"
                src="{{ docente.foto | relative_url }}" alt="{{docente.nombre}}">
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
      {% if cantFila == ultimaCol or forloop.last %}
      </tr>
      {% endif %}
      {% endfor %}
    </tbody>
    <!-- Colabs -->
    <tbody id="docentes-colaboradores">
      {% for docente in site.data.docentes.colaboradores %}
      {% assign cantFila = forloop.index0 | modulo: porFila %}
      {% if cantFila == 0 %}
      <tr>
      {% endif %} 
        <td class="tg-0lax" style="text-align:center; vertical-align:top; width: {{anchoEntrada}}%;">
          <figure class="figure d-block" style="display: inline-block; text-align: center;">
            <img class="figure-img rounded img-fluid" style="height:180px;width:180px;object-fit:cover;" title="{{docente.nombre}}"
                src="{{ docente.foto | relative_url }}" alt="{{docente.nombre}}">
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
      {% if cantFila == ultimaCol or forloop.last %}
      </tr>
      {% endif %}
      {% endfor %}
    </tbody>
  </table>
</div>

<!-- Ex docentes -->
<h2 id="ex-docentes">Ex docentes</h2>
<p>Gracias a quienes pasaron por la cátedra y ayudaron a que sea lo que es hoy.</p>

<div class="row justify-content-center">
  <table class="tg" style="width: 100%;">
    <tbody id="docentes-ex">
      {% for docente in site.data.docentes.exdocentes %}
      {% assign cantFila = forloop.index0 | modulo: porFila %}
      {% if cantFila == 0 %}
      <tr>
      {% endif %} 
        <td class="tg-0lax" style="text-align:center; vertical-align:top; width: {{anchoEntrada}}%;">
          <figure class="figure d-block" style="display: inline-block; text-align: center;">
            <img class="figure-img rounded img-fluid" style="height:180px;width:180px;object-fit:cover;" title="{{docente.nombre}}"
                src="{{ docente.foto | relative_url }}" alt="{{docente.nombre}}">
            <figcaption class="docente-social mt-2">
              <div style="text-align: center; font-weight: bold; color: black;">
                <span>{{docente.nombre}}</span>
              </div>
            </figcaption>
          </figure>
        </td>
      {% if cantFila == ultimaCol or forloop.last %}
      </tr>
      {% endif %}
      {% endfor %}
    </tbody>
  </table>
</div>

<!-- El ?v= cambia en cada build para que el navegador no sirva una versión cacheada. -->
<script src="{{ '/assets/js/shuffleDocentes.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
