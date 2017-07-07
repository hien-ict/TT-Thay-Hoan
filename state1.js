demo.state1 = function () {};
demo.state1.prototype = {
    preload: function () {
        //        game.load.tilemap('field','TileMap/map.json',null,Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('field', 'TileMap/map.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grassTiles', 'TileMap/grass.png');
        game.load.image('rockTiles', 'TileMap/rock.png');
    },
    create: function () {
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();

        var map = game.add.tilemap('field');
        //        map.addTilesetImage('grassTiles');
        //        map.addTilesetImage('rockTiles');
        //
        //        var grass1 = map.createLayer('grass1');
        //        var rock1 = map.createLayer('rock1');

    },
    update: function () {}
};
