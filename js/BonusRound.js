import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';
import Round from './Round.js';

class BonusRound extends Round {
  constructor(puzzleBank, bonusWheel) {
    super(puzzleBank);
    this.bonusWheel = bonusWheel;
    this.keyBoardClickCount = 0;
    this.didWinBonus = null;
    this.bonusWheelValue = null;
    this.bonusPlayer = null;
  }

  generateBonusWheel() {
    let wheelVals = [];
    for (var i = 0; i < 6; i++) {
      wheelVals.push(this.bonusWheel[i]);
    }
    return new Wheel(wheelVals);
  }

  generateBonusPuzzle(lastPuzzle) {
    return new Puzzle(this.puzzleBank[0])
  }

  postBonusResult() {
    $('.popup-cover').css('display', 'unset');
    $('.bonus-round-intro').css('display', 'flex');
    var winnings;
    if (this.didWinBonus) {
      $('.win-message').text(` WINS THE BONUS!`);
      winnings = this.bonusPlayer.bankAcct + this.bonusWheelValue;
    } else {
      $('.win-message').text(` MISSED THE BONUS!`);
      winnings = this.bonusPlayer.bankAcct;
    }
    $('.winner-money-pre-bonus').text(winnings)
    $('.start-bonus-round').remove();
    $('.bonus-round-intro').append('<button class="new-game">NEW GAME</button>')
  }
}

export default BonusRound;
