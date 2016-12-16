/* eslint-env jQuery, es5, es6 */

function checkWin() {
  if  ($('#c1r4').hasClass('red') && $('#c1r3').hasClass('red') && $('#c1r2').hasClass('red'))
    // || ($('#c2r4').hasClass('red') && $('#c2r3').hasClass('red') && $('#c2r2').hasClass('red')){
    alert('winner!');

  }
};
