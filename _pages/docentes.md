---
layout: single
permalink: /docentes
title: Docentes
---

<!-- TODO: Mejorar página de docentes -->

<div class="row justify-content-center">
  <table class="tg">
  <tbody>
    {% for docente in site.data.docentes %}
    <td class="tg-0lax">
      <figure class="figure text-center d-block">
        <img class="figure-img rounded img-fluid" style="height:180px;width:auto;" title="{{docente.nombre}}"
            src="{{site.baseurl}}{{docente.foto}}" alt="{{docente.nombre}}">
        <div class="docente-social">
          <div>
            <span style="font-weight: bold;">{{docente.nombre}}</span>
          </div>
          <div>
            {% if docente.mail %}
            <a href="mailto:{{docente.mail}}"
               class="btn-social btn-outline social-link"><span class="fa fa-fw fa-envelope"></span></a>
            {% endif %}
            {% if docente.github %}
            <a href="https://github.com/{{docente.github}}"
               class="btn-social btn-outline social-link"><span class="fab fa-fw fa-github"></span></a>
            {% endif %}
          </div>
        </div>
      </figure>
    </td>
    {% endfor %}
  </tbody>
  </table>
</div>