var actions = require("./actions");
var config = require("./config");

var move = actions.move.bind(actions);

var moveOnePiece = function(from, to, via) {
	move(from, to);
};

var moveTwoPieces = function(from, to, via) {
	moveOnePiece(from, via);
	moveOnePiece(from, to);
	moveOnePiece(via, to);
};

var moveThreePieces = function(from, to, via) {
	moveTwoPieces(from, via, to);
	moveOnePiece(from, to);
	moveTwoPieces(via, to, from);
};

var moveNPieces = function(n, from, to, via) {
	if (n === 1) {
		moveOnePiece(from, to);
	} else {
		moveNPieces(n - 1, from, via, to);
		moveOnePiece(from, to);
		moveNPieces(n - 1, via, to, from);
	}
};

moveNPieces(config.pieces, 0, 2, 1);