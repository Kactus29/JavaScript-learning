// Initialisation des variables globales
let board = [];
let rows = 8;
let columns = 8;

let minesCount = 10;
let minesLocation = []; // Emplacements des mines, ex: "2-2", "3-4", "2-1"

let tilesClicked = 0; // Nombre de cases cliquées (objectif: cliquer sur toutes les cases sauf celles contenant des mines)
let gameOver = false;
let flagsPlaced = 0; // Nombre de drapeaux placés

// Fonction appelée lorsque la fenêtre se charge
window.onload = function() {
    startGame();
}

// Fonction pour placer les mines aléatoirement sur le plateau
function setMines() {
    let minesLeft = minesCount;
    while (minesLeft > 0) { 
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        let id = r.toString() + "-" + c.toString();

        if (!minesLocation.includes(id)) {
            minesLocation.push(id);
            minesLeft -= 1;
        }
    }
}

// Fonction pour démarrer le jeu
function startGame() {
    document.getElementById("mines-count").innerText = minesCount - flagsPlaced;
    setMines();

    // Remplir le plateau
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click", clickTile);
            tile.addEventListener("contextmenu", placeFlag); // Clic droit pour placer un drapeau
            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }

    console.log(board);
}

// Fonction pour placer ou retirer un drapeau
function placeFlag(e) {
    e.preventDefault(); // Empêcher le menu contextuel de s'afficher
    if (gameOver || this.classList.contains("tile-clicked")) {
        return;
    }

    let tile = this;
    if (tile.innerText == "") {
        tile.innerText = "🚩";
        flagsPlaced++;
    } else if (tile.innerText == "🚩") {
        tile.innerText = "";
        flagsPlaced--;
    }
    document.getElementById("mines-count").innerText = minesCount - flagsPlaced;
}

// Fonction appelée lorsqu'une case est cliquée
function clickTile() {
    if (gameOver || this.classList.contains("tile-clicked") || this.innerText == "🚩") {
        return;
    }

    let tile = this;
    if (minesLocation.includes(tile.id)) {
        gameOver = true;
        revealMines();
        setTimeout(() => {
            if (confirm("Game Over! You hit a mine. Do you want to play again?")) {
                location.reload();
            }
        }, 100);
        return;
    }

    let coords = tile.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    checkMine(r, c);
}

// Fonction pour révéler toutes les mines lorsque le jeu est terminé
function revealMines() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = board[r][c];
            if (minesLocation.includes(tile.id)) {
                tile.innerText = "💣";
                tile.style.backgroundColor = "red";                
            }
        }
    }
}

// Fonction pour vérifier les mines autour d'une case
function checkMine(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= columns) {
        return;
    }
    if (board[r][c].classList.contains("tile-clicked")) {
        return;
    }

    board[r][c].classList.add("tile-clicked");
    tilesClicked += 1;

    let minesFound = 0;

    // Vérifier les 3 cases du haut
    minesFound += checkTile(r-1, c-1);      // en haut à gauche
    minesFound += checkTile(r-1, c);        // en haut
    minesFound += checkTile(r-1, c+1);      // en haut à droite

    // Vérifier les cases à gauche et à droite
    minesFound += checkTile(r, c-1);        // à gauche
    minesFound += checkTile(r, c+1);        // à droite

    // Vérifier les 3 cases du bas
    minesFound += checkTile(r+1, c-1);      // en bas à gauche
    minesFound += checkTile(r+1, c);        // en bas
    minesFound += checkTile(r+1, c+1);      // en bas à droite

    if (minesFound > 0) {
        board[r][c].innerText = minesFound;
        board[r][c].classList.add("x" + minesFound.toString());
    } else {
        board[r][c].innerText = "";
        
        // Révéler les cases adjacentes
        checkMine(r-1, c-1);    // en haut à gauche
        checkMine(r-1, c);      // en haut
        checkMine(r-1, c+1);    // en haut à droite

        checkMine(r, c-1);      // à gauche
        checkMine(r, c+1);      // à droite

        checkMine(r+1, c-1);    // en bas à gauche
        checkMine(r+1, c);      // en bas
        checkMine(r+1, c+1);    // en bas à droite
    }

    // Vérifier si toutes les cases non minées ont été cliquées
    if (tilesClicked == rows * columns - minesCount) {
        document.getElementById("mines-count").innerText = "Cleared";
        gameOver = true;
        setTimeout(() => {
            if (confirm("Congratulations! You won! Do you want to play again?")) {
                location.reload();
            }
        }, 100);
    }
}

// Fonction pour vérifier si une case contient une mine
function checkTile(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= columns) {
        return 0;
    }
    if (minesLocation.includes(r.toString() + "-" + c.toString())) {
        return 1;
    }
    return 0;
}