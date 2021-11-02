let movers = [];
function setup() {
  createCanvas(400, 400);

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

  if (mouseIsPressed) {
    //make attract to mouse position
    let mousePos = createVector(mouseX, mouseY);

    for( let mover of movers){
     mover.attractTo(mousePos);
    }
  }
}
