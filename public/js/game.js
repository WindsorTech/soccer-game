// var Presets = {
//   'width': 1265,
//   'height': 599
// }

// var game = new Phaser.Game(Presets.width, Presets.height, Phaser.CANVAS);

// if (game.device.iOS == true) Presets = {'width': 667, 'height': 375}

var game = new Phaser.Game(1220, 578, Phaser.CANVAS, 'gameDiv');


// Game States
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('instructions', instructionsState);
game.state.add('leaderboard', leaderState);

//Call boot function to start the game
game.state.start('boot');