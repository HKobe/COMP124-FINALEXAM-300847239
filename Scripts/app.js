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

        stage.update();
    }
    //Rolls the Dice
    function rollDice() {

        var random = Math.random(0,6);
        var random2= Math.floor(0,6);
    }
    function main() {
        //Adding the Image
        
        var blank = new createjs.Bitmap("Assets/images/blank.png");
        var dice = new createjs.Bitmap("Assets/images/blank.png");
       /* var Dice1 = new createjs.Bitmap("Assets/images/1.png");
        var Dice2 = new createjs.Bitmap("Assets/images/2.png");
        var Dice3 = new createjs.Bitmap("Assets/images/3.png");
        var Dice4 = new createjs.Bitmap("Assets/images/4.png");
        var Dice5 = new createjs.Bitmap("Assets/images/5.png");
        var Dice6 = new createjs.Bitmap("Assets/images/6.png");*/
         var rollButton = new createjs.Bitmap("Assets/images/rollButton.png");

        //Adding to the stage
       stage.addChild(rollButton);
      /*  stage.addChild(Dice1);
        stage.addChild(Dice2);
        stage.addChild(Dice3);
        stage.addChild(Dice4);
        stage.addChild(Dice5);
        stage.addChild(Dice6);*/

        //Blanks
       stage.addChild(blank);
       stage.addChild(dice);
       //Co-ordinates
       rollButton.x = 250;
       rollButton.y = 300;

      blank.x=50;
      blank.y=50;
      dice.x=400;
      dice.y=50;
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map