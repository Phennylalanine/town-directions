document.addEventListener("DOMContentLoaded", () => {
  const map = document.getElementById("map");
  const character = document.getElementById("character");
  let gridX = 0;
  let gridY = 0;

  // Create the 10x10 grid and place buildings
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.dataset.x = x;
      tile.dataset.y = y;
      map.appendChild(tile);
    }
  }

  // Now that tiles exist, place buildings
  document.querySelector('.tile[data-x="2"][data-y="3"]').classList.add("hospital");
  document.querySelector('.tile[data-x="5"][data-y="6"]').classList.add("school");
  document.querySelector('.tile[data-x="7"][data-y="2"]').classList.add("park");

  function updateCharacterPosition() {
  character.style.left = `${gridX * 96}px`;
  character.style.top = `${gridY * 96}px`;
}

  document.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        if (gridY > 0) gridY--;
        break;
      case "ArrowDown":
        if (gridY < 9) gridY++;
        break;
      case "ArrowLeft":
        if (gridX > 0) gridX--;
        break;
      case "ArrowRight":
        if (gridX < 9) gridX++;
        break;
    }
    updateCharacterPosition();
    checkForPokemon();
  });

  function checkForPokemon() {
    const tile = document.querySelector(`.tile[data-x="${gridX}"][data-y="${gridY}"]`);
    if (tile.classList.contains("hospital")) {
      alert("You found a Pokémon at the hospital!");
    } else if (tile.classList.contains("school")) {
      alert("You found a Pokémon at the school!");
    } else if (tile.classList.contains("park")) {
      alert("You found a Pokémon at the park!");
    }
  }

  updateCharacterPosition();
});
