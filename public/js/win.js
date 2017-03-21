function results() {

		window.location.href = "leaders";
}

var winState = {

	create: function() {

		game.add.sprite(0, 0, 'futebol');

		var winLabel = game.add.text(480, 50, 'GAME OVER!', {font: '50px Arial', fill: '#ffffff', fontWeight: 'bold'});

		var finalScore = game.add.text(460, 150, 'Total Score: ' + score + ' goals', {font: '40px Arial', fill: '#ffffff', fontWeight: 'bold'});

		var nameLabel = game.add.text(460, 290, 'Insert Your Name Below:', {font: '32px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.plugin(PhaserInput.Plugin);

		username = game.add.inputField(game.world.width-800, game.world.height-250, {
	    font: '30px Arial',
	    fill: '#212121',
	    fontWeight: 'bold',
	    width: 350,
	    max: 20,
	    padding: 8,
	    borderWidth: 1,
	    borderColor: '#000',
	    borderRadius: 6,
	    placeHolder: 'Player Name'
		});

		button = game.add.button(game.world.centerX - 95, 405, 'submit', results, this, 2, 1, 0);

		//var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		//wkey.onDown.addOnce(this.start, this);

	},

	results: function() {

		window.location.href = "leaders";
		
	}
};