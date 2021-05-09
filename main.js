var canvas=new fabric.Canvas('Canvas');
var blockDimension=50;
var playerObject;
var blockObject;
var playerX=100;
var playerY=100;
var x;
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(50);
        playerObject.scaleToHeight(120);
        playerObject.set({
            top:playerY, 
            left:playerX
        });
        canvas.add(playerObject);
    });
}
function key_down(keydown){
    if(keydown.shiftKey==true && keydown.keyCode==187){
        blockDimension+=5;
        document.getElementById("dimension1").textContent=blockDimension;
        document.getElementById("dimension2").textContent=blockDimension;
    }
    if(keydown.shiftKey==true && keydown.keyCode==189){
        blockDimension-=5;
        document.getElementById("dimension1").textContent=blockDimension;
        document.getElementById("dimension2").textContent=blockDimension;
    }
    if(keydown.keyCode==65){
        block_update("hulk_face.png");
        console.log("a");
    }
    if(keydown.keyCode==66){
        block_update("hulk_left_hand.png");
        console.log("b");
    }
    if(keydown.keyCode==67){
        block_update("hulk_legs.png");
    }
    if(keydown.keyCode==68){
        block_update("hulk_right_hand.png");
    }
    if(keydown.keyCode==69){
        block_update("hulkd_body.png");
    }
    if(keydown.keyCode==70){
        block_update("ironman_body.png");
    }
    if(keydown.keyCode==71){
        block_update("ironman_face.png");
    }
    if(keydown.keyCode==72){
        block_update("ironman_left_hand.png");
    }
    if(keydown.keyCode==73){
        block_update("ironman_legs.png");
    }
    if(keydown.keyCode==74){
        block_update("ironman_right_hand.png");
    }
    if(keydown.keyCode==75){
        block_update("spiderman_body.png");
    }
    if(keydown.keyCode==76){
        block_update("spiderman_face.png");
    }
    if(keydown.keyCode==77){
        block_update("spiderman_left_hand.png");
    }
    if(keydown.keyCode==78){
        block_update("spiderman_legs.png");
    }
    if(keydown.keyCode==79){
        block_update("spiderman_right_hand.png");
    }
    if(keydown.keyCode==80){
        block_update("thor_face.png");
    }
    if(keydown.keyCode==81){
        block_update("thor_left_hand.png");
    }
    if(keydown.keyCode==82){
        block_update("thor_right_hand.png");
    }
    if(keydown.keyCode==37){
        left()
    }
    if(keydown.keyCode==38){
        up()
    }
    if(keydown.keyCode==39){
        right()
    }
    if(keydown.keyCode==40){
        down()
    }
}
player_update();

function block_update(blockType){
    fabric.Image.fromURL(blockType, function(Img){
        blockObject=Img;
        blockObject.scaleToWidth(blockDimension);
        blockObject.scaleToHeight(blockDimension);
        blockObject.set({
            top:playerY, 
            left:playerX
        });
        canvas.add(blockObject);
    });
}
function up(){
    if(playerY>=5){
        playerY-=blockDimension;
        canvas.remove(playerObject);
        player_update();
    }
};
function down(){
    if(playerY<=455){
        playerY+=blockDimension;
        canvas.remove(playerObject);
        player_update();
    }
};
function left(){
    if(playerX>=5){
        playerX-=blockDimension;
        canvas.remove(playerObject);
        player_update();
    }
};
function right(){
    if(playerX<=795){
        playerX+=blockDimension;
        canvas.remove(playerObject);
        player_update();
    }
};
window.addEventListener('keydown',key_down);