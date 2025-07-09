let levels = [
  {
    pokemon: ["chansey", "slowpoke", "gengar"],
    positions: {
      "430,230": "chansey.png",
      "630,230": "slowpoke.png",
      "730,230": "gengar.png"
    }
  },
  {
    pokemon: ["blastoise", "roserade", "charizard"],
    positions: {
      "130,80": "roserade.png",
      "430,80": "charizard.png",
      "730,80": "blastoise.png"
    }
  }
];

let currentLevel = 0;
let found = [];

const character = document.getElementById('character');
const pokemonImg = document.getElementById('pokemon');
const targetList = document.getElementById('target-list');
const levelMessage = document.getElementById('level-message');

let pos = { x: 430, y: 420 };
let direction = 0;

function loadLevel(index) {
  found = [];
  targetList.innerHTML = '';
  const pokes = levels[index].pokemon;
  pokes.forEach(name => {
    const li = document.createElement('li');
    li.innerText = name;
    li.id = `poke-${name}`;
    targetList.appendChild(li);
  });
  updateCharacter();
  pokemonImg.style.display = "none";
}

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
  const front = getNextPos();
  const key = `${front.x},${front.y}`;
  const pokemonPath = levels[currentLevel].positions[key];

  if (pokemonPath) {
    const name = pokemonPath.replace(".png", "");
    if (!found.includes(name)) {
      found.push(name);
      document.getElementById(`poke-${name}`).classList.add('found');
      pokemonImg.src = `img/${pokemonPath}`;
      pokemonImg.style.left = `${front.x}px`;
      pokemonImg.style.top = `${front.y}px`;
      pokemonImg.style.display = "block";

      if (found.length === 3) {
        setTimeout(() => {
          levelMessage.style.display = "block";
          setTimeout(() => {
            levelMessage.style.display = "none";
            currentLevel++;
            if (currentLevel < levels.length) {
              loadLevel(currentLevel);
            } else {
              alert("All levels complete!");
            }
          }, 1500);
        }, 500);
      }
    }
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
  }
  if (e.code === 'ArrowRight') {
    direction = (direction + 90) % 360;
  }
  updateCharacter();
});

loadLevel(currentLevel);
