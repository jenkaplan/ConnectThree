/* eslint-env jQuery, es5, es6 */

// this win logic is based on the win logic from the Tic Tac Toe second pass
class Win {
  constructor() {
    // This solved a scoping issue that J also had http://stackoverflow.com/questions/41169190/using-class-methods-to-draw-on-html5-canvas-scope-problems-js-es6
    this.checkWinPutin = this.checkWinPutin.bind(this);
    this.checkWinTrump = this.checkWinTrump.bind(this);
  }

  checkWinPutin() {
    if  (($('#c1r4').hasClass('putin') && $('#c1r3').hasClass('putin') && $('#c1r2').hasClass('putin')) ||
          ($('#c2r4').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c2r2').hasClass('putin')) ||
          ($('#c3r4').hasClass('putin') && $('#c3r3').hasClass('putin') && $('#c3r2').hasClass('putin')) ||
          ($('#c4r4').hasClass('putin') && $('#c4r3').hasClass('putin') && $('#c4r2').hasClass('putin')) ||
          ($('#c4r2').hasClass('putin') && $('#c4r3').hasClass('putin') && $('#c4r4').hasClass('putin')) ||
          ($('#c3r2').hasClass('putin') && $('#c3r3').hasClass('putin') && $('#c3r4').hasClass('putin')) ||
          ($('#c2r2').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c2r4').hasClass('putin')) ||
          ($('#c1r2').hasClass('putin') && $('#c1r3').hasClass('putin') && $('#c1r4').hasClass('putin')) ||
          ($('#c1r1').hasClass('putin') && $('#c2r1').hasClass('putin') && $('#c3r1').hasClass('putin')) ||
          ($('#c1r2').hasClass('putin') && $('#c2r2').hasClass('putin') && $('#c3r2').hasClass('putin')) ||
          ($('#c1r3').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c3r3').hasClass('putin')) ||
          ($('#c1r4').hasClass('putin') && $('#c2r4').hasClass('putin') && $('#c3r4').hasClass('putin')) ||
          ($('#c2r1').hasClass('putin') && $('#c3r1').hasClass('putin') && $('#c4r1').hasClass('putin')) ||
          ($('#c2r2').hasClass('putin') && $('#c3r2').hasClass('putin') && $('#c4r2').hasClass('putin')) ||
          ($('#c2r3').hasClass('putin') && $('#c3r3').hasClass('putin') && $('#c4r3').hasClass('putin')) ||
          ($('#c2r4').hasClass('putin') && $('#c3r4').hasClass('putin') && $('#c4r4').hasClass('putin')) ||
          ($('#c1r3').hasClass('putin') && $('#c2r2').hasClass('putin') && $('#c3r1').hasClass('putin')) ||
          ($('#c1r4').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c3r2').hasClass('putin')) ||
          ($('#c4r1').hasClass('putin') && $('#c3r2').hasClass('putin') && $('#c2r1').hasClass('putin')) ||
          ($('#c4r4').hasClass('putin') && $('#c3r3').hasClass('putin') && $('#c2r2').hasClass('putin')) ||
          ($('#c1r4').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c3r2').hasClass('putin')) ||
          ($('#c2r1').hasClass('putin') && $('#c3r2').hasClass('putin') && $('#c4r1').hasClass('putin')) ||
          ($('#c1r2').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c3r4').hasClass('putin')) ||
          ($('#c1r1').hasClass('putin') && $('#c2r2').hasClass('putin') && $('#c3r3').hasClass('putin')) ||
          ($('#c1r4').hasClass('putin') && $('#c2r3').hasClass('putin') && $('#c3r2').hasClass('putin')) ||
          ($('#c4r3').hasClass('putin') && $('#c3r2').hasClass('putin') && $('#c2r1').hasClass('putin')) ||
          ($('#c4r4').hasClass('putin') && $('#c2r2').hasClass('putin') && $('#c3r3').hasClass('putin'))){
      alert('Putin wins!');
      $(alert).makeItRain();
      // I used this to add the song http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
      let songAudio = new Audio('stylesheets/songs/007.mp3');
      songAudio.play();
      game.winnerFound = true;
    }
    else {
      game.winnerFound = false;
    }
  }

  checkWinTrump() {
    if  (($('#c1r4').hasClass('trump') && $('#c1r3').hasClass('trump') && $('#c1r2').hasClass('trump')) ||
          ($('#c2r4').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c2r2').hasClass('trump')) ||
          ($('#c3r4').hasClass('trump') && $('#c3r3').hasClass('trump') && $('#c3r2').hasClass('trump')) ||
          ($('#c4r4').hasClass('trump') && $('#c4r3').hasClass('trump') && $('#c4r2').hasClass('trump')) ||
          ($('#c4r2').hasClass('trump') && $('#c4r3').hasClass('trump') && $('#c4r4').hasClass('trump')) ||
          ($('#c3r2').hasClass('trump') && $('#c3r3').hasClass('trump') && $('#c3r4').hasClass('trump')) ||
          ($('#c2r2').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c2r4').hasClass('trump')) ||
          ($('#c1r2').hasClass('trump') && $('#c1r3').hasClass('trump') && $('#c1r4').hasClass('trump')) ||
          ($('#c1r1').hasClass('trump') && $('#c2r1').hasClass('trump') && $('#c3r1').hasClass('trump')) ||
          ($('#c1r2').hasClass('trump') && $('#c2r2').hasClass('trump') && $('#c3r2').hasClass('trump')) ||
          ($('#c1r3').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c3r3').hasClass('trump')) ||
          ($('#c1r4').hasClass('trump') && $('#c2r4').hasClass('trump') && $('#c3r4').hasClass('trump')) ||
          ($('#c2r1').hasClass('trump') && $('#c3r1').hasClass('trump') && $('#c4r1').hasClass('trump')) ||
          ($('#c2r2').hasClass('trump') && $('#c3r2').hasClass('trump') && $('#c4r2').hasClass('trump')) ||
          ($('#c2r3').hasClass('trump') && $('#c3r3').hasClass('trump') && $('#c4r3').hasClass('trump')) ||
          ($('#c2r4').hasClass('trump') && $('#c3r4').hasClass('trump') && $('#c4r4').hasClass('trump')) ||
          ($('#c1r3').hasClass('trump') && $('#c2r2').hasClass('trump') && $('#c3r1').hasClass('trump')) ||
          ($('#c1r4').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c3r2').hasClass('trump')) ||
          ($('#c4r1').hasClass('trump') && $('#c3r2').hasClass('trump') && $('#c2r1').hasClass('trump')) ||
          ($('#c4r4').hasClass('trump') && $('#c3r3').hasClass('trump') && $('#c2r2').hasClass('trump')) ||
          ($('#c1r4').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c3r2').hasClass('trump')) ||
          ($('#c2r1').hasClass('trump') && $('#c3r2').hasClass('trump') && $('#c4r1').hasClass('trump')) ||
          ($('#c1r2').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c3r4').hasClass('trump')) ||
          ($('#c1r1').hasClass('trump') && $('#c2r2').hasClass('trump') && $('#c3r3').hasClass('trump')) ||
          ($('#c1r4').hasClass('trump') && $('#c2r3').hasClass('trump') && $('#c3r2').hasClass('trump')) ||
          ($('#c4r3').hasClass('trump') && $('#c3r2').hasClass('trump') && $('#c2r1').hasClass('trump')) ||
          ($('#c4r4').hasClass('trump') && $('#c2r2').hasClass('trump') && $('#c3r3').hasClass('trump'))){
        alert('Trump wins!');
        $(alert).makeItRain();
        // I used this to add the song http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
        let songAudio = new Audio('stylesheets/songs/RackCity.mp3');
        songAudio.play();
        game.winnerFound = true;
    }  else {
      game.winnerFound = false;
    }
  }
}

let winFun = new Win();
// $('button').click(function() {
//   $('trump').removeAttr('class', 'trump');
// });
