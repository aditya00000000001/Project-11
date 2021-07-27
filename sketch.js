    var jaxon ;
    var jaxonimg ;
    var path ;
    var pathimg;
    var invisibleGround ; 
    var invisibleGround2 ;
    var edges ;

function preload(){

  //pre-load images
    jaxonimg = loadAnimation("Runner-1.png","Runner-2.png") ;
    pathimg = loadImage("path.png") ;

}

function setup(){
  createCanvas(400,400);
  //create sprites here
    path = createSprite(200,100,400,400) ;
    path.addImage(pathimg) ;
    path.velocityY = 5 ;

    invisibleGround = createSprite(40,200,10,380);
  invisibleGround.visible = false ; 

  invisibleGround2 = createSprite(360,200,10,380);
  invisibleGround2.visible = false ; 
    
  jaxon = createSprite(200,200,120,100) ;
  jaxon.addAnimation("running",jaxonimg) ; 
  jaxon.scale = 0.05 ;  
  
  

  edges = createEdgeSprites () ;

}

function draw() {

  

  background("black") ;

jaxon.x = World.mouseX ;

  if( path.y > 400 ) {
    path.y = 200 ;
  }
  jaxon.collide(invisibleGround) ;
  jaxon.collide(invisibleGround2) ;
  jaxon.collide(edges[3]) ;

  
 drawSprites () ; 
}




 