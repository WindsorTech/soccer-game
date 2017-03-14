var game = new Phaser.Game(1277, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {


    //Load GameImages
    game.load.image('futebol', '../images/football-field.jpg');
    game.load.image('enemy', '../images/footballer-yellow.png');
    game.load.image('enemy-white', '../images/footballer-white.png');
    game.load.image('goal', '../images/goal.png');
    game.load.image('goal-two', '../images/goal-two.png');
    game.load.image('player','../images/bola.png');
    game.load.image('analog', '../images/arrow.png');
    game.load.image('arrow', '../images/arrow.png');



}

//Global Variables
var player;
var arrow;
var goal;
var goal2;
var catchFlag = false;
var launchVelocity = 0;
var platforms;
var cursors;
var ground;
var enemy;



var score = 0;
var scoreText;
var endText;

var textStyle = { font: '64px Desyrel', align: 'center'};

var timer;
// var timerText;
// var milliseconds = 0;
// var seconds = 0;
// var minutes = 0;

//var total = 0;

function create() {

    // Enable the Arcade Physics system to the Game
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Soccer Field Background
    game.add.sprite(0, 0, 'futebol');
   
//======================ENEMY PLAYERS===========================//

    //enemy
    enemy = game.add.sprite(1150, game.world.height - 410, 'enemy');
    enemy.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(enemy);
    enemy.body.immovable = true;
    enemy.body.collideWorldBounds = true;
    enemy.body.velocity.y = 70;
    enemy.body.bounce.y = 1;
    game.add.tween(enemy).to({ y: 315 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0, 3000, true);

    //enemy1
    enemy1 = game.add.sprite(980, game.world.height - 580, 'enemy');
    enemy1.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(enemy1);
    enemy1.body.immovable = true;
    enemy1.body.collideWorldBounds = true;
    enemy1.body.velocity.y = 70;
    enemy1.body.bounce.y = 1;
    game.add.tween(enemy1).to({ y: 60 }, 3500, Phaser.Easing.Quadratic.InOut, true, 0, 3000, true);

    //enemy2
    enemy2 = game.add.sprite(980, game.world.height - 100, 'enemy');
    enemy2.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(enemy2);
    enemy2.body.immovable = true;
    enemy2.body.collideWorldBounds = true;
    enemy2.body.velocity.y = 70;
    enemy2.body.bounce.y = 1;
    game.add.tween(enemy2).to({ y: 425 }, 3250, Phaser.Easing.Quadratic.InOut, true, 0, 3000, true);

    //enemy3
    enemy3 = game.add.sprite(980, game.world.height - 475, 'enemy');
    enemy3.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(enemy3);
    enemy3.body.immovable = true;
    enemy3.body.collideWorldBounds = true;
    enemy3.body.velocity.y = 70;
    enemy3.body.bounce.y = 1;
    game.add.tween(enemy3).to({ y: 200 }, 3500, Phaser.Easing.Quadratic.InOut, true, 0, 3000, true);

    //enemy4
    enemy4 = game.add.sprite(980, game.world.height - 315, 'enemy');
    enemy4.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy4);
    enemy4.body.immovable = true;
    enemy4.body.collideWorldBounds = true;
    enemy4.body.velocity.y = 70;
    enemy4.body.bounce.y = 1;
    game.add.tween(enemy4).to({ y: 320 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0, 3000, true);

    //enemy5
    enemy5 = game.add.sprite(820, game.world.height - 150, 'enemy');
    enemy5.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy5);
    enemy5.body.immovable = true;
    enemy5.body.collideWorldBounds = true;
    enemy5.body.velocity.y = 70;
    enemy5.body.bounce.y = 1;
    game.add.tween(enemy5).to({ y: 300 }, 3500, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy6
    enemy6 = game.add.sprite(770, game.world.height - 415, 'enemy');
    enemy6.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy6);
    enemy6.body.immovable = true;
    enemy6.body.collideWorldBounds = true;
    game.add.tween(enemy6).to({ y: 330 }, 3300, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy7
    enemy7 = game.add.sprite(820, game.world.height - 575, 'enemy');
    enemy7.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy7);
    enemy7.body.immovable = true;
    enemy7.body.collideWorldBounds = true;
    game.add.tween(enemy7).to({ y: 230 }, 3650, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy8
    enemy8 = game.add.sprite(700, game.world.height - 100, 'enemy');
    enemy8.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy8);
    enemy8.body.immovable = true;
    enemy8.body.collideWorldBounds = true;
    game.add.tween(enemy8).to({ y: 340 }, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy9
    enemy9 = game.add.sprite(700, game.world.height - 575, 'enemy');
    enemy9.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy9);
    enemy9.body.immovable = true;
    enemy9.body.collideWorldBounds = true;
    game.add.tween(enemy9).to({ y: 230 }, 3850, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

//-----------------------The other team----------------------//

    //enemy10
    enemy10 = game.add.sprite(100, game.world.height - 410, 'enemy-white');
    enemy10.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy10);
    enemy10.body.immovable = true;
    enemy10.body.collideWorldBounds = true;
    game.add.tween(enemy10).to({ y: 320 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy11
    enemy11 = game.add.sprite(270, game.world.height - 580, 'enemy-white');
    enemy11.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy11);
    enemy11.body.immovable = true;
    enemy11.body.collideWorldBounds = true;
    game.add.tween(enemy11).to({ y: 80 }, 3450, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy12
    enemy12 = game.add.sprite(270, game.world.height - 100, 'enemy-white');
    enemy12.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy12);
    enemy12.body.immovable = true;
    enemy12.body.collideWorldBounds = true;
    game.add.tween(enemy12).to({ y: 430 }, 3700, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy13
    enemy13 = game.add.sprite(270, game.world.height - 465, 'enemy-white');
    enemy13.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy13);
    enemy13.body.immovable = true;
    enemy13.body.collideWorldBounds = true;
    game.add.tween(enemy13).to({ y: 225 }, 3100, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy14
    enemy14 = game.add.sprite(270, game.world.height - 315, 'enemy-white');
    enemy14.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy14);
    enemy14.body.immovable = true;
    enemy14.body.collideWorldBounds = true;
    game.add.tween(enemy14).to({ y: 360 }, 3500, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy15
    enemy15 = game.add.sprite(440, game.world.height - 280, 'enemy-white');
    enemy15.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy15);
    enemy15.body.immovable = true;
    enemy15.body.collideWorldBounds = true;
    game.add.tween(enemy15).to({ y: 500 }, 3200, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
    

    //enemy16
    enemy16 = game.add.sprite(485, game.world.height - 400, 'enemy-white');
    enemy16.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy16);
    enemy16.body.immovable = true;
    enemy16.body.collideWorldBounds = true;
    game.add.tween(enemy16).to({ y: 350 }, 3700, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy17
    enemy17 = game.add.sprite(440, game.world.height - 580, 'enemy-white');
    enemy17.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy17);
    enemy17.body.immovable = true;
    enemy17.body.collideWorldBounds = true;
    game.add.tween(enemy17).to({ y: 260 }, 3450, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy18
    enemy18 = game.add.sprite(540, game.world.height - 100, 'enemy-white');
    enemy18.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy18);
    enemy18.body.immovable = true;
    enemy18.body.collideWorldBounds = true;
    game.add.tween(enemy18).to({ y: 320 }, 3700, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy19
    enemy19 = game.add.sprite(540, game.world.height - 575, 'enemy-white');
    enemy19.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy19);
    enemy19.body.immovable = true;
    enemy19.body.collideWorldBounds = true;
    game.add.tween(enemy19).to({ y: 230 }, 3250, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

//======================ENEMY PLAYERS END===========================//

    //  GAME SCORE
    scoreText = game.add.text(600, 25, 'Goals: 0', { fontSize: '24px', fill: '#FFF' });

    //  Our controls.
    //cursors = game.input.keyboard.createCursorKeys();

    // TIMER
    //game.time.events.add(Phaser.Timer.SECOND * 20, gameEnd);

    //==========GOALS=============//
    goal = game.add.sprite(0, 252, 'goal');

    game.physics.enable([goal], Phaser.Physics.ARCADE);

    goal.body.collideWorldBounds = true;

    goal.body.immovable = true;


    goal2 = game.add.sprite(1255, 252, 'goal-two');

    game.physics.enable([goal2], Phaser.Physics.ARCADE);

    goal2.body.collideWorldBounds = true;

    goal2.body.immovable = true;
    //======================================//


    //===============BALL EFFECT==================//

    analog = game.add.sprite(200, 450, 'analog');
    analog.width = 8;
    analog.rotation = 220;
    analog.alpha = 0;
    analog.anchor.setTo(0.5, 0.0);
    
    arrow = game.add.sprite(200, 450, 'arrow');
    arrow.anchor.setTo(0.1, 0.5);
    arrow.alpha = 0;

    player = game.add.sprite(640, 300, 'player');

    game.physics.enable([player], Phaser.Physics.ARCADE);

    player.anchor.set(0.5);
    player.body.collideWorldBounds = true;
    player.body.bounce.set(0.9);
    player.body.drag.set(50, 50);

    // Enable input.
    player.inputEnabled = true;
    player.input.start(0, true);
    player.events.onInputDown.add(set);
    player.events.onInputUp.add(launch);

    //===============BALL EFFECT END==================//

}

function set(player,pointer) {

    catchFlag = true;
    game.camera.follow(null);
    
    player.body.moves = false;
    player.body.velocity.setTo(0, 0);
    arrow.reset(player.x, player.y);
    analog.reset(player.x, player.y);

}

function launch() {

    catchFlag = false;
    player.body.moves = true;
    game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);
    
    arrow.alpha = 0;
    analog.alpha = 0;

    Xvector = (arrow.x - player.x) * 3;
    Yvector = (arrow.y - player.y) * 3;

    player.body.velocity.setTo(Xvector, Yvector);

}

function update() {

    //game.add.text(550, 50, 'Time Left: ' + game.time.events.duration);

    // TIMER UPDATE TEXT
    //game.debug.text("Time left: " + game.time.events.duration, 550, 50);

    //  Set collision between game sprites
    game.physics.arcade.collide(player, platforms);
    //game.physics.arcade.collide(player, goal);
    //game.physics.arcade.collide(player, goal2);
    game.physics.arcade.overlap(player, goal, ownGoal, null, this);game.physics.arcade.overlap(player, goal, goalScore, null, this);
    game.physics.arcade.overlap(player, goal2, goalScore, null, this);

//=================================================//
    game.physics.arcade.collide(enemy, platforms);
    game.physics.arcade.collide(enemy, player);
//=================================================//
    game.physics.arcade.collide(enemy1, platforms);
    game.physics.arcade.collide(enemy1, player);
//=================================================//
    game.physics.arcade.collide(enemy2, platforms);
    game.physics.arcade.collide(enemy2, player);
//=================================================//
    game.physics.arcade.collide(enemy3, platforms);
    game.physics.arcade.collide(enemy3, player);
//=================================================//
    game.physics.arcade.collide(enemy4, platforms);
    game.physics.arcade.collide(enemy4, player);
//=================================================//
    game.physics.arcade.collide(enemy5, platforms);
    game.physics.arcade.collide(enemy5, player);
//=================================================//
    game.physics.arcade.collide(enemy6, platforms);
    game.physics.arcade.collide(enemy6, player);
//=================================================//
    game.physics.arcade.collide(enemy7, platforms);
    game.physics.arcade.collide(enemy7, player);
//=================================================//
    game.physics.arcade.collide(enemy8, platforms);
    game.physics.arcade.collide(enemy8, player);
//=================================================//
    game.physics.arcade.collide(enemy9, platforms);
    game.physics.arcade.collide(enemy9, player);
//=================================================//
    game.physics.arcade.collide(enemy10, platforms);
    game.physics.arcade.collide(enemy10, player);
//=================================================//
    game.physics.arcade.collide(enemy11, platforms);
    game.physics.arcade.collide(enemy11, player);
//=================================================//
    game.physics.arcade.collide(enemy12, platforms);
    game.physics.arcade.collide(enemy12, player);
//=================================================//
    game.physics.arcade.collide(enemy13, platforms);
    game.physics.arcade.collide(enemy13, player);
//=================================================//
    game.physics.arcade.collide(enemy14, platforms);
    game.physics.arcade.collide(enemy14, player);
//=================================================//
    game.physics.arcade.collide(enemy15, platforms);
    game.physics.arcade.collide(enemy15, player);
//=================================================//
    game.physics.arcade.collide(enemy16, platforms);
    game.physics.arcade.collide(enemy16, player);
//=================================================//
    game.physics.arcade.collide(enemy17, platforms);
    game.physics.arcade.collide(enemy17, player);
//=================================================//
    game.physics.arcade.collide(enemy18, platforms);
    game.physics.arcade.collide(enemy18, player);
//=================================================//
    game.physics.arcade.collide(enemy19, platforms);
    game.physics.arcade.collide(enemy19, player);

    //game.physics.arcade.overlap(player, cones, collectCone, null, this);

    //game.physics.arcade.overlap(player, broccolis, collectBroccoli, null, this);


    ///======================BALL EFECT==============//
    arrow.rotation = game.physics.arcade.angleBetween(arrow, player);
    
    if (catchFlag == true)
    {
        //  Track the ball sprite to the mouse  
        player.x = game.input.activePointer.worldX; 
        player.y = game.input.activePointer.worldY;
        
        arrow.alpha = 1;    
        analog.alpha = 0.5;
        analog.rotation = arrow.rotation - 3.14 / 2;
        analog.height = game.physics.arcade.distanceBetween(arrow, player);    
        launchVelocity = analog.height;
    }


    //=====================BALL EFFECT END=======//

}

function goalScore (player, goal2) {

    // Removes the ball from the screen
    player.kill();

    //  Add and update the score
    score += 1;
    scoreText.text = 'Goals: ' + score;

    restartBall();

}


function ownGoal (player, goal) {

    // Removes the ball from the screen
    player.kill();

    //  Add and update the score
    score -= 1;
    scoreText.text = 'Goals: ' + score;

    restartBall();

}

function restartBall () {

    player = game.add.sprite(640, 300, 'player');

    game.physics.enable([player], Phaser.Physics.ARCADE);

    player.anchor.set(0.5);
    player.body.collideWorldBounds = true;
    player.body.bounce.set(0.9);
    player.body.drag.set(50, 50);

    // Enable input.
    player.inputEnabled = true;
    player.input.start(0, true);
    player.events.onInputDown.add(set);
    player.events.onInputUp.add(launch);

}

function gameEnd() {

    endText = game.add.text(500, 16, 'Game Over Sucker!', { fontSize: '40px', fill: '#000' });

    player.animations.stop(null, true);
    cones.animations.stop(null, true);
    broccolis.animations.stop(null, true);


}