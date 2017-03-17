var winState = {

	create: function() {

		var winLabel = game.add.text(80, 80, 'YOU ARE A SOCCER STAR!', {font: '50px Arial', fill: '#ffffff'});

		var startLabel = game.add.text(80, game.world.height-80, 'Press the W key to start', {font: '25px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		wkey.onDown.addOnce(this.start, this);

	},

	restart: function() {

		game.state.start('menu');
		
	}
};