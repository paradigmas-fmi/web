---
layout: single
permalink: /docentes
---

# Docentes

<!-- TODO: Mejorar página de docentes -->

<div class="row justify-content-center">
  <table class="tg">
  <tbody>
    {% for docente in site.data.docentes %}
    <td class="tg-0lax">
      <figure class="figure text-center d-block">
        <img class="figure-img rounded img-fluid" style="height:180px;width:auto;" title="{{docente.nombre}}"
            src="{{docente.foto}}" alt="{{docente.nombre}}">
        <figcaption>
          {{docente.nombre}}
        </figcaption>
      </figure>
    </td>
    {% endfor %}
  </tbody>
  </table>
</div>