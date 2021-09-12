"use strict";

var playArea = document.querySelector('#play-area');
var title = document.getElementById('title');
var button = document.querySelector('#clear-btn').addEventListener('click', function () {
  document.location.reload();
  return false;
});

var player = function player(playerName, marker, turn) {
  return {
    playerName: playerName,
    marker: marker,
    turn: turn
  };
};

var playerOne = player("Player 1", "X", true);
var playerTwo = player("Player 2", "O", false);

var gameBoard = function () {
  var turnsTaken = 0;
  var winnerDeclared = false;
  var boardPositions = [];

  function renderBoard() {
    for (var i = 0; i < 9; i++) {
      var newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'square');
      playArea.appendChild(newDiv);
      boardPositions.push(newDiv);
    }
  }

  ;
  renderBoard();

  function changePlayer() {
    if (playerOne.turn) {
      playerOne.turn = false;
      playerTwo.turn = true;
      return playerOne.marker;
    } else if (playerTwo.turn) {
      playerTwo.turn = false;
      playerOne.turn = true;
      return playerTwo.marker;
    }

    ;
  }

  ;
  var squares = document.querySelectorAll('.square');
  squares.forEach(function (square) {
    square.addEventListener('click', function () {
      turnsTaken++;

      if (square.textContent == "" && title.childNodes.length < 2) {
        square.textContent = changePlayer();

        if ( //horiztonal wins
        boardPositions[0].textContent == "X" && boardPositions[1].textContent == "X" && boardPositions[2].textContent == "X" || boardPositions[3].textContent == "X" && boardPositions[4].textContent == "X" && boardPositions[5].textContent == "X" || boardPositions[6].textContent == "X" && boardPositions[7].textContent == "X" && boardPositions[8].textContent == "X" || //vertical wins
        boardPositions[0].textContent == "X" && boardPositions[3].textContent == "X" && boardPositions[6].textContent == "X" || boardPositions[1].textContent == "X" && boardPositions[4].textContent == "X" && boardPositions[7].textContent == "X" || boardPositions[2].textContent == "X" && boardPositions[5].textContent == "X" && boardPositions[8].textContent == "X" || //diagonal wins
        boardPositions[0].textContent == "X" && boardPositions[4].textContent == "X" && boardPositions[8].textContent == "X" || boardPositions[2].textContent == "X" && boardPositions[4].textContent == "X" && boardPositions[6].textContent == "X") {
          var displayWinner = document.createElement('h4');
          displayWinner.textContent = "X wins!";
          title.appendChild(displayWinner);
          winnerDeclared = true;
        } else if ( //horiztonal wins
        boardPositions[0].textContent == "O" && boardPositions[1].textContent == "O" && boardPositions[2].textContent == "O" || boardPositions[3].textContent == "O" && boardPositions[4].textContent == "O" && boardPositions[5].textContent == "O" || boardPositions[6].textContent == "O" && boardPositions[7].textContent == "O" && boardPositions[8].textContent == "O" || //vertical wins
        boardPositions[0].textContent == "O" && boardPositions[3].textContent == "O" && boardPositions[6].textContent == "O" || boardPositions[1].textContent == "O" && boardPositions[4].textContent == "O" && boardPositions[7].textContent == "O" || boardPositions[2].textContent == "O" && boardPositions[5].textContent == "O" && boardPositions[8].textContent == "O" || //diagonal wins
        boardPositions[0].textContent == "O" && boardPositions[4].textContent == "O" && boardPositions[8].textContent == "O" || boardPositions[2].textContent == "O" && boardPositions[4].textContent == "O" && boardPositions[6].textContent == "O") {
          var _displayWinner = document.createElement('h4');

          _displayWinner.textContent = "O wins!";
          title.appendChild(_displayWinner);
          winnerDeclared = true;
        } else if (winnerDeclared == false && turnsTaken == 9) {
          var _displayWinner2 = document.createElement('h4');

          _displayWinner2.textContent = "Tie!";
          title.appendChild(_displayWinner2);
        }
      }
    });
  });
}();