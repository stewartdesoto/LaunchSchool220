var $tree = $("#tree");
var $apples = $("#apples");
var $message = $("#message");
var $letters = $("#spaces");
var $guesses = $("#guesses");
var $replay = $("#replay");

var randomWord = (function() {
  var words = ["abacus", "quotient", "octothorpe", "proselytize"];

  function without() {
    var new_arr = [];
    var args = Array.prototype.slice.call(arguments);
    words.forEach(function(el) {
      if (args.indexOf(el) === -1) {
        new_arr.push(el)
      }
    });
    return new_arr;
  }

  return function() {
    var word = words[Math.floor(Math.random() * words.length)];
    words = without(word);
    return word;
  }
})();

function Game() {
  this.incorrect = 0;
  this.max_guesses = 6;
  this.letters_guessed = [];
  this.correct_spaces = 0;
  this.word = randomWord();
  if (!this.word) {
    this.displayMessage("Sorry, I've run out of words");
  }
  this.word = this.word.split("");
  console.log(this.word);
  this.init();
}

Game.prototype = {
  init: function() {
    this.bind();
    this.createBlanks();
    this.emptyGuesses();
    this.setClass();
    this.setGameStatus();
    this.displayMessage((this.max_guesses - this.letters_guessed.length) + " guesses left.");
    this.toggleReplayLink(true);
  },

  bind: function() {
    $(document).on("keypress.game", this.processGuess.bind(this))
  },

  unbind: function() {
    $(document).off("keypress.game")
  },

  createBlanks: function() {
    var spaces = (new Array(this.word.length + 1)).join("<span></span>");
    $letters.find("span").remove();
    $letters.append(spaces);
    this.$spaces = $("#spaces span")
  },

  emptyGuesses: function() {
    $("#guesses").find("span").remove();
  },

  processGuess: function(e) {
    e.preventDefault();
    var letter = String.fromCharCode(e.which);
    if (notALetter(letter)) {return; }
    this.displayMessage((this.max_guesses - this.letters_guessed.length) + " guesses left.");
    if (this.duplicateGuess(letter)) {
      console.log("found pooplicate");
      return;
    }
    console.log("past duplicate check");
    if ($.inArray(letter, this.word) !== -1) {
      this.fillBlanksFor(letter);
      this.renderGuess(letter);
      if (this.correct_spaces === this.$spaces.length){
        this.win();
      }
    } else {
      this.renderIncorrectGuess(letter);
    }
    console.log(this.incorrect);
    if (this.incorrect === this.max_guesses) {
      this.lose(); 
    }
  },

  win: function() {
    this.unbind();
    this.displayMessage("You've won");
    this.setGameStatus("win");
    this.toggleReplayLink(true);
  },

  lose: function() {
    console.log("you loser");
    this.unbind();
    this.displayMessage("Sorry, you're plumb out of guesses! :-(");
    this.setGameStatus("lose");
 //   this.toggleReplayLink(true);
  },

  setGameStatus: function(status) {
    $(document.body).removeClass();
    if (status) {
      $(document.body).addClass(status);
    }
  },

  fillBlanksFor: function(letter) {
    var self=this;
    self.word.forEach(function(char, index) {
      if (char === letter) {
        self.$spaces.eq(index).text(letter);
        self.correct_spaces++;
      }
    });
  },

  displayMessage: function(text) {
    $message.text(text);
  },

  toggleReplayLink: function(state) {
    $replay.toggle(state);
  },

  renderIncorrectGuess: function(letter) {
    this.incorrect++;
    this.renderGuess(letter);
    this.setClass();
  },

  duplicateGuess: function(letter) {
    var duplicate = this.letters_guessed.indexOf(letter) !== -1;
    if (!duplicate) {
      this.letters_guessed.push(letter);
    }
    console.log(duplicate);
    return duplicate;
  },

  setClass: function() {
    $apples.removeClass().addClass("guess_" + this.incorrect);
  },

  renderGuess: function(letter) {
    $("<span />", {
      text: letter
    }).appendTo($guesses);
  }
}

function notALetter(letter) {
  return (letter < "a" || letter > "z");
}

$replay.on("click", function(e) {
  e.preventDefault();
  new Game();
});
new Game();
