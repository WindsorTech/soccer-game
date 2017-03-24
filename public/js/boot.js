var bootState = {

	create: function() {

		// Enable the Arcade Physics system to the Game
		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.state.start('load');
	}
};