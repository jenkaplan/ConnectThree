/* eslint-env jQuery, es6 */

const $cellDivs = $('.cell div');
let $currentPlayer = $('red');
let $gameBoard = $['c1r1', 'c1r2', 'c1r3', 'c1r4', 'c2r1', 'c2r2', 'c2r3', 'c2r4', 'c3r1', 'c3r2', 'c3r3', 'c3r4', 'c4r1', 'c4r2', 'c4r3', 'c4r4'];
let $inProgress = true;
let $cellContents = [];
let $lowestCellCol1 = c1r4;
let $c1 = ['#c1r4', '#c1r3', '#c1r2', '#c1r1'];

// function changeColor() {
//  $('#c1r1').addClass('red');
// }

function addPlayer() {
  // console.log('working');
  // let $c1 = ['c1r1', 'c1r2', 'c1r3', 'c1r4'];
  if ($('#c1r4').hasClass('.red') || $('#c1r4').hasClass('.blue')) {
    for (let i = 3; i < $c1.length; i - 1) {
      if ($currentPlayer === 'red') {
        $('c1[i]').addClass('red');
      } else {
      $('c1[i]').addClass('blue');
      }
    }
  } else {
    if ($currentPlayer === 'red') {
        $('#c1r4').addClass('red');
      } else {
      $('#c1r4').addClass('blue');
      }
  }
}

// let lowestCellCol1 = c1r4;
// lowestCellCol1--
// ${lowestCellCol1--};

// based on Tic Tac Toe created in class
// function addPlayer(index) {
//   if (inProgress === true) {
//     if (cellDivs[index].innerHTML === '') {
//       if (currentPlayer === 'red')
//         if (.column1) {
//           for (let i = 0 < 3)
//         }
//         $('.column').click(function(event){
//           $('red').css("background-color","red")
//         });
//       }
//     }
//   }
// }

// $('#c1r4').on('click', addPlayer);
// $('#c1r1').on('click', changeColor);
$('.column1').on('click', addPlayer);
// $('.column1' > 'c1r1', 'c1r2', 'c1r3', 'c1r4').on('click', addPlayer);
// $('.column2').on('click', addPlayer);
// $('.column3').on('click', addPlayer);
// $('.column4').on('click', addPlayer);
