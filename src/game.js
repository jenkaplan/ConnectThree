/* eslint-env jQuery, es6 */

class Game {
  constructor(totalPlays, putinPlays, trumpPlays, winner, winnerFound) {
    this.totalPlays = 0;
    this.putinPlays = [];
    this.trumpPlays = [];
    this.winner = null;
    this.winnerFound = false;
    // this.currentPlayer = currentPlayer;
  }
}

let currentPlayer = 'putin';
let c1 = ['#c1r4', '#c1r3', '#c1r2', '#c1r1'];
let c2 = ['#c2r4', '#c2r3', '#c2r2', '#c2r1'];
let c3 = ['#c3r4', '#c3r3', '#c3r2', '#c3r1'];
let c4 = ['#c4r4', '#c4r3', '#c4r2', '#c4r1'];

function addPlayerCol1() {
  if (currentPlayer === 'putin') {
    $(c1[0]).addClass('putin');
    currentPlayer = 'trump';
  } else {
    $(c1[0]).addClass('trump');
    currentPlayer = 'putin';
  }
  c1.shift();
  checkWinPutin();
  checkWinTrump();
}

function addPlayerCol2() {
  if (currentPlayer === 'putin') {
    $(c2[0]).addClass('putin');
    currentPlayer = 'trump';
  } else {
    $(c2[0]).addClass('trump');
    currentPlayer = 'putin';
  }
  c2.shift();
  checkWinPutin();
  checkWinTrump();
}

function addPlayerCol3() {
  if (currentPlayer === 'putin') {
    $(c3[0]).addClass('putin');
    currentPlayer = 'trump';
  } else {
    $(c3[0]).addClass('trump');
    currentPlayer = 'putin';
  }
  c3.shift();
  checkWinPutin();
  checkWinTrump();
}

function addPlayerCol4() {
  if (currentPlayer === 'putin') {
    $(c4[0]).addClass('putin');
    currentPlayer = 'trump';
  } else {
    $(c4[0]).addClass('trump');
    currentPlayer = 'putin';
  }
  c4.shift();
  checkWinPutin();
  checkWinTrump();
}


$('.column1').on('click', addPlayerCol1);
$('.column2').on('click', addPlayerCol2);
$('.column3').on('click', addPlayerCol3);
$('.column4').on('click', addPlayerCol4);
