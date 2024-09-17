const apiUrl = "https://rickandmortyapi.com/api/character";

// Función para obtener los personajes desde el API
async function getFilesFromApi() {
  try {
    console.log('Fetching data...');
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log('Data fetched successfully:', data);
    createCharacterCards(data.results);
  } catch (error) {
    console.error("Hubo un problema con la operación fetch:", error);
  }
}

// Función para crear las tarjetas de personajes
function createCharacterCards(characters) {
  const charactersContainer = document.getElementById("charactersContainer");
  characters.forEach(character => {
    const card = document.createElement("div");
    card.classList.add("character-card");

    const nameElement = document.createElement("h2");
    nameElement.textContent = `Nombre: ${character.name}`;

    const statusElement = document.createElement("p");
    statusElement.textContent = `Estado: ${character.status}`;

    const genderElement = document.createElement("p");
    genderElement.textContent = `Sexo: ${character.gender}`;

    const speciesElement = document.createElement("p");
    speciesElement.textContent = `Especie: ${character.species}`;

    const imageElement = document.createElement("img");
    imageElement.src = character.image;
    imageElement.alt = character.name;

    const detailsButton = document.createElement("button");
    detailsButton.textContent = "Ver detalles";
    detailsButton.onclick = function() {
      const characterId = character.id;
      window.open(`characters.html?id=${characterId}`, "_blank");
    };

    card.appendChild(imageElement);
    card.appendChild(nameElement);
    card.appendChild(statusElement);
    card.appendChild(genderElement);
    card.appendChild(speciesElement);
    card.appendChild(detailsButton);
    charactersContainer.appendChild(card);
  });
}

// Llamada a la función para obtener los personajes al cargar la página
document.addEventListener("DOMContentLoaded", getFilesFromApi);