function Asteroid(pos, r) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height));
  }
  if (r) {
    this.r = r * 0.5;
  } else {
    this.r = random(15, 90);
  }


  this.vel = p5.Vector.random2D();
  this.total = floor(random(5, 12));
  this.offset = [];
  for (var i = 0; i < this.total; i++) {
    this.offset[i] = random(-this.r * 0.2, this.r * 0.2);
  }

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function() {
    push();
    stroke(61, 255, 253);
    fill(255);
    translate(this.pos.x, this.pos.y);
    //ellipse(0, 0, this.r * 2);
    beginShape();
    for (var i = 0; i < this.total; i++) {
      var angle = map(i, 0, this.total, 0, TWO_PI);
      var r = this.r + this.offset[i];
      var x = r * cos(angle);
      var y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);


    pop();
  }

  this.breakup = function() {
    speedy = speedy + 0.02
    scorey = scorey + 150
    var newA = [];
    newA[0] = new Asteroid(this.pos, this.r + 5);
    newA[1] = new Asteroid(this.pos, this.r + 5);
    newA[2] = new Asteroid(this.pos, this.r + 5);
    return newA;
  }

  this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

}