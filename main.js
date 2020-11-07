

var canvas=new fabric.Canvas("myCanvas");
block_img_width= 30;
block_img_height= 30;
player_x=10;
player_y=10;
var player_object="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
});


}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimg_object=Img;
        blockimg_object.scaleToWidth(block_img_width);
        blockimg_object.scaleToHeight(block_img_height);
        blockimg_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(blockimg_object);
    });
    
    
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        keypressed=e.keyCode;
        console.log(keypressed);
        if (keypressed=="84"){
            console.log("t");
            new_image("trunk.jpg");

        
        }
        if (keypressed=="68"){
            console.log("d");
            new_image("dark_green.png");

        
        }
        if (keypressed=="76"){
            console.log("l");
            new_image("light_green.png");

        
        }
        if (keypressed=="71"){
            console.log("g");
            new_image("ground.png");

        
        } if (keypressed=="87"){
            console.log("w");
            new_image("wall.jpg");

        
        }
        if (keypressed=="89"){
            console.log("y");
            new_image("yellow_wall.png");

        
        }
        if (keypressed=="85"){
            console.log("u");
            new_image("unique.png");

        
        }
        if (keypressed=="82"){
            console.log("r");
            new_image("roof.jpg");

        
        }
        if (keypressed=="67"){
            console.log("c");
            new_image("cloud.jpg");

        
        }
        if(keypressed=="38"){
            console.log("up");
            up();
        }
        if(keypressed=="40"){
            console.log("down");
            down();
        }
        if(keypressed=="37"){
            console.log("left");
            left();
        }
        if(keypressed=="39"){
            console.log("right");
            right();
        }
        if (e.shiftKey==true && keypressed=="80"){
            block_img_height=block_img_height+10;
            block_img_width=block_img_width+10;
            document.getElementById("width").innerHTML=block_img_width;
            document.getElementById("height").innerHTML=block_img_height;
        }
        if (e.shiftKey==true && keypressed=="77"){
            block_img_height=block_img_height-10;
            block_img_width=block_img_width-10;
            document.getElementById("width").innerHTML=block_img_width;
            document.getElementById("height").innerHTML=block_img_height;
        }

    }
    function up(){
if (player_y>0){
player_y=player_y-block_img_height;
canvas.remove(player_object);
player_update();
};
    };
    function down(){
        if (player_y<600){
        player_y=player_y+block_img_height;
        canvas.remove(player_object);
        player_update();
        };
            }
            function left(){
                if (player_x<1000){
                player_x=player_x-block_img_height;
                canvas.remove(player_object);
                player_update();
                };
            }
                function right(){
                    if (player_x<1000){
                        player_x=player_x+block_img_height;
                        canvas.remove(player_object);
                        player_update();
                        };
                };