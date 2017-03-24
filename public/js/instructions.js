function begin() {

		game.state.start('play');		
}

var instructionsState = {

	create: function() {

		game.add.sprite(0, 0, 'futebol-clean');

		//Leaderboard Page headers
		var winLabel = game.add.text(400, 25, 'GAME INSTRUCTIONS', {font: '44px Arial', fill: '#ffffff', fontWeight: 'bold'});

		//Instruction 1
		game.add.text(300, 100, 'You will represent the red team, attacking to your', {font: '28px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(440, 130, 'right against the yellow team.', {font: '28px Arial', fill: '#ffffff', fontWeight: 'bold'});
		//game.add.text(350, 120, '___________________________________', {fill: '#ffffff'});

		//Instruction 2
		game.add.text(300, 190, 'To move the ball, simply drag it and release it onto', {font: '28px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(320, 220, 'the field in the desired direction. The further you', {font: '28px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(350, 250, 'drag the ball, the stronger your kick will be.', {font: '28px Arial', fill: '#ffffff', fontWeight: 'bold'});

		//Instruction 3
		game.add.text(285, 310, 'You have 60 seconds to score as many goals as you', {font: '28px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(310, 340, 'can. However, if you concede any goals, you will', {font: '28px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(420, 370, 'lose precious points. Good luck!', {font: '28px Arial', fill: '#ffffff', fontWeight: 'bold'});

		// Play Again buttons
		var button = game.add.button(game.world.centerX - 70, 420, 'button', begin, this, 2, 1, 0);

	},

	begin: function() {

		game.state.start('play');
		
	}
};