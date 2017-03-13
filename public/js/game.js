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
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var enemy7;
var enemy8;
var enemy9;
var enemy10;
var enemy11;

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

    //game.world.setBounds(0, 0, 3400, 1000);

    //  A simple background for our game
    game.add.sprite(0, 0, 'futebol');

    //Create Trees for background
    //trees = game.add.sprite(0, 150, 'trees');

    // //  The platforms group contains the ground and the 2 ledges we can jump on
    // platforms = game.add.group();

    // //  We will enable physics for any object that is created in this group
    // platforms.enableBody = true;

    // // Here we create the ground.
    // var ground = platforms.create(0, game.world.height - 25, 'ground');

    // //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    // ground.scale.setTo(4, 4);

    // //  This stops it from falling away when you jump on it
    // ground.body.immovable = true;

    //  Now let's create two ledges
    // var ledge = platforms.create(400, 400, 'ground');
    // ledge.body.immovable = true;

    // ledge = platforms.create(30, 250, 'ground');
    // ledge.body.immovable = true;

    // ledge = platforms.create(800, 200, 'ground');
    // ledge.body.immovable = true;

    // The player and its settings
    //player = game.add.sprite(32, game.world.height - 150, 'dude');

    //player.scale.setTo(.6, .6);

    //  We need to enable physics on the player
    //game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    //player.body.bounce.y = 0.2;
    //player.body.gravity.y = 300;
    //player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    //player.animations.add('left', 0, true);
    //player.animations.add('right', 0 ,true);

    //enemy
    enemy = game.add.sprite(1100, game.world.height - 385, 'enemy');
    enemy.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(enemy);
    enemy.body.immovable = true;
    enemy.body.collideWorldBounds = true;

    //enemy1
    enemy1 = game.add.sprite(950, game.world.height - 550, 'enemy');
    enemy1.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(enemy1);
    enemy1.body.immovable = true;
    enemy1.body.collideWorldBounds = true;

    //enemy2
    enemy2 = game.add.sprite(950, game.world.height - 175, 'enemy');
    enemy2.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(enemy2);
    enemy2.body.immovable = true;
    enemy2.body.collideWorldBounds = true;

    //enemy3
    enemy3 = game.add.sprite(850, game.world.height - 400, 'enemy');
    enemy3.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(enemy3);
    enemy3.body.immovable = true;
    enemy3.body.collideWorldBounds = true;

    //enemy4
    enemy4 = game.add.sprite(700, game.world.height - 500, 'enemy');
    enemy4.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy4);
    enemy4.body.immovable = true;
    enemy4.body.collideWorldBounds = true;

    //enemy5
    enemy5 = game.add.sprite(700, game.world.height - 200, 'enemy');
    enemy5.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy5);
    enemy5.body.immovable = true;
    enemy5.body.collideWorldBounds = true;

    //enemy6
    enemy6 = game.add.sprite(140, game.world.height - 385, 'enemy-white');
    enemy6.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy6);
    enemy6.body.immovable = true;
    enemy6.body.collideWorldBounds = true;

    //enemy7
    enemy7 = game.add.sprite(290, game.world.height - 550, 'enemy-white');
    enemy7.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy7);
    enemy7.body.immovable = true;
    enemy7.body.collideWorldBounds = true;

    //enemy8
    enemy8 = game.add.sprite(290, game.world.height - 175, 'enemy-white');
    enemy8.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy8);
    enemy8.body.immovable = true;
    enemy8.body.collideWorldBounds = true;

    //enemy9
    enemy9 = game.add.sprite(400, game.world.height - 400, 'enemy-white');
    enemy9.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy9);
    enemy9.body.immovable = true;
    enemy9.body.collideWorldBounds = true;

    //enemy10
    enemy10 = game.add.sprite(550, game.world.height - 500, 'enemy-white');
    enemy10.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy10);
    enemy10.body.immovable = true;
    enemy10.body.collideWorldBounds = true;

    //enemy11
    enemy11 = game.add.sprite(550, game.world.height - 200, 'enemy-white');
    enemy11.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy11);
    enemy11.body.immovable = true;
    enemy11.body.collideWorldBounds = true;

    //var tween = game.add.tween(enemy4).to( { x: 300 }, 20000, Phaser.Easing.Linear.None, true, 0, 1000, true);


    //===========ICE CREAMS================//
    cones = game.add.group();

    cones.enableBody = true;

    cones.physicsBodyType = Phaser.Physics.ARCADE;

    // for (var i = 0; i < 1; i++)
    // {
    //     var coneX = (window.innerWidth / 20) * i
    //     var cone = cones.create(coneX, i * Math.floor(Math.random() * 70), 'cone');

    //     cone.body.gravity.y = 0;


    //     cone.body.bounce.setTo(0.9, 0.9);

    //     cone.body.collideWorldBounds=true;
    //     cone.body.gravity.x = game.rnd.integerInRange(-80, 80);
    //     cone.body.gravity.y = 0 + Math.random() * 100;
    // }

    //===========ICE CREAMS END================//

    //===========BROCCOLI================//
    broccolis = game.add.group();

    broccolis.enableBody = true;

    broccolis.physicsBodyType = Phaser.Physics.ARCADE;

    // for (var i = 0; i < 8; i++)
    // {
    //     // Randomize Broccoli position
    //     var brocX = (window.innerWidth / 8) * i
    //     var broc = broccolis.create(brocX, i * Math.floor(Math.random() * 70), 'broccoli');

    //     broc.body.gravity.y = 0;


    //     broc.body.bounce.setTo(0.9, 0.9);

    //     broc.body.collideWorldBounds=true;
    //     broc.body.gravity.x = game.rnd.integerInRange(-80, 80);
    //     broc.body.gravity.y = 0 + Math.random() * 100;
    // }

    //===========BROCCOLI END================//

    //  The score
    //scoreText = game.add.text(25, 25, 'Score: 0', { fontSize: '32px', fill: '#000' });

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();

    // TIMER
    //game.time.events.add(Phaser.Timer.SECOND * 20, gameEnd);

    //==========GOALS=============//
    goal = game.add.sprite(1, 252, 'goal');

    game.physics.enable([goal], Phaser.Physics.ARCADE);

    goal.body.collideWorldBounds = true;


    goal2 = game.add.sprite(1255, 252, 'goal-two');

    game.physics.enable([goal2], Phaser.Physics.ARCADE);

    goal2.body.collideWorldBounds = true;
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

    game.physics.arcade.overlap(player, cones, collectCone, null, this);

    game.physics.arcade.overlap(player, broccolis, collectBroccoli, null, this);


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

// function render() {

//     game.debug.text("Drag the sprite and release to launch", 32, 32, 'rgb(0,255,0)');
//     game.debug.cameraInfo(game.camera, 32, 64);
//     game.debug.spriteCoords(player, 32, 150);
//     game.debug.text("Launch Velocity: " + parseInt(launchVelocity), 550, 32, 'rgb(0,255,0)');

// }


function collectCone (player, cone) {

    // Removes the star from the screen
    cone.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}


function collectBroccoli (player, broc) {

    // Removes the broccoli from the screen
    broc.kill();

    //  Add and update the score
    score -= 10;
    scoreText.text = 'Score: ' + score;

}

function gameEnd() {

    endText = game.add.text(500, 16, 'Game Over Sucker!', { fontSize: '40px', fill: '#000' });

    player.animations.stop(null, true);
    cones.animations.stop(null, true);
    broccolis.animations.stop(null, true);


}