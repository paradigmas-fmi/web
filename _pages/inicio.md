---
layout: single
permalink: /
title: Inicio
---

Este es el sitio de la materia **Algoritmos y Programación III**, curso **<span id="sorted-names">Cano, Raik, Brasburg</span>**, de la Facultad de Ingeniería de la Universidad de Buenos Aires (FIUBA).

## Links Principales

<!-- TODO -->

## Información sobre próximas clases

<!-- TODO -->

<script>
  // Function to shuffle an array randomly
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Get the element containing the names
  const namesElement = document.getElementById("sorted-names");

  // Extract and shuffle the names
  const namesArray = namesElement.innerText.split(", ");
  shuffleArray(namesArray);

  // Update the element with shuffled names
  namesElement.innerText = namesArray.join(", ");
</script>
