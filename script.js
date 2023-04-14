// Récupération du canvas et du contexte 2D
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Constantes du jeu
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_SPEED = 5;

// Variables du jeu
let playerX = GAME_WIDTH / 2;
let playerY = GAME_HEIGHT / 2;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// Fonction de mise à jour du jeu
function update() {
  // Déplacement du joueur en fonction des touches enfoncées
  if (leftPressed) {
    playerX -= PLAYER_SPEED;
  }
  if (rightPressed) {
    playerX += PLAYER_SPEED;
  }
  if (upPressed) {
    playerY -= PLAYER_SPEED;
  }
  if (downPressed) {
    playerY += PLAYER_SPEED;
  }
}

// Fonction de rendu du jeu
function render() {
  // Effacement du canvas
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // Dessin du joueur
  context.fillStyle = "green";
  context.fillRect(playerX, playerY, 20, 20);
}

// Fonction de démarrage du jeu
function startGame() {
  // Ajout des événements d'écoute pour les touches du clavier
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      leftPressed = true;
    }
    if (event.key === "ArrowRight") {
      rightPressed = true;
    }
    if (event.key === "ArrowUp") {
      upPressed = true;
    }
    if (event.key === "ArrowDown") {
      downPressed = true;
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowLeft") {
      leftPressed = false;
    }
    if (event.key === "ArrowRight") {
      rightPressed = false;
    }
    if (event.key === "ArrowUp") {
      upPressed = false;
    }
    if (event.key === "ArrowDown") {
      downPressed = false;
    }
  });

  // Démarrage de la boucle de jeu
  function main() {
    update();
    render();
    window.requestAnimationFrame(main);
  }

  // Lancement de la boucle de jeu
  main();
}

// Fonction de chargement des ressources
function loadResources() {
  // Code à ajouter pour charger les ressources (images, sons, etc.)
}

// Gestionnaire d'événement pour le bouton "1 joueur"
document.getElementById("button-one-player").addEventListener("click", function () {
  // Masquage de l'écran titre et affichage de l'écran de jeu
  document.getElementById("title-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";

  // Chargement des ressources et démarrage du jeu
  loadResources();
  startGame();
});