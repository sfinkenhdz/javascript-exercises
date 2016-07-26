$(document).ready(function(){
  var game = new bowlingGame();

  $('.roll').on('click', function(event){
    event.preventDefault();
    game.turn();
    var $location = $("div.score:empty").first();
    var $location2 = $location.next("div.score:empty").first();
    var prevFrame = game.scorecard[game.scorecard.length-2];
    var currentFrame = game.scorecard[game.scorecard.length-1];
    var prevScore = Number($location.parents().prev().find('.frame-total').text());
    var prevPrevScore = Number($location.parents().prev().prev().find('.frame-total').text());
    var roll1Score = currentFrame[0];
    var roll2Score = currentFrame[1];
    var roll1Display = currentFrame[0];
    var roll2Display = currentFrame[1];
    var frameTotal = roll1Score + roll2Score;
    var frameScore = prevScore + roll1Score + roll2Score;
    var frameDisplay = prevScore + roll1Score + roll2Score;
    var $frameScoreLoc = $("div.frame-total:empty").first();
    var $gameTotalLoc = $("div.total-total");
    var $prevFrameScoreLoc = $($frameScoreLoc.parents().prev().find(".frame-total"));

    function strikeSpareDisplay(){
      if (roll1Score == 10) {
        roll2Display = "X";
        roll1Display = "-";
        frameDisplay = "-";
      }
      else if (roll1Score != 10 && frameTotal == 10) {
        roll2Display = "/";
        frameDisplay = "-";
      }
    };

    function strikeSpareScore() {
      if (game.scorecard.length > 1 && prevFrame[0] == 10) {
        var afterStrikeScore = prevPrevScore + 10 + 2*(roll1Score + roll2Score);
        var StrikeScore = afterStrikeScore - roll1Score - roll2Score;
        $frameScoreLoc.text(afterStrikeScore);
        $prevFrameScoreLoc.text(StrikeScore);
      }
      else if (game.scorecard.length > 1 && prevFrame[0] != 10 && prevFrame[0] + prevFrame[1] == 10) {
        var afterSpareScore = prevPrevScore + 10 + 2*(roll1Score) + roll2Score;
        var spareScore = afterSpareScore - roll1Score - roll2Score;
        $frameScoreLoc.text(afterSpareScore);
        $prevFrameScoreLoc.text(spareScore);
      }
      else {
        $frameScoreLoc.text(frameScore);
      }
    };

    function adjustTotalForStrikeSpare(){
      if (game.scorecard.length == 10 && game.scorecard[8][0] == 10){
        frameScore += game.scorecard[9][0];
        frameScore += game.scorecard[9][1];
        $gameTotalLoc.text(frameScore);
      }
      else if (game.scorecard.length == 10 && game.scorecard[8][0] + game.scorecard[8][1] == 10){
          frameScore += game.scorecard[9][0];
          $gameTotalLoc.text(frameScore);
      }
      else if (game.scorecard.length == 10){
          $gameTotalLoc.text(frameScore);
      }
    };

    strikeSpareDisplay();
    $location.text(roll1Display);
    $location2.text(roll2Display);
    strikeSpareScore();
    adjustTotalForStrikeSpare();

    game.turnEnds();
  });
});