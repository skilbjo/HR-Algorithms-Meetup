var 
	actions = require('./actions'),
	config = require('./config'),
	board = actions.getBoard();

actions.move(0, 1);

board = actions.getBoard();

board = actions.getBoard();

actions.move(0, 2);
