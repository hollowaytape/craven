// Preloader will load all of the assets like graphics and audio
GameStates.Preloader = function (game) {
    this.cr = null;
}

GameStates.Preloader.prototype = {
    preload: function () {
        // common to add a loading bar sprite here...
        this.cr = this.add.sprite(this.game.width / 2 - 100, this.game.height / 2, 'cr');
        this.load.setPreloadSprite(this.cr);
        // load all game assets
        // images, spritesheets, atlases, audio etc..
        //this.load.image('logo', 'assets/phaser2.png');
        this.load.tilemap('test', 'assets/tilemaps/test.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('sky_sprites', 'assets/tilemaps/sky_sprites.png');

        this.load.image('night_bg', 'assets/night_768.png');
        this.load.spritesheet('player', 'assets/spritesheets/guy.png', 32, 64);
        this.load.spritesheet('caterp', 'assets/spritesheets/caterpillar.png', 135, 64);
    },

    create: function () {
        //call next state
        // Calling "Game" to skip the title screen during dev
        this.state.start('Game');
    }
};