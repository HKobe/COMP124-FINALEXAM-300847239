/*Hassan Kobeissi - 300847239
Date Modified : 2016-08-17
Date Created: 2016-08-17
*/
var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    //Button Variable   
     var rollButton;

    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        //Creating the button with createjs
       var rollButton = new createjs.Bitmap("Assets\images\rollButton.png");
       
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        stage.update();
    }
    //Rolls the Dice
    function rollDice() {

        var random = Math.random(0,6);
    }
    function main() {
        //Adding to the stage
       stage.addChild(rollButton);

    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map