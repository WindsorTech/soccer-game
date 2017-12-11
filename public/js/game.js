var game = new Phaser.Game(1200, 568, Phaser.CANVAS, 'gameDiv');

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