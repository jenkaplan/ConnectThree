/* eslint-env jQuery, es6, es5 */

class Game {
  constructor(currentPlayer) {
    this.currentPlayer = currentPlayer;
    this.c1 = ['#c1r4', '#c1r3', '#c1r2', '#c1r1'];
    this.c2 = ['#c2r4', '#c2r3', '#c2r2', '#c2r1'];
    this.c3 = ['#c3r4', '#c3r3', '#c3r2', '#c3r1'];
    this.c4 = ['#c4r4', '#c4r3', '#c4r2', '#c4r1'];
  }

  addPlayerCol1() {
    if (this.currentPlayer === 'putin') {
      $(this.c1[0]).addClass('putin');
      this.currentPlayer = 'trump';
    } else {
      $(this.c1[0]).addClass('trump');
      this.currentPlayer = 'putin';
    }
    this.c1.shift();
    // checkWinPutin();
    // checkWinTrump();
  }

  addPlayerCol2() {
    if (this.currentPlayer === 'putin') {
      $(this.c2[0]).addClass('putin');
      this.currentPlayer = 'trump';
    } else {
      $(this.c2[0]).addClass('trump');
      this.currentPlayer = 'putin';
    }
    this.c2.shift();
    // checkWinPutin();
    // checkWinTrump();
  }

  addPlayerCol3() {
    if (this.currentPlayer === 'putin') {
      $(this.c3[0]).addClass('putin');
      this.currentPlayer = 'trump';
    } else {
      $(this.c3[0]).addClass('trump');
      this.currentPlayer = 'putin';
    }
    this.c3.shift();
    // checkWinPutin();
    // checkWinTrump();
  }

  addPlayerCol4() {
    if (this.currentPlayer === 'putin') {
      $(this.c4[0]).addClass('putin');
      this.currentPlayer = 'trump';
    } else {
      $(this.c4[0]).addClass('trump');
      this.currentPlayer = 'putin';
    }
    this.c4.shift();
    // checkWinPutin();
    // checkWinTrump();
  }
}

let game = new Game('trump');
// game.addPlayerCol1();
// game.addPlayerCol2();
// game.addPlayerCol3();
// game.addPlayerCol4();

$('.column1').on('click', game.addPlayerCol1);
$('.column2').on('click', game.addPlayerCol2);
$('.column3').on('click', game.addPlayerCol3);
$('.column4').on('click', game.addPlayerCol4);
