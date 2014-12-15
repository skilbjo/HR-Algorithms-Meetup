var actions = require("./actions");
var config = require("./config");

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