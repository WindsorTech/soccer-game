//var game = new Phaser.Game(1265, 599, Phaser.CANVAS, 'gameDiv');

var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'gameDiv');

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