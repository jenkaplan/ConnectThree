/* eslint-env jQuery, es6, es5 */

class Game {
  constructor(currentPlayer) {
    this.currentPlayer = currentPlayer;
    this.c1 = ['#c1r4', '#c1r3', '#c1r2', '#c1r1'];
    this.c2 = ['#c2r4', '#c2r3', '#c2r2', '#c2r1'];
    this.c3 = ['#c3r4', '#c3r3', '#c3r2', '#c3r1'];
    this.c4 = ['#c4r4', '#c4r3', '#c4r2', '#c4r1'];
    // This solved a scoping issue that J also had http://stackoverflow.com/questions/41169190/using-class-methods-to-draw-on-html5-canvas-scope-problems-js-es6
    this.addPlayerCol1 = this.addPlayerCol1.bind(this);
    this.addPlayerCol2 = this.addPlayerCol2.bind(this);
    this.addPlayerCol3 = this.addPlayerCol3.bind(this);
    this.addPlayerCol4 = this.addPlayerCol4.bind(this);
  }
// I will only break down addPlayCol1 because the rest of them are exactly the same, just different column numbers
  addPlayerCol1(currentPlayer, c1) {
    // this checks to see if the winner was found from app.js
    if (winFun.winnerFound === false) {
      // if false it checks to see if the player is putin
      if (this.currentPlayer === 'putin') {
        // if so it takes the first item in the array and adds a class of putin
        $(this.c1[0]).addClass('putin');
        // then it switches the player to trump
        this.currentPlayer = 'trump';
      } else {
        // if the current player isn't putin, then it is trump. it adds the class of trump then switches the player to putin
        $(this.c1[0]).addClass('trump');
        this.currentPlayer = 'putin';
      }
      // this removes the first item from the array since it is now filled
      this.c1.shift();
      // this checks to see if putin or trump won
      winFun.checkWinPutin();
      winFun.checkWinTrump();
    }
    else {
      alert('The game is over. Please refresh the page to play again.');
    }
  }

  addPlayerCol2(currentPlayer, c2) {
    if (winFun.winnerFound === false) {
      if (this.currentPlayer === 'putin') {
        $(this.c2[0]).addClass('putin');
        this.currentPlayer = 'trump';
      } else {
        $(this.c2[0]).addClass('trump');
        this.currentPlayer = 'putin';
      }
      this.c2.shift();
      winFun.checkWinPutin();
      winFun.checkWinTrump();
    }
    else {
      alert('The game is over. Please refresh the page to play again.');
    }
  }

  addPlayerCol3(currentPlayer, c3) {
    if (winFun.winnerFound === false) {
      if (this.currentPlayer === 'putin') {
        $(this.c3[0]).addClass('putin');
        this.currentPlayer = 'trump';
      } else {
        $(this.c3[0]).addClass('trump');
        this.currentPlayer = 'putin';
      }
      this.c3.shift();
      winFun.checkWinPutin();
      winFun.checkWinTrump();
    }
    else {
      alert('The game is over. Please refresh the page to play again.');
    }
  }
  addPlayerCol4(currentPlayer, c4) {
    if (winFun.winnerFound === false) {
      if (this.currentPlayer === 'putin') {
        $(this.c4[0]).addClass('putin');
        this.currentPlayer = 'trump';
      } else {
        $(this.c4[0]).addClass('trump');
        this.currentPlayer = 'putin';
      }
      this.c4.shift();
      winFun.checkWinPutin();
      winFun.checkWinTrump();
    }
    else {
      alert('The game is over. Please refresh the page to play again.');
    }
  }
}

let game = new Game('trump');

$('.column1').on('click', game.addPlayerCol1);
$('.column2').on('click', game.addPlayerCol2);
$('.column3').on('click', game.addPlayerCol3);
$('.column4').on('click', game.addPlayerCol4);

