var 
	actions = require('./actions'),
	config = require('./config'),
	board = actions.getBoard();

actions.move(0, 1);
// [ [5, 4, 3, 2, 1], [], [] ]

board = actions.getBoard();
// board is now [ [5, 4, 3, 2], [1], [] ]

board = actions.getBoard();
// board is now [ [5, 4, 3], [1], [2] ]

actions.move(0, 2);
