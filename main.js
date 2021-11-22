var canvas=new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_img_object= "";

function new_image(_get_img)
{
	fabric.Image.fromURL(get_image,function(Img){
        blockImageObject=Img;
        blockImageObject.scaleToWidth(block_image_width);
        blockImageObject.scaleToHeight(block_image_height);
        blockImageObject.set({
            top:block_y,
            left:block_x
		});
		canvas.add(block_image_object);
	});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
var keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == "82")
	{
		new_image('rr1.png');
		console.log("r");
		window.addEventListener("keydown",my_keydown);
	}
	if(keyPressed == "71")
	{
		block_x = 200;
		new_image('gr.png');
		console.log("g");
		window.addEventListener("keydown",my_keydown);
	}
	
	if(keyPressed == "89")
	{
		block_x =350;
		new_image('yr.png');
		console.log("y");
		window.addEventListener("keydown",my_keydown);
	}
	if(keyPressed == "80")
	{
		block_x = 600;
		new_image('pr.png');
		console.log("p");
		window.addEventListener("keydown",my_keydown);
	}
	if(keyPressed == "66")
	{
		block_x = 700;
		new_image('br.png');
		console.log("b");
		window.addEventListener("keydown",my_keydown);
	}
	
}
