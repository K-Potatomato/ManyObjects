function setup() {
  createCanvas(400, 400);
  m = new Mover(50, 50, 10);
  m2 = new Mover(300,300,50);
  for (let i = 0; i <5; i++){
    let mover = new Mover(random(400),random(400),random(5, 10));
    movers.push(mover);
  }
}

function draw() {
  background(220);

  for( let mover of movers){
    mover.update();
    mover.show();
  }

  m.update();
  m.show();
  m2.update();
  m2.show();

  if (mouseIsPressed) {
    //make attract to mouse position
    let mousePos = createVector(mouseX, mouseY);

    for( let mover of movers){
     mover.attractTo(mousePos);
    }
    m.attractTo(mousePos);
    m2.attractTo(mousePos);
    // let f = p5.Vector.sub(mousePos, m.pos);
    // f.limit(2);
    // m.applyForce(f);
    //
    // let f2 = p5.Vector.sub(mousePos, m2.pos);
    // f2.limit(2);
    // m2.applyForce(f2);
  }
}
