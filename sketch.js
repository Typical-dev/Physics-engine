const Engine=Matter.Engine,
 World=Matter.World, 
 Bodies=Matter.Bodies;
var engine,world;
var object,ground;

function setup() {
   createCanvas(400,400);
    engine=Engine.create();
     world = engine.world;

     var ball_options={ 'restitution': 1.5}
      var options={ 'isStatic':true }

       ground=Bodies.rectangle(200,400,400,50,options);
        object=Bodies.circle(200,100,50,ball_options);
         World.add(world,object);
          World.add(world,ground);
           console.log(object);

           } function draw() {
              background(0,0,0);
               Engine.update(engine);
                ellipseMode(RADIUS);
                 ellipse(object.position.x,object.position.y,50);
                 rectMode(CENTER);
                  rect(ground.position.x,ground.position.y,400,50)
                  
                 }
