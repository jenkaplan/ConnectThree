class Win {
  constructor() {
    this.winnerFound = false;
    this.checkWin = this.checkWin.bind(this);
  }

  checkWin() {
    ['putin', 'trump'].forEach(leader => {
    if  (($('#c1r4').hasClass(leader) && $('#c1r3').hasClass(leader) && $('#c1r2').hasClass(leader)) ||
      ($('#c2r4').hasClass(leader) && $('#c2r3').hasClass(leader) && $('#c2r2').hasClass(leader)) ||
      ($('#c3r4').hasClass(leader) && $('#c3r3').hasClass(leader) && $('#c3r2').hasClass(leader)) ||
      ($('#c4r4').hasClass(leader) && $('#c4r3').hasClass(leader) && $('#c4r2').hasClass(leader)) ||
      ($('#c4r2').hasClass(leader) && $('#c4r3').hasClass(leader) && $('#c4r4').hasClass(leader)) ||
      ($('#c3r2').hasClass(leader) && $('#c3r3').hasClass(leader) && $('#c3r4').hasClass(leader)) ||
      ($('#c2r2').hasClass(leader) && $('#c2r3').hasClass(leader) && $('#c2r4').hasClass(leader)) ||
      ($('#c1r2').hasClass(leader) && $('#c1r3').hasClass(leader) && $('#c1r4').hasClass(leader)) ||
      ($('#c1r1').hasClass(leader) && $('#c2r1').hasClass(leader) && $('#c3r1').hasClass(leader)) ||
      ($('#c1r2').hasClass(leader) && $('#c2r2').hasClass(leader) && $('#c3r2').hasClass(leader)) ||
      ($('#c1r3').hasClass(leader) && $('#c2r3').hasClass(leader) && $('#c3r3').hasClass(leader)) ||
      ($('#c1r4').hasClass(leader) && $('#c2r4').hasClass(leader) && $('#c3r4').hasClass(leader)) ||
      ($('#c2r1').hasClass(leader) && $('#c3r1').hasClass(leader) && $('#c4r1').hasClass(leader)) ||
      ($('#c2r2').hasClass(leader) && $('#c3r2').hasClass(leader) && $('#c4r2').hasClass(leader)) ||
      ($('#c2r3').hasClass(leader) && $('#c3r3').hasClass(leader) && $('#c4r3').hasClass(leader)) ||
      ($('#c2r4').hasClass(leader) && $('#c3r4').hasClass(leader) && $('#c4r4').hasClass(leader)) ||
      ($('#c1r3').hasClass(leader) && $('#c2r2').hasClass(leader) && $('#c3r1').hasClass(leader)) ||
      ($('#c1r4').hasClass(leader) && $('#c2r3').hasClass(leader) && $('#c3r2').hasClass(leader)) ||
      ($('#c4r1').hasClass(leader) && $('#c3r2').hasClass(leader) && $('#c2r1').hasClass(leader)) ||
      ($('#c4r4').hasClass(leader) && $('#c3r3').hasClass(leader) && $('#c2r2').hasClass(leader)) ||
      ($('#c1r4').hasClass(leader) && $('#c2r3').hasClass(leader) && $('#c3r2').hasClass(leader)) ||
      ($('#c2r1').hasClass(leader) && $('#c3r2').hasClass(leader) && $('#c4r1').hasClass(leader)) ||
      ($('#c1r2').hasClass(leader) && $('#c2r3').hasClass(leader) && $('#c3r4').hasClass(leader)) ||
      ($('#c1r1').hasClass(leader) && $('#c2r2').hasClass(leader) && $('#c3r3').hasClass(leader)) ||
      ($('#c1r4').hasClass(leader) && $('#c2r3').hasClass(leader) && $('#c3r2').hasClass(leader)) ||
      ($('#c4r3').hasClass(leader) && $('#c3r2').hasClass(leader) && $('#c2r1').hasClass(leader)) ||
      ($('#c1r1').hasClass(leader) && $('#c1r2').hasClass(leader) && $('#c1r3').hasClass(leader)) ||
      ($('#c2r1').hasClass(leader) && $('#c2r2').hasClass(leader) && $('#c2r3').hasClass(leader)) ||
      ($('#c3r1').hasClass(leader) && $('#c3r2').hasClass(leader) && $('#c3r3').hasClass(leader)) ||
      ($('#c4r1').hasClass(leader) && $('#c4r2').hasClass(leader) && $('#c4r3').hasClass(leader)) ||
      ($('#c2r4').hasClass(leader) && $('#c3r3').hasClass(leader) && $('#c4r2').hasClass(leader)) ||
      ($('#c4r4').hasClass(leader) && $('#c2r2').hasClass(leader) && $('#c3r3').hasClass(leader))) {
        if (leader === 'putin') {
        alert('Putin wins!');
        $(alert).makeItRain();
        // I used this to add the song http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
        const bond = new Audio('./songs/007.mp3');
        bond.play();
        this.winnerFound = true;
        } else if (leader === 'trump') {
            alert('Trump wins!');
            $(alert).makeItRain();
            // I used this to add the song http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
            const bennyHill = new Audio('./songs/BennyHill.mp3');
            bennyHill.play();
            this.winnerFound = true;
        }
      } else {
        this.winnerFound = false;
      }
    })
  }
}

const winFun = new Win();
