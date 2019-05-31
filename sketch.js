var ship;
var dirx = 1;
var scorey = 0;
var speedy = 0.01;
var asteroids = [];
var lasers = [];
var points = [100, 50, 20];

function setup() { 
   createCanvas(750, 750);
  ship = new Ship();
  nave = loadImage("Nave test.png");
  laizer = loadImage("Laizer.png")
  for (var i = 0; i < 5; i++) {
  	asteroids.push(new Asteroid());
  }
} 

function draw() {
  background(22,27,97,50);
  
  textSize(32);
  text('Score:' + scorey, 10, 40);
  stroke:(11)
  fill(0, 102, 153);
  
  for (var i = 0; i < asteroids.length; i++) {
    if (ship.hits(asteroids[i])) {
      document.location.reload();
          }
    asteroids[i].render();
  	asteroids[i].update();
    asteroids[i].edges();
  }
  
  for (var i = lasers.length-1; i >= 0; i--) {
    lasers[i].render();
  	lasers[i].update();
    if (lasers[i].offscreen()) {
      lasers.splice(i, 1);
    } else {
    	for (var j = asteroids.length-1; j >= 0; j--) {
    		if (lasers[i].hits(asteroids[j])) {
    	    if (asteroids[j].r > 10) 
            [asteroids[j].size];
              {
    	  		var newAsteroids = asteroids[j].breakup();
    	    	asteroids = asteroids.concat(newAsteroids);
    	    }
    	    asteroids.splice(j, 1);
    	    lasers.splice(i, 1);
    	    break;
    		}
    	}
    }
  }
  
  console.log(lasers.length);
  
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
  
  
}

function keyReleased() {
  ship.setRotation(0);
  ship.boosting(false);
}
 function preload() {
  soundFormats('mp3', 'ogg');
  lasi = loadSound('laser.wav');
}

function keyPressed() {
  if (key == ' ') {
  	lasers.push(new Laser(ship.pos, ship.heading));
    lasi.play();
	} else if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true);
    dirx = 1;
  } else if (keyCode == DOWN_ARROW) {
    ship.boosting(true);
    dirx = -1/2;
  }

}
