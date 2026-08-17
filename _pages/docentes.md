---
layout: single
permalink: /docentes
title: Docentes
---

{% comment %} Docentes por fila. Tiene que coincidir con el perRow de shuffleDocentes.js {% endcomment %}
{% assign porFila = 5 %}
{% assign ultimaCol = porFila | minus: 1 %}
{% assign anchoEntrada = 100 | divided_by: porFila %}

<style>
  /* Esta página no usa el sidebar ni la tabla de contenidos, así que recuperamos
     el gutter que el tema reserva a la derecha (200px a partir de 64em). Sin esto
     no entran 5 fotos de 180px por fila y el tema las recorta con su
     img { max-width: 100% }. */
  .page {
    float: none;
    width: 100%;
    padding-right: 0;
  }

  /* 180px como siempre. Si la ventana es angosta el max-width las achica, pero
     el aspect-ratio las mantiene cuadradas en vez de recortarlas a lo ancho.
     Ojo: tiene que ser un ancho fijo y no 100%, porque el figure es inline-block
     y con 100% las fotos de origen chico (matic.png es de 100x100) no escalan. */
  .docente-foto {
    width: 180px;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  /* El tema pone table { display: block } para el scroll horizontal en mobile,
     pero eso hace que la tabla se encoja al contenido y quede pegada a la
     izquierda. Con display: table + table-layout: fixed las 5 columnas ocupan
     20% cada una y la grilla queda repartida pareja. */
  .tg {
    display: table;
    table-layout: fixed;
    width: 100%;
  }

  #docentes-nombrados td,
  #docentes-colaboradores td,
  #docentes-ex td {
    padding-left: 0.25em;
    padding-right: 0.25em;
  }
</style>

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
            <img class="figure-img rounded img-fluid docente-foto" title="{{docente.nombre}}"
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

<!-- Colabs. Tabla aparte de la de nombrados: con table-layout: fixed las columnas
     las define la primera fila, y la de nombrados usa anchos distintos para centrar. -->
<div class="row justify-content-center">
  <table class="tg" style="width: 100%;">
    <tbody id="docentes-colaboradores">
      {% for docente in site.data.docentes.colaboradores %}
      {% assign cantFila = forloop.index0 | modulo: porFila %}
      {% if cantFila == 0 %}
      <tr>
      {% endif %} 
        <td class="tg-0lax" style="text-align:center; vertical-align:top; width: {{anchoEntrada}}%;">
          <figure class="figure d-block" style="display: inline-block; text-align: center;">
            <img class="figure-img rounded img-fluid docente-foto" title="{{docente.nombre}}"
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
            <img class="figure-img rounded img-fluid docente-foto" title="{{docente.nombre}}"
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
