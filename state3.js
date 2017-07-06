demo.state3 = function () {};
demo.state3.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#ff8000';
        console.log('state3');
        addChangeStateEventListeners();
    },
    update: function () {}
};
