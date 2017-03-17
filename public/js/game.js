var game = new Phaser.Game(1277, 600, Phaser.AUTO, 'gameDiv');

// Game States
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);

//Call boot function to start the game
game.state.start('boot');