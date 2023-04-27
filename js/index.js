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
    obstacle  = new component(10, 700, "yellow", 1070, 0);
    obstacle2  = new component(1100, 10, "yellow", 0, 0);
    obstacle3  = new component(1100, 10, "yellow", 0, 690);
    obstacle4  = new component(10, 700, "yellow", 0, 0);
    obstacle5 = new component(10, 150, "yellow", 70, 0);
    obstacle6 = new component(10, 300, "yellow", 900, 360);
    obstacle7 = new component(300, 10, "yellow", 600, 400);
    obstacle8 = new component(620, 10, "yellow", 250, 550);
    obstacle9 = new component(400, 10, "yellow", 500, 510);
    blackObstacle = new component(10,200, "black", 310,0);
    greyObstacle = new component(10, 430, "grey", 770,35);
    greenObstacle = new component(570, 10, "green", 0,400);
    blueObstacle = new component(10, 180 ,"blue", 110, 50);
    orangeObstacle = new component(210, 10, "orange", 0, 550);
    redObstacle = new component(1030,10,"red", 0,230);
    area = new component(30, 30,"#11b2223a", 860, 470) 
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
    this.x += this.speed * 5;
    this.y -= this.speed * 0;
    if (this.x >= 300) {
      this.x -= this.speed * 5;
      this.y += this.speed * 5;
      
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
    this.angle += this.moveAngle * Math.PI / 20;
    this.x += this.speed * 5;
    if(this.x >= 580 ) {
      this.x -= this.speed * 5;
      
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
    ctx.clearRect(this.x, this.y, this.width, this.height)
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
      ctx.clearRect(this.x, this.y, this.width, this.height)
    }
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1080;
        this.canvas.height = 700;
        this.canvas.id = "idCanvas";
        this.canvas.style.cursor = "none";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        //inserindo comando por teclado
        window.addEventListener('keydown', function (e) {
          myGameArea.keys = (myGameArea.keys || []);
          myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
          myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('mousemove', function (e) {
          myGameArea.x = e.pageX;
          myGameArea.y = e.pageY;
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
      clearInterval(this.interval)
    }
}

function updateGameArea() {
    //caso queira criar uma trilha de onde foi andado tirar o clear()
    if (myGamePiece.crashWith(obstacle) || myGamePiece.crashWith(obstacle2) || 
    myGamePiece.crashWith(obstacle3)|| myGamePiece.crashWith(obstacle4) || 
    myGamePiece.crashWith(obstacle5) || myGamePiece.crashWith(obstacle6) || 
    myGamePiece.crashWith(obstacle8) || myGamePiece.crashWith(obstacle9) ||
    myGamePiece.crashWith(greenObstacle) || myGamePiece.crashWith(greyObstacle) ||
    myGamePiece.crashWith(orangeObstacle) || 
    myGamePiece.crashWith(blueObstacle) || myGamePiece.crashWith(redObstacle) ||

    myGamePiece.crashWith(area)) {
        if(myGamePiece.crashWith(area)) {
          alert("O quadrado preto ganhou, por favor aperte F5");
        }
        
        
    } else if (GamePiece1.crashWith(obstacle)|| GamePiece1.crashWith(obstacle2) || 
      GamePiece1.crashWith(obstacle3)|| GamePiece1.crashWith(obstacle4)|| 
      GamePiece1.crashWith(obstacle5) || GamePiece1.crashWith(obstacle6) ||
      GamePiece1.crashWith(obstacle8) || GamePiece1.crashWith(obstacle9) ||
      GamePiece1.crashWith(greenObstacle) || GamePiece1.crashWith(blackObstacle) ||
      GamePiece1.crashWith(orangeObstacle) || 
      GamePiece1.crashWith(blueObstacle) || GamePiece1.crashWith(redObstacle) ||


      GamePiece1.crashWith(area)) {
      if(GamePiece1.crashWith(area)) {
        alert("O quadrado cinza ganhou, por favor aperte F5");
      }
      
    } else if(GamePiece2.crashWith(obstacle) || GamePiece2.crashWith(obstacle2) || 
    GamePiece2.crashWith(obstacle3)|| GamePiece2.crashWith(obstacle4)|| 
    GamePiece2.crashWith(obstacle5) || GamePiece2.crashWith(obstacle6) ||
    GamePiece2.crashWith(obstacle8) || GamePiece2.crashWith(obstacle9) ||   
    GamePiece2.crashWith(blackObstacle) || GamePiece2.crashWith(greyObstacle) ||
    GamePiece2.crashWith(orangeObstacle) || 
    GamePiece2.crashWith(blueObstacle) || GamePiece2.crashWith(redObstacle) || 
    GamePiece2.crashWith(area)) {
      if(GamePiece2.crashWith(area)) {
        alert("O quadrado verde ganhou, por favor aperte F5");
      }
      
    } 
    else if(GamePiece3.crashWith(obstacle)|| GamePiece3.crashWith(obstacle2) || 
    GamePiece3.crashWith(obstacle3)|| GamePiece3.crashWith(obstacle4) || 
    GamePiece3.crashWith(obstacle5) || GamePiece3.crashWith(obstacle6) ||
    GamePiece3.crashWith(obstacle8) || GamePiece3.crashWith(obstacle9) ||
    GamePiece3.crashWith(greenObstacle) || GamePiece3.crashWith(greyObstacle) ||
    GamePiece3.crashWith(orangeObstacle) || GamePiece3.crashWith(blackObstacle) ||
    GamePiece3.crashWith(blueObstacle) || GamePiece3.crashWith(redObstacle) ||
    GamePiece3.crashWith(area)) {
      if(GamePiece3.crashWith(area)) {
        alert("O quadrado roxo ganhou, por favor aperte F5");
      }
     
    }
     else if(GamePiece4.crashWith(obstacle) || GamePiece4.crashWith(obstacle2)|| 
     GamePiece4.crashWith(obstacle3) || GamePiece4.crashWith(obstacle4)|| 
     GamePiece4.crashWith(obstacle5) || GamePiece4.crashWith(obstacle6) ||
     GamePiece4.crashWith(obstacle8) || GamePiece4.crashWith(obstacle9) ||
     GamePiece4.crashWith(greenObstacle) || GamePiece4.crashWith(greyObstacle) ||
     GamePiece4.crashWith(orangeObstacle) || GamePiece4.crashWith(blackObstacle) ||
     GamePiece4.crashWith(redObstacle) ||
     GamePiece4.crashWith(area)) {
      if(GamePiece4.crashWith(area)) {
        alert("O quadrado azul ganhou, por favor aperte F5");
      }
      
      
    } else if(GamePiece5.crashWith(obstacle) || GamePiece5.crashWith(obstacle2)|| 
    GamePiece5.crashWith(obstacle3) || GamePiece5.crashWith(obstacle4)||
    GamePiece5.crashWith(obstacle5) || GamePiece5.crashWith(obstacle6) ||
    GamePiece5.crashWith(obstacle8) || GamePiece5.crashWith(obstacle9) ||
    GamePiece5.crashWith(greenObstacle) || GamePiece5.crashWith(greyObstacle) ||
    GamePiece5.crashWith(orangeObstacle) || GamePiece5.crashWith(blackObstacle) ||
    GamePiece5.crashWith(blueObstacle) ||
    GamePiece5.crashWith(area)) {
      if(GamePiece5.crashWith(area)) {
        alert("O quadrado vermelho ganhou, por favor aperte F5");
      }
      
    }
    else if (GamePiece6.crashWith(obstacle)|| GamePiece6.crashWith(obstacle2) || 
    GamePiece6.crashWith(obstacle3)|| GamePiece6.crashWith(obstacle4) ||
    GamePiece6.crashWith(obstacle5) || GamePiece6.crashWith(obstacle6) ||
    GamePiece6.crashWith(obstacle8) || GamePiece6.crashWith(obstacle9) ||
    GamePiece6.crashWith(greenObstacle) || GamePiece6.crashWith(greyObstacle) ||
    GamePiece6.crashWith(blueObstacle) || GamePiece6.crashWith(redObstacle) ||
    GamePiece6.crashWith(blackObstacle) || 
    GamePiece6.crashWith(area)) {
      if(GamePiece6.crashWith(area)) {
        alert("O quadrado laranja ganhou, por favor aperte F5");
      }
      
    }
    else {
    myGameArea.clear();
    //peça preta
    myGamePiece.newPos();
    myGamePiece.update();
    //peça cinza
    GamePiece1.newPos();
    GamePiece1.update();
    //peça verde
    GamePiece2.speedX = 0;
    GamePiece2.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[65]) {GamePiece2.speedX = -3; }
    if (myGameArea.keys && myGameArea.keys[68]) {GamePiece2.speedX = 3; }
    if (myGameArea.keys && myGameArea.keys[87]) {GamePiece2.speedY = -3; }
    if (myGameArea.keys && myGameArea.keys[83]) {GamePiece2.speedY = 3; }
    GamePiece2.newPos();
    GamePiece2.update();
    //peça roxa
    // if (myGameArea.x && myGameArea.y) {
    //   GamePiece3.x = myGameArea.x;
    //   GamePiece3.y = myGameArea.y;
    // }
    // GamePiece3.update();
    //peça azul
    GamePiece4.newPosBlue();
    GamePiece4.update();
    //peça vermelha
    GamePiece5.newPosRed();
    GamePiece5.update();
    //peça laranja
    GamePiece6.newPosOrange(GamePiece6);
    GamePiece6.update()
    // GamePiece7.update();
    //OBSTACULOS
    obstacle.update();
    obstacle2.update();
    obstacle3.update();
    obstacle4.update();
    obstacle5.update();
    obstacle6.update();
    obstacle7.update();
    obstacle8.update();
    obstacle9.update();
    blueObstacle.update();
    redObstacle.update();
    greyObstacle.update();
    blackObstacle.update();
    greenObstacle.update();
    orangeObstacle.update();
    //AREA DE VITÓRIA
    area.update();
  }
}

//CIMA
function moveupBlackPiece() {
  myGamePiece.speedY -= 1;
}
function moveUpGreyPiece() {
  GamePiece1.speedY -=1;
}
//BAIXO
function moveDownBlackPiece() {
  myGamePiece.speedY += 1;
}
function moveDownGreyPiece() {
  GamePiece1.speedY +=1;
}
//Esquerda
function moveLeftBlackPiece() {
  myGamePiece.speedX -= 1;
}
function moveLeftGreyPiece() {
  GamePiece1.speedX -= 1;
}
//Direita
function moveRightBlackPiece() {
  myGamePiece.speedX += 1;  
}
function moveRightGreyPiece() {
GamePiece1.speedX += 1;
}
//função de parar peça cinza
function stopMove() {
  GamePiece1.speedX = 0;
  GamePiece1.speedY = 0;
}

