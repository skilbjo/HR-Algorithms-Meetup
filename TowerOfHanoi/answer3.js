var actions = require("./actions");
var config = require("./config");

actions.move(0,2);

actions.move(0,1);

actions.move(2,1);

actions.move(0,2);

actions.move(1,0);
actions.getBoard();

actions.move(1,2);
actions.getBoard();

actions.move(0,2);
actions.getBoard();


actions.finish();
actions.getBoard();