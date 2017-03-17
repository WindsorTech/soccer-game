function start() {

		game.state.start('play');
		
}

var menuState = {

	create: function() {

		game.add.sprite(0, 0, 'stadium');

		var nameLabel = game.add.text(80, 80, 'Digiball Soccer', {font: '50px Arial', fill: '#ffffff', align: "center"});

		//var startLabel = game.add.text(80, game.world.height-80, 'Press the W key to start', {font: '25px Arial', fill: '#ffffff'});

		//var wkey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		//wkey.onDown.addOnce(this.start, this);

		var button = game.add.button(game.world.centerX - 50, 410, 'button', start, this, 2, 1, 0);

	},

	start: function() {

		game.state.start('play');
		
	}
};