/* eslint-env jQuery, es5, es6 */

function checkWin() {
  if  (($('#c1r4').hasClass('red') && $('#c1r3').hasClass('red') && $('#c1r2').hasClass('red')) ||
        ($('#c2r4').hasClass('red') && $('#c2r3').hasClass('red') && $('#c2r2').hasClass('red')) ||
        ($('#c3r4').hasClass('red') && $('#c3r3').hasClass('red') && $('#c3r2').hasClass('red')) ||
        ($('#c4r4').hasClass('red') && $('#c4r3').hasClass('red') && $('#c4r2').hasClass('red')) ||
        ($('#c4r2').hasClass('red') && $('#c4r3').hasClass('red') && $('#c4r4').hasClass('red')) ||
        ($('#c3r2').hasClass('red') && $('#c3r3').hasClass('red') && $('#c3r4').hasClass('red')) ||
        ($('#c2r2').hasClass('red') && $('#c2r3').hasClass('red') && $('#c2r4').hasClass('red')) ||
        ($('#c1r2').hasClass('red') && $('#c1r3').hasClass('red') && $('#c1r4').hasClass('red')) ||
        ($('#c1r1').hasClass('red') && $('#c2r1').hasClass('red') && $('#c3r1').hasClass('red')) ||
        ($('#c1r2').hasClass('red') && $('#c2r2').hasClass('red') && $('#c3r2').hasClass('red')) ||
        ($('#c1r3').hasClass('red') && $('#c2r3').hasClass('red') && $('#c3r3').hasClass('red')) ||
        ($('#c1r4').hasClass('red') && $('#c2r4').hasClass('red') && $('#c3r4').hasClass('red')) ||
        ($('#c2r1').hasClass('red') && $('#c3r1').hasClass('red') && $('#c4r1').hasClass('red')) ||
        ($('#c2r2').hasClass('red') && $('#c3r2').hasClass('red') && $('#c4r2').hasClass('red')) ||
        ($('#c2r3').hasClass('red') && $('#c3r3').hasClass('red') && $('#c4r3').hasClass('red')) ||
        ($('#c2r4').hasClass('red') && $('#c3r4').hasClass('red') && $('#c4r4').hasClass('red')) ||
        ($('#c1r3').hasClass('red') && $('#c2r2').hasClass('red') && $('#c3r1').hasClass('red')) ||
        ($('#c1r4').hasClass('red') && $('#c2r3').hasClass('red') && $('#c4r2').hasClass('red')) ||
        ($('#c4r1').hasClass('red') && $('#c2r3').hasClass('red') && $('#c4r2').hasClass('red')) ||
        ($('#c2r4').hasClass('red') && $('#c3r3').hasClass('red') && $('#c2r2').hasClass('red')) ||
        ($('#c1r4').hasClass('red') && $('#c2r3').hasClass('red') && $('#c4r2').hasClass('red')) ||
        ($('#c2r1').hasClass('red') && $('#c3r2').hasClass('red') && $('#c4r1').hasClass('red')) ||
        ($('#c1r2').hasClass('red') && $('#c2r3').hasClass('red') && $('#c3r4').hasClass('red')) ||
        ($('#c1r1').hasClass('red') && $('#c2r2').hasClass('red') && $('#c3r3').hasClass('red')) ||
        ($('#c4r4').hasClass('red') && $('#c2r2').hasClass('red') && $('#c3r3').hasClass('red')) ||
        ($('#c1r4').hasClass('blue') && $('#c1r3').hasClass('blue') && $('#c1r2').hasClass('blue')) ||
        ($('#c2r4').hasClass('blue') && $('#c2r3').hasClass('blue') && $('#c2r2').hasClass('blue')) ||
        ($('#c3r4').hasClass('blue') && $('#c3r3').hasClass('blue') && $('#c3r2').hasClass('blue')) ||
        ($('#c4r4').hasClass('blue') && $('#c4r3').hasClass('blue') && $('#c4r2').hasClass('blue')) ||
        ($('#c4r2').hasClass('blue') && $('#c4r3').hasClass('blue') && $('#c4r4').hasClass('blue')) ||
        ($('#c3r2').hasClass('blue') && $('#c3r3').hasClass('blue') && $('#c3r4').hasClass('blue')) ||
        ($('#c2r2').hasClass('blue') && $('#c2r3').hasClass('blue') && $('#c2r4').hasClass('blue')) ||
        ($('#c1r2').hasClass('blue') && $('#c1r3').hasClass('blue') && $('#c1r4').hasClass('blue')) ||
        ($('#c1r1').hasClass('blue') && $('#c2r1').hasClass('blue') && $('#c3r1').hasClass('blue')) ||
        ($('#c1r2').hasClass('blue') && $('#c2r2').hasClass('blue') && $('#c3r2').hasClass('blue')) ||
        ($('#c1r3').hasClass('blue') && $('#c2r3').hasClass('blue') && $('#c3r3').hasClass('blue')) ||
        ($('#c1r4').hasClass('blue') && $('#c2r4').hasClass('blue') && $('#c3r4').hasClass('blue')) ||
        ($('#c2r1').hasClass('blue') && $('#c3r1').hasClass('blue') && $('#c4r1').hasClass('blue')) ||
        ($('#c2r2').hasClass('blue') && $('#c3r2').hasClass('blue') && $('#c4r2').hasClass('blue')) ||
        ($('#c2r3').hasClass('blue') && $('#c3r3').hasClass('blue') && $('#c4r3').hasClass('blue')) ||
        ($('#c2r4').hasClass('blue') && $('#c3r4').hasClass('blue') && $('#c4r4').hasClass('blue')) ||
        ($('#c1r3').hasClass('blue') && $('#c2r2').hasClass('blue') && $('#c3r1').hasClass('blue')) ||
        ($('#c1r4').hasClass('blue') && $('#c2r3').hasClass('blue') && $('#c4r2').hasClass('blue')) ||
        ($('#c4r1').hasClass('blue') && $('#c2r3').hasClass('blue') && $('#c4r2').hasClass('blue')) ||
        ($('#c2r4').hasClass('blue') && $('#c3r3').hasClass('blue') && $('#c2r2').hasClass('blue')) ||
        ($('#c1r4').hasClass('blue') && $('#c2r3').hasClass('blue') && $('#c4r2').hasClass('blue')) ||
        ($('#c2r1').hasClass('blue') && $('#c3r2').hasClass('blue') && $('#c4r1').hasClass('blue')) ||
        ($('#c1r2').hasClass('blue') && $('#c2r3').hasClass('blue') && $('#c3r4').hasClass('blue')) ||
        ($('#c1r1').hasClass('blue') && $('#c2r2').hasClass('blue') && $('#c3r3').hasClass('blue')) ||
        ($('#c4r4').hasClass('blue') && $('#c2r2').hasClass('blue') && $('#c3r3').hasClass('blue'))){
      alert('winner!');
      this.winnerFound = true;
  }
}
