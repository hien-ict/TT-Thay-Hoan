var demo = {}, centerX=1920/2, centerY=1080/2, face, speed=8;
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {
        game.load.image('face','Images/Picture.png');
        game.load.image('background','Images/background2.png');
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#4d4dff';
        console.log('state0');
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 4269,2133);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        var bg=game.add.sprite(0 ,0 ,'background');
        face=game.add.sprite(centerX, centerY, 'face');
        face.anchor.setTo(0.5,0.5);
        face.scale.setTo(0.6,0.6);

        game.physics.enable(face);
        face.body.collideWorldBounds = true;

        game.camera.follow(face);
        game.camera.deadzone = new Phaser.Rectangle(300,100,1420,880);
    },
    update: function () {
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            face.scale.setTo(0.6,0.6);
            face.x+=speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            face.scale.setTo(-0.6,0.6);
            face.x-=speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            face.y-=speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            face.y+=speed;
        }
    }
};

function changeState(i, stateNum) {
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);

}
