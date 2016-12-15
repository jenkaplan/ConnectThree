/* eslint-env jQuery, es6 */

let currentPlayer = 'red';
let c1 = ['#c1r4', '#c1r3', '#c1r2', '#c1r1'];
let c2 = ['#c2r4', '#c2r3', '#c2r2', '#c2r1'];
let c3 = ['#c3r4', '#c3r3', '#c3r2', '#c3r1'];
let c4 = ['#c4r4', '#c4r3', '#c4r2', '#c4r1'];

function addPlayerCol1() {
  if (currentPlayer === 'red') {
    $(c1[0]).addClass('red');
    currentPlayer = 'blue';
  } else {
    $(c1[0]).addClass('blue');
    currentPlayer = 'red';
  }
  c1.shift();
}

function addPlayerCol2() {
  if (currentPlayer === 'red') {
    $(c2[0]).addClass('red');
    currentPlayer = 'blue';
  } else {
    $(c2[0]).addClass('blue');
    currentPlayer = 'red';
  }
  c2.shift();
}

function addPlayerCol3() {
  if (currentPlayer === 'red') {
    $(c3[0]).addClass('red');
    currentPlayer = 'blue';
  } else {
    $(c3[0]).addClass('blue');
    currentPlayer = 'red';
  }
  c3.shift();
}

function addPlayerCol4() {
  if (currentPlayer === 'red') {
    $(c4[0]).addClass('red');
    currentPlayer = 'blue';
  } else {
    $(c4[0]).addClass('blue');
    currentPlayer = 'red';
  }
  c4.shift();
}

$('.column1').on('click', addPlayerCol1);
$('.column2').on('click', addPlayerCol2);
$('.column3').on('click', addPlayerCol3);
$('.column4').on('click', addPlayerCol4);
