var canvas=new fabric.Canvas('Canvas');
var blockDimension;
var playerObject;
var blockObject;
var playerX=100;
var playerY=100;
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth();
        playerObject.scaleToHeight();
        playerObject.({
            top:playerY, 
            left:playerX
        });
        canvas.add(playerObject);
    });
}