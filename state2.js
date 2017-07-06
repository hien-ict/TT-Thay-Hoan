demo.state2 = function () {};
demo.state2.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#ff66ff';

        addChangeStateEventListeners();
    },
    update: function () {}
};
