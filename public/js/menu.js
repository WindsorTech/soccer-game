function start() {

		game.state.start('instructions');		
}

var menuState = {

	create: function() {

		game.add.sprite(0, 0, 'stadium');

		var button = game.add.button(game.world.centerX - 70, 420, 'button', start, this, 2, 1, 0);

	},

	start: function() {

		game.state.start('instructions');
		
	}
};