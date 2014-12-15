var actions = require("./actions");
var config = require("./config");

<<<<<<< HEAD
var answer = function(piece) {
	var base = function() {
		actions.move(0, 2);
	};

	var prebase = function() {
		actions.move(0,1);
		actions.move(1,2);
		actions.move(0,1);
	};

	var others = function() {
		actions.move(0, 2);
		actions.move(0, 1);
		actions.move(2, 1);
		actions.move(0, 2);
	};

	if (piece === 1) {
		base();
	} else if (piece === 2) {
		prebase();
		answer(piece - 1);
	} else {
		others();
		answer(piece - 1);
	}
};

answer(3);

actions.finish();
=======
var move = actions.move.bind(actions);

var moveNPieces = function(n, from, to, via) {
  if (n === 1) {
    move(from, to);
  } else {
    moveNPieces(n - 1, from, via, to);
    move(from, to);
    moveNPieces(n - 1, via, to, from);
  }
};

moveNPieces(config.pieces, 0, 2, 1);
actions.finish();
>>>>>>> 108f361544c19dfe7086ef3945f6a7996c0f9ca5
