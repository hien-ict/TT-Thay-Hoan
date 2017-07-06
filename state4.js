demo.state4 = function () {};
demo.state4.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#ff1a75';

        addChangeStateEventListeners();
    },
    update: function () {}
};
