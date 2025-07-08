const character = document.getElementById('character');
const pokemon = document.getElementById('pokemon');

let pos = { x: 430, y: 420 }; // Starting at supermarket
let direction = 0; // 0 = up, 90 = right, 180 = down, 270 = left

const buildingMap = {
  "430,80": "charizard.png",       // Zoo
  "730,80": "blastoise.png",       // Fire Station
  "130,230": "roserade.png",       // Flower Shop
  "430,230": "chansey.png",        // Hospital
  "730,230": "gengar.png",         // Bus Stop
  "130,420": "",                   // Empty
  "430,420": "pikachu.png",        // Supermarket
  "730,420": "machamp.png",        // Gym
};

function updateCharacter() {
  character.style.left = `${pos.x}px`;
  character.style.top = `${pos.y}px`;
  character.style.transform = `rotate(${direction}deg)`;
}

function getNextPos() {
  let dx = 0, dy = 0;
  if (direction === 0) dy = -75;
  if (direction === 180) dy = 75;
  if (direction === 90) dx = 75;
  if (direction === 270) dx = -75;
  return { x: pos.x + dx, y: pos.y + dy };
}

function checkBuilding() {
  const frontPos = getNextPos();
  const key = `${frontPos.x},${frontPos.y}`;
  if (buildingMap[key]) {
    pokemon.src = `img/${buildingMap[key]}`;
    pokemon.style.left = `${frontPos.x}px`;
    pokemon.style.top = `${frontPos.y}px`;
    pokemon.style.display = "block";
  } else {
    pokemon.style.display = "none";
  }
}

document.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    const next = getNextPos();
    pos = next;
    checkBuilding();
  }
  if (e.code === 'ArrowLeft') {
    direction = (direction + 270) % 360;
    updateCharacter();
  }
  if (e.code === 'ArrowRight') {
    direction = (direction + 90) % 360;
    updateCharacter();
  }
  updateCharacter();
});

updateCharacter();
