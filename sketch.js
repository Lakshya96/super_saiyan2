const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, goku, vegeta, ground, nimbus, gokuPunching, vegetaPunching;

function preload() {
    
}

function setup(){
    createCanvas(1300,650);
    engine = Engine.create();
    world = engine.world;
    goku=new Goku(850,400,100,200);
    vegeta=new Vegeta(150,400,100,200);
    ground=new Ground(width/2, height-10, width, 20);
}

function draw(){
    background(255);
    Engine.update(engine);
    Engine.run(engine);
    goku.display();
    vegeta.display();
    ground.display();
}

function keyPressed() {
    if (keyCode===LEFT_ARROW) {
        Matter.Body.translate(goku.body,{x:-50, y:0});
    }
    if (keyCode===RIGHT_ARROW) {
        Matter.Body.translate(goku.body,{x:50, y:0});
    }
    if (keyCode===UP_ARROW) {
        goku.punch(); 
    }
    if (keyCode===65) {
        Matter.Body.translate(vegeta.body,{x:-50, y:0});
    }
    if (keyCode===68) {
        Matter.Body.translate(vegeta.body,{x:50, y:0});
    }
    if (keyCode===83) {
        vegeta.punch();
    }
}

function gokuPunch() {
    if (goku.body.position.x<=vegeta.body.position.x) {
        gokuPunching=loadImage()
    }
}