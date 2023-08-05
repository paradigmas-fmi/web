---
layout: js
---

window.addEventListener("load", ordenarNombres);

// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function ordenarNombres() {
    // Get the element containing the names
    const namesElement = document.getElementById("sorted-names");

    // Extract and shuffle the names
    const namesArray = namesElement.innerText.split(", ");
    shuffleArray(namesArray);

    // Update the element with shuffled names
    namesElement.innerText = namesArray.join(", ");
}
