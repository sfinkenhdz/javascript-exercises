function bowlingGame() {
  this.frame = [];
  this.spare = false;
  this.strike = false;
  this.scorecard = [];
}

bowlingGame.prototype.roll1 = function() {
    this.pins = Math.floor(Math.random() * 11);
  };

bowlingGame.prototype.checkStrike = function() {
    if (this.pins == 10) {
      this.strike = true;
    }
};

bowlingGame.prototype.score1 = function() {
    this.frame.push(this.pins)
};

bowlingGame.prototype.roll2 = function() {
    if (this.strike == true) {
      this.pins2 = 0;
    }
    if (this.strike == false) {
      this.pinsLeft = 10 - this.pins;
      this.pins2 = Math.floor(Math.random() * (this.pinsLeft +1));
    }
  };

  bowlingGame.prototype.checkSpare = function() {
      if (this.pins + this.pins2 == 10){
        this.spare = true;
      }
  };

  bowlingGame.prototype.score2 = function() {
    this.frame.push(this.pins2);
  }

  bowlingGame.prototype.turnEnds = function() {
  this.strike = false;
  this.spare = false;
  this.frame = [];
  }

bowlingGame.prototype.saveScore = function() {
  this.scorecard.push(this.frame);
}

  bowlingGame.prototype.turn = function() {
    this.roll1();
    this.checkStrike();
    this.score1();
    this.roll2();
    this.checkSpare();
    this.score2();
    this.saveScore();
  };

