class Win {
  constructor() {
    this.winnerFound = false;
    this.checkWin = this.checkWin.bind(this);
  }

  checkWin() {
    ['putin', 'trump'].forEach(leader => {
    if  ((document.querySelector('#c1r4').classList.contains(leader) && document.querySelector('#c1r3').classList.contains(leader) && document.querySelector('#c1r2').classList.contains(leader)) ||
      (document.querySelector('#c2r4').classList.contains(leader) && document.querySelector('#c2r3').classList.contains(leader) && document.querySelector('#c2r2').classList.contains(leader)) ||
      (document.querySelector('#c3r4').classList.contains(leader) && document.querySelector('#c3r3').classList.contains(leader) && document.querySelector('#c3r2').classList.contains(leader)) ||
      (document.querySelector('#c4r4').classList.contains(leader) && document.querySelector('#c4r3').classList.contains(leader) && document.querySelector('#c4r2').classList.contains(leader)) ||
      (document.querySelector('#c4r2').classList.contains(leader) && document.querySelector('#c4r3').classList.contains(leader) && document.querySelector('#c4r4').classList.contains(leader)) ||
      (document.querySelector('#c3r2').classList.contains(leader) && document.querySelector('#c3r3').classList.contains(leader) && document.querySelector('#c3r4').classList.contains(leader)) ||
      (document.querySelector('#c2r2').classList.contains(leader) && document.querySelector('#c2r3').classList.contains(leader) && document.querySelector('#c2r4').classList.contains(leader)) ||
      (document.querySelector('#c1r2').classList.contains(leader) && document.querySelector('#c1r3').classList.contains(leader) && document.querySelector('#c1r4').classList.contains(leader)) ||
      (document.querySelector('#c1r1').classList.contains(leader) && document.querySelector('#c2r1').classList.contains(leader) && document.querySelector('#c3r1').classList.contains(leader)) ||
      (document.querySelector('#c1r2').classList.contains(leader) && document.querySelector('#c2r2').classList.contains(leader) && document.querySelector('#c3r2').classList.contains(leader)) ||
      (document.querySelector('#c1r3').classList.contains(leader) && document.querySelector('#c2r3').classList.contains(leader) && document.querySelector('#c3r3').classList.contains(leader)) ||
      (document.querySelector('#c1r4').classList.contains(leader) && document.querySelector('#c2r4').classList.contains(leader) && document.querySelector('#c3r4').classList.contains(leader)) ||
      (document.querySelector('#c2r1').classList.contains(leader) && document.querySelector('#c3r1').classList.contains(leader) && document.querySelector('#c4r1').classList.contains(leader)) ||
      (document.querySelector('#c2r2').classList.contains(leader) && document.querySelector('#c3r2').classList.contains(leader) && document.querySelector('#c4r2').classList.contains(leader)) ||
      (document.querySelector('#c2r3').classList.contains(leader) && document.querySelector('#c3r3').classList.contains(leader) && document.querySelector('#c4r3').classList.contains(leader)) ||
      (document.querySelector('#c2r4').classList.contains(leader) && document.querySelector('#c3r4').classList.contains(leader) && document.querySelector('#c4r4').classList.contains(leader)) ||
      (document.querySelector('#c1r3').classList.contains(leader) && document.querySelector('#c2r2').classList.contains(leader) && document.querySelector('#c3r1').classList.contains(leader)) ||
      (document.querySelector('#c1r4').classList.contains(leader) && document.querySelector('#c2r3').classList.contains(leader) && document.querySelector('#c3r2').classList.contains(leader)) ||
      (document.querySelector('#c4r1').classList.contains(leader) && document.querySelector('#c3r2').classList.contains(leader) && document.querySelector('#c2r1').classList.contains(leader)) ||
      (document.querySelector('#c4r4').classList.contains(leader) && document.querySelector('#c3r3').classList.contains(leader) && document.querySelector('#c2r2').classList.contains(leader)) ||
      (document.querySelector('#c1r4').classList.contains(leader) && document.querySelector('#c2r3').classList.contains(leader) && document.querySelector('#c3r2').classList.contains(leader)) ||
      (document.querySelector('#c2r1').classList.contains(leader) && document.querySelector('#c3r2').classList.contains(leader) && document.querySelector('#c4r1').classList.contains(leader)) ||
      (document.querySelector('#c1r2').classList.contains(leader) && document.querySelector('#c2r3').classList.contains(leader) && document.querySelector('#c3r4').classList.contains(leader)) ||
      (document.querySelector('#c1r1').classList.contains(leader) && document.querySelector('#c2r2').classList.contains(leader) && document.querySelector('#c3r3').classList.contains(leader)) ||
      (document.querySelector('#c1r4').classList.contains(leader) && document.querySelector('#c2r3').classList.contains(leader) && document.querySelector('#c3r2').classList.contains(leader)) ||
      (document.querySelector('#c4r3').classList.contains(leader) && document.querySelector('#c3r2').classList.contains(leader) && document.querySelector('#c2r1').classList.contains(leader)) ||
      (document.querySelector('#c1r1').classList.contains(leader) && document.querySelector('#c1r2').classList.contains(leader) && document.querySelector('#c1r3').classList.contains(leader)) ||
      (document.querySelector('#c2r1').classList.contains(leader) && document.querySelector('#c2r2').classList.contains(leader) && document.querySelector('#c2r3').classList.contains(leader)) ||
      (document.querySelector('#c3r1').classList.contains(leader) && document.querySelector('#c3r2').classList.contains(leader) && document.querySelector('#c3r3').classList.contains(leader)) ||
      (document.querySelector('#c4r1').classList.contains(leader) && document.querySelector('#c4r2').classList.contains(leader) && document.querySelector('#c4r3').classList.contains(leader)) ||
      (document.querySelector('#c2r4').classList.contains(leader) && document.querySelector('#c3r3').classList.contains(leader) && document.querySelector('#c4r2').classList.contains(leader)) ||
      (document.querySelector('#c4r4').classList.contains(leader) && document.querySelector('#c2r2').classList.contains(leader) && document.querySelector('#c3r3').classList.contains(leader))) {
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
