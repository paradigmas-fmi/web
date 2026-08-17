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

    // Si queremos centrar en una sola fila (caso nombrados).
    // Las columnas que sobran se reparten en dos celdas vacías, una de cada lado,
    // de media columna de ancho cada una si el sobrante es impar. Así el bloque
    // queda centrado de verdad y no corrido media columna.
    if (centerIfSingleRow && tds.length <= perRow) {
      var trCenter = document.createElement("tr");
      tbody.appendChild(trCenter);

      var anchoColumna = 100 / perRow;
      var sobran = perRow - tds.length;
      var anchoLado = (sobran / 2) * anchoColumna;

      if (sobran > 0) trCenter.appendChild(celdaVacia(perRow, anchoLado));
      for (var idx = 0; idx < tds.length; idx++) {
        tds[idx].style.width = anchoColumna + "%";
        trCenter.appendChild(tds[idx]);
      }
      if (sobran > 0) trCenter.appendChild(celdaVacia(perRow, anchoLado));
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

    // Completamos la última fila con celdas vacías para que las columnas queden
    // alineadas y la línea divisoria de abajo no quede cortada.
    completarFila(tbody.lastChild, perRow);
  }

  function completarFila(tr, perRow) {
    if (!tr) return;
    while (tr.children.length % perRow !== 0) {
      tr.appendChild(celdaVacia(perRow));
    }
  }

  function celdaVacia(perRow, ancho) {
    var td = document.createElement("td");
    td.className = "tg-0lax";
    td.style.textAlign = "center";
    td.style.verticalAlign = "top";
    td.style.width = (ancho === undefined ? 100 / perRow : ancho) + "%";
    return td;
  }

  // 5 columnas por fila (tiene que coincidir con el porFila de docentes.md).
  // Nombrados (2 personas) centrados.
  var POR_FILA = 5;
  shuffleDocentes("docentes-nombrados", POR_FILA, true);
  shuffleDocentes("docentes-colaboradores", POR_FILA, false);
  shuffleDocentes("docentes-ex", POR_FILA, false);
});


