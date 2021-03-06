var demo = {}, centerX=1920/2, centerY=1080/2, face, speed=6;
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {
        game.load.spritesheet('face','Images/human.png',250,380);
        game.load.image('background','Images/background2.png');
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#4d4dff';

        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 4269,2133);
        //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // vừa màn hình

        var bg=game.add.sprite(0 ,0 ,'background');
        face=game.add.sprite(centerX, centerY, 'face');
        face.anchor.setTo(0.5,0.5);
        face.scale.setTo(0.6,0.6);

        game.physics.enable(face);
        face.body.collideWorldBounds = true;
        face.animations.add('walk',[0,1,2,3,4]);

        game.camera.follow(face);
        game.camera.deadzone = new Phaser.Rectangle(300,100,1420,880);
    },
    update: function () {
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            face.scale.setTo(0.6,0.6);
            face.x+=speed;
            face.animations.play('walk',14,true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            face.scale.setTo(-0.6,0.6);
            face.x-=speed;
            face.animations.play('walk',14,true);
        }
        else{
            face.animations.stop('walk');
            face.frame=0;
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
    console.log('state'+stateNum);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
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
