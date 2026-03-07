document.addEventListener("DOMContentLoaded", function () {
  function shuffleDocentes(tbodyId, perRow, centerIfSingleRow) {
    var tbody = document.getElementById(tbodyId);
    if (!tbody) return;

    // Tomamos todos los TD (cada docente es una celda)
    var tds = Array.prototype.slice.call(
      tbody.querySelectorAll("td.tg-0lax")
    );
    if (tds.length <= 1) return;

    // Barajamos el array de TDs (Fisher–Yates)
    for (var i = tds.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = tds[i];
      tds[i] = tds[j];
      tds[j] = tmp;
    }

    // Limpiamos las filas actuales
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    // Si queremos centrar en una sola fila (caso nombrados)
    if (centerIfSingleRow && tds.length <= perRow) {
      var trCenter = document.createElement("tr");
      tbody.appendChild(trCenter);

      var offset = Math.floor((perRow - tds.length) / 2); // para 2 en 4 => 1
      var idx = 0;

      for (var col = 0; col < perRow; col++) {
        if (col >= offset && idx < tds.length) {
          // Usamos un TD existente y forzamos ancho uniforme
          var td = tds[idx++];
          td.style.width = (100 / perRow) + "%";
          trCenter.appendChild(td);
        } else {
          // Celda vacía para centrar
          var emptyTd = document.createElement("td");
          emptyTd.className = "tg-0lax";
          emptyTd.style.textAlign = "center";
          emptyTd.style.verticalAlign = "top";
          emptyTd.style.width = (100 / perRow) + "%";
          trCenter.appendChild(emptyTd);
        }
      }
      return;
    }

    // Volvemos a armar filas de a `perRow` docentes por fila
    for (var k = 0; k < tds.length; k++) {
      if (k % perRow === 0) {
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
      }
      var tdItem = tds[k];
      tdItem.style.width = (100 / perRow) + "%";
      tbody.lastChild.appendChild(tdItem);
    }
  }

  // 4 columnas por fila. Nombrados (2 personas) centrados.
  shuffleDocentes("docentes-nombrados", 4, true);
  shuffleDocentes("docentes-colaboradores", 4, false);
});


