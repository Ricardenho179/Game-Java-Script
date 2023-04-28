// alert("Descubra as funcionalidades de cada quadrado")
function startGame() {
    myGameArea.start();
    GamePiece1 = new component(15, 15, "grey", 30, 20);
    GamePiece2 = new component(15, 15, "green", 30, 70);    
    myGamePiece = new component(15, 15, "black", 30, 120);
    GamePiece4 = new componentAutomatic(15, 15, "blue",37, 170);
    GamePiece5 = new componentAutomatic(15, 15, "red", 37, 220);
    GamePiece6 = new componentAutomatic(15,15,"orange", 37, 270)
    GamePiece3 = new component(15, 15, "purple", 30, 320);
    GamePieceG = new component(15, 15, "#191970", 1035, 660);
    obstacle  = new component(10, 700, "yellow", 1070, 0);
    obstacle2  = new component(1100, 10, "yellow", 0, 0);
    obstacle3  = new component(1100, 10, "yellow", 0, 690);
    obstacle4  = new component(10, 700, "yellow", 0, 0);
    obstacle5 = new component(10, 150, "yellow", 70, 0);
    obstacle6 = new component(10, 300, "yellow", 900, 360);
    obstacle7 = new component(300, 10, "yellow", 600, 400);
    obstacle8 = new component(620, 10, "yellow", 250, 550);
    obstacle9 = new component(400, 10, "yellow", 500, 510);
    obstacleG = new component(150, 10, "#191970", 870, 550);
    blackObstacle = new component(10,200, "black", 310,0);
    greyObstacle = new component(10, 430, "grey", 770,35);
    greenObstacle = new component(570, 10, "green", 0,400);
    blueObstacle = new component(10, 180 ,"blue", 110, 50);
    orangeObstacle = new component(210, 10, "orange", 0, 550);
    redObstacle = new component(1030,10,"red", 0,230);
    area = new component(30, 30, "#11b06a", 860, 470);
}
function componentAutomatic(width, height, color, x, y, type) {
  this.type = type;
  this.width = width;
  this.moveAngle = 1;
  this.height = height;
  this.speed = 1;
  this.angle = 0;
  this.x = x;
  this.y = y;    
  this.update = function() {
    if (!this.deleted){
      ctx = myGameArea.context;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillStyle = color;
      ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);        
      ctx.restore();  
      } 
  }
  this.newPosBlue = function() {
    this.angle += this.moveAngle * Math.PI / 30;
    this.x += this.speed + 4;
    this.y += this.speed = 0;
    if (this.x >= 295) {
      this.x += this.speed - 4;
      this.y += this.speed + 4;
      if (this.y >= 215) {
        this.x += this.speed + 4;
        this.y += this.speed - 4;
        if (this.x >= 755) {
          this.x += this.speed = -4;
          this.y += this.speed = -8;
        }
      }
    }
  }
  this.newPosRed = function() {
    this.angle += this.moveAngle * Math.PI / 30;
    this.y += this.speed * 5;
    this.x -= this.speed * 0;
    if (this.y >= 300) {
      this.x += this.speed * 5;
      this.y -= this.speed * 5;
      if(this.x >= 580 ) {
        this.x -= this.speed * 5;
        this.y += this.speed * 5;
        if(this.y >= 495) {
          this.y -= this.speed * 5;
          this.x += this.speed * 5;
          if(this.x >= 800) {
            this.y -= this.speed * 0;
            this.x -= this.speed * 5;
          }
        }
      }
    }
  }
  this.newPosOrange = function() {
    this.angle += this.moveAngle * -500;
    this.x += this.speed * 8;
    this.y -= this.speed * 0;
    if (this.x >= 750) {
      this.x = 100;
      this.y = 600;
      this.x += this.speed = 10;
      this.angle += this.moveAngle * -50;
      // if (this.x >= 500) { 
      //   this.x = 600;
      //   this.y = 500;
      //   if (this.y == 800) {
      //     this.x = 37;
      //     this.y = 500;
      //     if (this.x == 37) {
      //       this.x = 860;
      //       this.y = 470;
      //     }
      //   }
      // }  
    }
  }
  this.crashWith = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    crash = false
    if ((mybottom < othertop) ||
    (mytop > otherbottom) ||
    (myright < otherleft) ||
    (myleft > otherright)) {
      
    } else if(otherobj == area ) {
      crash = true
      return crash 
    } else {
      this.delete()
    }
  }
  this.delete = function() {
    this.deleted = true
    // ctx.clearRect(this.x, this.y, this.width, this.height);
    this.x += this.speedX = 100000000000
    this.y += this.speedY = 100000000000
  }
}
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.deleted = false    
    this.update = function() {
      if (!this.deleted){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.crashWith = function(otherobj) {
      var myleft = this.x;
      var myright = this.x + (this.width);
      var mytop = this.y;
      var mybottom = this.y + (this.height);
      var otherleft = otherobj.x;
      var otherright = otherobj.x + (otherobj.width);
      var othertop = otherobj.y;
      var otherbottom = otherobj.y + (otherobj.height);
      crash = false
      if ((mybottom < othertop) ||
      (mytop > otherbottom) ||
      (myright < otherleft) ||
      (myleft > otherright)) {
        
      } else if(otherobj == area ) {
        crash = true
        return crash 
      } else {
        this.delete()
      }
    }
    this.delete = function() {
      this.deleted = true
      // ctx.clearRect(this.x, this.y, this.width, this.height);
      this.x += this.speedX = 100000000000
      this.y += this.speedY = 100000000000

    }
}









