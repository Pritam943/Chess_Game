const gameBoard = document.querySelector("#gameboard");
const displayPlayers = document.querySelector("#players");
const infoDisplay = document.querySelector("#info");

const width = 8;

const chessPieces = [
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
];

function createBoard() {
  chessPieces.forEach((chessPiece, i) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = chessPiece;
    // square.classList.add("beige");
    square.setAttribute("square_id", i);

    const row = Math.floor((63 - i) / 8) + 1;
    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? "beige" : "brown");
    } else {
      square.classList.add(i % 2 === 0 ? "brown" : "beige");
    }

    if (i >= 48) {
      square.firstChild.firstChild.classList.add("Ele_White");
    }
    gameBoard.append(square);
  });
}

createBoard();
