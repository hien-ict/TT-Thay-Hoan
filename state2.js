var barrel, bullets, velocity = 1000, nextFire = 0, fireRate = 200, enemy, bullet;
demo.state2 = function () {};
demo.state2.prototype = {
    preload: function () {
        game.load.image('base', 'Images/base.png');
        game.load.image('barrel', 'Images/barrel.png');
        game.load.image('bullet', 'Images/bullet.png');
    },
    create: function () {
        game.stage.backgroundColor = '#ff66ff';
        addChangeStateEventListeners();

        //add canon
        var base = game.add.sprite(centerX, centerY, 'base');
        base.anchor.setTo(0.5);
        base.scale.setTo(0.3);

        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, 'bullet');
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('anchor.y', 0.5);
        bullets.setAll('scale.x', 0.25);
        bullets.setAll('scale.y', 0.35);

        barrel = game.add.sprite(centerX, centerY, 'barrel');
        barrel.anchor.setTo(0.8, 0.5);
        barrel.scale.setTo(-0.4, 0.5);

        enemy = game.add.sprite(100, 200, 'face');
        game.physics.enable(enemy);

        enemyGroup = game.add.group();
        enemyGroup.enableBody =true;
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;

        for (var i=0 ; i<3 ; i++)
            {
                enemyGroup.create(1600, 350*i +100, 'face');
            }
        //enemyGroup.setAll('anchor.x',0.3);
        //enemyGroup.setAll('anchor.y',-0.3);
        enemyGroup.setAll('scale.x',0.5);
        enemyGroup.setAll('scale.y',0.5);
    },
    update: function () {
        barrel.rotation = game.physics.arcade.angleToPointer(barrel);
        if (game.input.activePointer.isDown) {
            this.fire();
        }

        game.physics.arcade.overlap(bullets, enemy, this.hitEnemy);
        game.physics.arcade.overlap(bullets, enemyGroup, this.hitGroup);
    },
    fire: function () {
        if (game.time.now > nextFire) {
            nextFire = game.time.now + fireRate;
            console.log('Firing!');
            bullet = bullets.getFirstDead();
            bullet.reset(barrel.x, barrel.y);

            game.physics.arcade.moveToPointer(bullet, velocity);
            bullet.rotation = game.physics.arcade.angleToPointer(bullet);
        }

    },
    hitEnemy: function () {
        console.log('hit');
        bullet.kill();
        enemy.kill();
    },
    hitGroup: function(b ,a ){
        b.kill();
        a.kill();
    }
};
