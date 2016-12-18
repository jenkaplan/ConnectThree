/* eslint-env jQuery, es6, es5 */

class Game {
  constructor(currentPlayer) {
    this.currentPlayer = currentPlayer;
    this.c1 = ['#c1r4', '#c1r3', '#c1r2', '#c1r1'];
    this.c2 = ['#c2r4', '#c2r3', '#c2r2', '#c2r1'];
    this.c3 = ['#c3r4', '#c3r3', '#c3r2', '#c3r1'];
    this.c4 = ['#c4r4', '#c4r3', '#c4r2', '#c4r1'];
    this.addPlayerCol1 = this.addPlayerCol1.bind(this);
    this.addPlayerCol2 = this.addPlayerCol2.bind(this);
    this.addPlayerCol3 = this.addPlayerCol3.bind(this);
    this.addPlayerCol4 = this.addPlayerCol4.bind(this);
  }

  addPlayerCol1(currentPlayer, c1) {
    if (this.currentPlayer === 'putin') {
      $(this.c1[0]).addClass('putin');
      this.currentPlayer = 'trump';
    } else {
      $(this.c1[0]).addClass('trump');
      this.currentPlayer = 'putin';
    }
    this.c1.shift();
    winFun.checkWinPutin();
    winFun.checkWinTrump();
  }

  addPlayerCol2(currentPlayer, c2) {
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

  addPlayerCol3(currentPlayer, c3) {
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

  addPlayerCol4(currentPlayer, c4) {
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
