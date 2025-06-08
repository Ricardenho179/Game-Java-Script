function startGame() {
  myGameArea.start();
  myGamePiece = new component(15, 15, "black", 30, 120);
  GamePiece1 = new component(15, 15, "grey", 30, 20);
  GamePiece2 = new component(15, 15, "green", 30, 70);    
  GamePiece3 = new component(15, 15, "purple", 30, 320);
  GamePiece4 = new componentAutomatic(15, 15, "blue",30, 170);
  GamePiece5 = new componentAutomatic(15, 15, "red", 30, 220);
  GamePiece6 = new componentAutomatic(15,15,"orange", 30, 270);
  GamePiece7 = new component(15, 15, "#b0fb84", 30, 45);
  GamePieceG = new component(15, 15, "#191970", 1035, 660);
  GamePieceS = new component(15, 15, "#9042df", 855,528);
  obstacle  = new component(10, 700, "yellow", 1070, 0);
  obstacle2  = new component(1100, 10, "yellow", 0, 0);
  obstacle3  = new component(1100, 10, "yellow", 0, 690);
  obstacle4  = new component(10, 700, "yellow", 0, 0);
  obstacle5 = new component(10, 150, "yellow", 70, 0);
  obstacle6 = new component(10, 300, "yellow", 900, 360);
  obstacle7 = new component(300, 10, "yellow", 600, 400);
  obstacle8 = new component(620, 10, "yellow", 250, 550);
  obstacle9 = new component(400, 10, "yellow", 500, 510);
  //Obstáculo Satuurado
  obstacle10 = new component(400, 10, "#b0fb84", 370, 45);
  obstacleG = new component(150, 10, "#191970", 870, 550);
  obstacleS = new component(740, 10, "#9042df", 36, 315);
  blackObstacle = new component(10, 175, "black", 310,10);
  greyObstacle = new component(10, 430, "grey", 770,45);
  greenObstacle = new component(550, 10, "green", 10,400);
  blueObstacle = new component(10, 180 ,"blue", 110, 50);
  orangeObstacle = new component(200, 10, "orange", 10, 550);
  redObstacle = new component(1000,10,"red", 10,230);
  purpleObstacle = new component(10, 75, "purple", 230, 360)
  
  area = new componentRound(15, "#11b06a", 860, 490);
}
function componentAutomatic(width, height, color, x, y, type, orientation) {
  this.type = type;
  this.width = width;
  this.moveAngle = 1;
  this.height = height;
  this.speed = 1;
  this.angle = 0;
  this.x = x;
  this.y = y; 
  this.step = 0;
  this.orientation = orientation || 'left';   
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
  //Bot azul
  this.newPosBlue = function() {
    this.angle += this.moveAngle * Math.PI / 30;

    let vx = 0;
    let vy = 0;

    switch (this.step) {
      case 0:
        // Etapa 0: descer até y = 170
        vy = 4;
        if (this.y >= 170) {
          this.y = 170; // Corrige caso passe
          this.step = 1;
        }
        break;

      case 1:
        // Etapa 1: andar pra direita até x = 285/290
        vx = 4;
        if (this.x >= 290) {
          this.x = 285;
          this.step = 2;
        }
        break;

      case 2:
        // Etapa 2: descer até y = 215
        vy = 4;
        if (this.y >= 210) {
          this.y = 210;
          this.step = 3;
        }
        break;

      case 3:
        // Etapa 3: andar pra direita até x = 350
        vx = 4;
        if (this.x >= 340) {
          this.x = 340;
          this.step = 4;
        }
        break;

      case 4:
        // Etapa 4: subir até y = 170
        vy = -4;
        if (this.y <= 28) {
          this.y = 28;
          this.step = 5;
        }
        break;

      case 5:
        // Etapa 5: andar para a direita até x = 1040
        vx = 4;
        if (this.x >= 1040) {
        this.x = 1040;
        this.step = 6;
      }
        break;

      case 6:
      // Etapa 6: andar para baixo até y = 670
      vy = 4;
      if (this.y >= 670) {
      this.y = 670;
      this.step = 7;
      }
      break;

      case 7:
      // Etapa 7: andar para a esquerda até x = 230
      vx = -4;
      if (this.x <= 230){
        this.x = 230;
        this.step = 8;
      }
      break;

      case 8:
      // Etapa 8: andar cima até y = 490
      vy = -4;
      if (this.y <= 500){
        this.step = 9;
      }
      break;

      case 9:
      // Etapa 8: andar para a direita até x = 845
      vx = 4;
      if (this.x >= 825){
        this.step = 10;
      }
      break;
    }

    this.x += vx;
    this.y += vy;
  }

  //Bot Vermelho
  this.newPosRed = function() {
    this.angle += this.moveAngle * Math.PI / 25;
    
    let vx = 0;
    let vy = 0;

    switch (this.step) {
      case 0:
        // Etapa 0: ir um pouquinho para a esquerda até x = 25
        vx = -5;
        if (this.x <= 27) {
          this.step = 1;
        }
        break;
       
      case 1:
        // Etapa 1: ir para baixo até y = 355
        vy = 5;
        if (this.y >= 355) {
          this.step = 2;
        }
        break;

      case 2:
        // Etapa 2: ir para a direita até x = 570
        vx = 5;
        if (this.x >= 570) {
          this.step = 3;
        }
        break;

      case 3:
        // Etapa 3: ir para a baixo até y = 485
        vy = 5;
        if (this.y >= 485) {
          this.step = 4;
        }
        break;

      case 4:
        // Etapa 4: ir para a direita até x = 825
        vx = 5;
        if (this.x >= 820) {
          this.step = 5;
        }
        break;

    }

    this.x += vx;
    this.y += vy;
  }
  //Bot laranja
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
    ctx.clearRect(this.x, this.y, this.width, this.height);
    this.x += this.speedX = +100000000000
    this.y += this.speedY = +100000000000
  }
  this.crashWithArea = function(otherobjRedondo,otherobjQuadrado) {
    this.collisionCircleRect(otherobjRedondo,otherobjQuadrado)
    if(this.collisionCircleRect(otherobjRedondo,otherobjQuadrado)) {
        crash = true
        return crash 
      } 
    }
    this.collisionCircleRect = function(otherobjRedondo,otherobjQuadrado) {
      // calcula a distância entre o centro da circunferência e o centro do retângulo
      let distX = Math.abs(otherobjRedondo.x - otherobjQuadrado.x - otherobjQuadrado.width / 2);
      let distY = Math.abs(otherobjRedondo.y - otherobjQuadrado.y - otherobjQuadrado.height / 2);
  
      // verifica se a distância é maior que a soma dos raios da circunferência e a metade da largura ou altura do retângulo
      if (distX > (otherobjQuadrado.width / 2 + otherobjRedondo.radius)) {
        return false;
      }
      if (distY > (otherobjQuadrado.height / 2 + otherobjRedondo.radius)) {
        return false;
      }
  
      // verifica se a distância é menor que a soma dos raios da circunferência e a metade da largura ou altura do retângulo
      if (distX <= otherobjQuadrado.width / 2) {
        return true;
      }
      if (distY <= otherobjQuadrado.height / 2) {
        return true;
      }
  
      // verifica se a distância ao quadrado é menor que a soma dos quadrados dos raios da circunferência
      let dx = distX - otherobjQuadrado.width / 2;
      let dy = distY - otherobjQuadrado.height / 2;
      return (dx*dx+dy*dy<=(otherobjRedondo.radius*otherobjRedondo.radius));
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
  this.crashWithArea = function(otherobjRedondo,otherobjQuadrado) {
  // this.collisionCircleRect(otherobjRedondo,otherobjQuadrado)
  if(this.collisionCircleRect(otherobjRedondo,otherobjQuadrado)) {
      crash = true
      return crash 
    } 
  }
  this.collisionCircleRect = function(otherobjRedondo,otherobjQuadrado) {
    // calcula a distância entre o centro da circunferência e o centro do retângulo
    let distX = Math.abs(otherobjRedondo.x - otherobjQuadrado.x - otherobjQuadrado.width / 2);
    let distY = Math.abs(otherobjRedondo.y - otherobjQuadrado.y - otherobjQuadrado.height / 2);

    // verifica se a distância é maior que a soma dos raios da circunferência e a metade da largura ou altura do retângulo
    if (distX > (otherobjQuadrado.width / 2 + otherobjRedondo.radius)) {
      return false;
    }
    if (distY > (otherobjQuadrado.height / 2 + otherobjRedondo.radius)) {
      return false;
    }

    // verifica se a distância é menor que a soma dos raios da circunferência e a metade da largura ou altura do retângulo
    if (distX <= otherobjQuadrado.width / 2) {
      return true;
    }
    if (distY <= otherobjQuadrado.height / 2) {
      return true;
    }

    // verifica se a distância ao quadrado é menor que a soma dos quadrados dos raios da circunferência
    let dx = distX - otherobjQuadrado.width / 2;
    let dy = distY - otherobjQuadrado.height / 2;
    return (dx*dx+dy*dy<=(otherobjRedondo.radius*otherobjRedondo.radius));
  }
}

function componentRound(radius, color, x, y) {
  this.radius = radius;
  this.color = color;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI); // desenha a bola
    ctx.fill();
  }
}







