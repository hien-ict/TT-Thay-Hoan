demo.state8 = function () {};
demo.state8.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#00ff99';
        console.log('state8');
        addChangeStateEventListeners();
    },
    update: function () {}
};
