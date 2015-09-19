GameStates.Game = function (game) {
    var map;
    var backgroundLayer;
    var blockedLayer;

    var bg;
    var player;
    var caterp;
    var cursors;
    var jumpButton;

};

GameStates.Game.prototype = {

    create: function () {
        map = this.add.tilemap('test');
        map.addTilesetImage('sky_sprites', 'sky_sprites');
        bg = this.add.tileSprite(0, 0, 768, 512, 'night_bg');

        backgroundLayer = map.createLayer('backgroundLayer');
        blockedLayer = map.createLayer('blockedLayer');

        this.physics.arcade.gravity.y = 300;
        this.setupPlayer();
        this.setupEnemy();

        cursors = this.input.keyboard.createCursorKeys();
        jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        // collision on blockedLayer
        // setCollisionsBetween(start, stop, collides, layer, recalculate)
        // look in the tiled json to find out what numbers to put in params.
        map.setCollision(4, true, 'blockedLayer');
    },

    setupPlayer: function () {
        player = this.add.sprite(50, 32, 'player'); // (50, 32) = start position
        this.physics.enable(player, Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;
        //player.body.setSize(20, 32, 0, 0); // decrease hitbox size a little

        player.anchor.setTo(.5, 1); // flip around the center
        //player.animations.add('move', *numbers*, true); // wait until animated to add this

    },

    setupEnemy: function() {
        caterp = this.add.sprite(400, 400, 'caterp');
        this.physics.enable(caterp, Phaser.Physics.ARCADE);
        caterp.body.collideWorldBounds = true;
        caterp.anchor.setTo(.5, 1);
        // also set up animations
    },

    update: function () {
        player.body.velocity.x = 0; // default speed: stationary

        if (cursors.left.isDown) {
            player.scale.x = -1;
            player.body.velocity.x = -150;
            //player.animations.play('move');
        }
        else if (cursors.right.isDown) {
            player.scale.x = 1;
            player.body.velocity.x = 150;
            //player.animations.play('move');
        }
        else {
            //player.animations.stop()
            //player.frame = (idle frame)
        }

        if (jumpButton.isDown && player.body.onFloor()) {
            player.body.velocity.y = -250;
        }

        this.physics.arcade.collide(player, blockedLayer);
    },

    render: function () { }
};