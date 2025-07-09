const character = document.getElementById("character");
const buildings = document.querySelectorAll(".building");

let pos = { x: 300, y: 300 };
let direction = "up";
const step = 40;

// Direction angle (for rotation)
const directionMap = {
  up: 0,
  right: 90,
  down: 180,
  left: 270
};

// Call this AFTER directionMap is defined
updateCharacter();

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      rotateLeft();
      break;
    case "ArrowRight":
      rotateRight();
      break;
    case "Space":
      moveForward();
      break;
  }
});

function rotateLeft() {
  direction = turnLeft(direction);
  updateCharacter();
}

function rotateRight() {
  direction = turnRight(direction);
  updateCharacter();
}

function moveForward() {
  switch (direction) {
    case "up": pos.y -= step; break;
    case "down": pos.y += step; break;
    case "left": pos.x -= step; break;
    case "right": pos.x += step; break;
  }
  updateCharacter();
  checkBuildingCollision();
}

function updateCharacter() {
  character.style.left = `${pos.x}px`;
  character.style.top = `${pos.y}px`;
  character.style.transform = `rotate(${directionMap[direction]}deg)`;
}

function turnLeft(dir) {
  return { up: "left", left: "down", down: "right", right: "up" }[dir];
}

function turnRight(dir) {
  return { up: "right", right: "down", down: "left", left: "up" }[dir];
}

function checkBuildingCollision() {
  buildings.forEach(building => {
    const rect = building.getBoundingClientRect();
    const charRect = character.getBoundingClientRect();

    const overlap = !(rect.right < charRect.left ||
                      rect.left > charRect.right ||
                      rect.bottom < charRect.top ||
                      rect.top > charRect.bottom);

    if (overlap) {
      alert(`You found a Pokémon at ${building.id}!`);
    }
  });
}
