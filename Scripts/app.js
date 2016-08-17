/*Hassan Kobeissi - 300847239
Date Modified : 2016-08-17
Date Created: 2016-08-17
This is the mains JavaScript File
*/
var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    //Button Variable   

    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;

       
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        var x = 81;
        var y = 100;
        stage.update();
    }
    //Rolls the Dice
    function rollDice() {

        var random = Math.random(0,6);
    }
    function main() {
        //Adding the Image
        var blank = new createjs.Bitmap("Assets/images/blank.png");
         var rollButton = new createjs.Bitmap("Assets/images/rollButton.png");

        //Adding to the stage
       stage.addChild(rollButton);
       stage.addChild(blank);

    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map