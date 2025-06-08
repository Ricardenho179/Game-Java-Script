function updateGameArea() {
  //caso queira criar uma trilha de onde foi andado tirar o clear()

  // Regras de colisão da peça preta
  if (myGamePiece.crashWith(obstacle) || myGamePiece.crashWith(obstacle2) || 
    myGamePiece.crashWith(obstacle3)|| myGamePiece.crashWith(obstacle4) || 
    myGamePiece.crashWith(obstacle5) || myGamePiece.crashWith(obstacle6) || myGamePiece.crashWith(obstacle7) ||
    myGamePiece.crashWith(obstacle8) || myGamePiece.crashWith(obstacle9) || myGamePiece.crashWith(obstacle10) ||
    myGamePiece.crashWith(greenObstacle) || myGamePiece.crashWith(greyObstacle) ||
    myGamePiece.crashWith(orangeObstacle) || myGamePiece.crashWith(obstacle7) ||
    myGamePiece.crashWith(blueObstacle) || myGamePiece.crashWith(redObstacle) ||
    myGamePiece.crashWith(obstacleG) || myGamePiece.crashWith(obstacleS) ||
    myGamePiece.crashWithArea(area, myGamePiece)) {
    if(myGamePiece.crashWithArea(area, myGamePiece)) {
      alert("O quadrado preto ganhou, por favor aperte F5");
    }
  } 
  // Regra de colisão da peça cinza
  else if (GamePiece1.crashWith(obstacle)|| GamePiece1.crashWith(obstacle2) || 
    GamePiece1.crashWith(obstacle3)|| GamePiece1.crashWith(obstacle4)|| 
    GamePiece1.crashWith(obstacle5) || GamePiece1.crashWith(obstacle6) || GamePiece1.crashWith(obstacle7) ||
    GamePiece1.crashWith(obstacle8) || GamePiece1.crashWith(obstacle9) || GamePiece1.crashWith(obstacle10) ||
    GamePiece1.crashWith(greenObstacle) || GamePiece1.crashWith(blackObstacle) ||
    GamePiece1.crashWith(orangeObstacle) || GamePiece1.crashWith(obstacleG) ||
    GamePiece1.crashWith(blueObstacle) || GamePiece1.crashWith(redObstacle) || GamePiece1.crashWith(obstacleS) ||
    GamePiece1.crashWithArea(area, GamePiece1)) {
    if(GamePiece1.crashWithArea(area, GamePiece1)) {
      alert("O quadrado cinza ganhou, por favor aperte F5");
    }
  }

  // Regra de colisão da peça verde
  else if(GamePiece2.crashWith(obstacle) || GamePiece2.crashWith(obstacle2) || 
    GamePiece2.crashWith(obstacle3)|| GamePiece2.crashWith(obstacle4)|| 
    GamePiece2.crashWith(obstacle5) || GamePiece2.crashWith(obstacle6) || GamePiece2.crashWith(obstacle7) ||
    GamePiece2.crashWith(obstacle8) || GamePiece2.crashWith(obstacle9) || GamePiece2.crashWith(obstacle10) ||
    GamePiece2.crashWith(blackObstacle) || GamePiece2.crashWith(greyObstacle) ||
    GamePiece2.crashWith(orangeObstacle) || GamePiece2.crashWith(obstacleG) ||
    GamePiece2.crashWith(blueObstacle) || GamePiece2.crashWith(redObstacle) || GamePiece2.crashWith(obstacleS) ||
    GamePiece2.crashWithArea(area, GamePiece2)) {
    if(GamePiece2.crashWithArea(area, GamePiece2)) {
      alert("O quadrado verde ganhou, por favor aperte F5");
    }
  }

  // Regra de colisão da peça roxa
  // else if(GamePiece3.crashWith(obstacle)|| GamePiece3.crashWith(obstacle2) || 
  //   GamePiece3.crashWith(obstacle3)|| GamePiece3.crashWith(obstacle4) || 
  //   GamePiece3.crashWith(obstacle5) || GamePiece3.crashWith(obstacle6) ||
  //   GamePiece3.crashWith(obstacle8) || GamePiece3.crashWith(obstacle9) || GamePiece3.crashWith(obstacle10) ||
  //   GamePiece3.crashWith(greenObstacle) || GamePiece3.crashWith(greyObstacle) ||
  //   GamePiece3.crashWith(orangeObstacle) || GamePiece3.crashWith(blackObstacle) ||
  //   GamePiece3.crashWith(blueObstacle) || GamePiece3.crashWith(redObstacle) || GamePiece3.crashWith(obstacleS) ||
  //   GamePiece3.crashWith(obstacleG) || GamePiece3.crashWith(obstacle7) ||
  //   GamePiece3.crashWithArea(area, GamePiece3)) {
  //   if(GamePiece3.crashWithArea(area, GamePiece3)) {
  //     alert("O quadrado roxo ganhou, por favor aperte F5");
  //   }
  // }

  // Regra de colisão do bot azul
  else if(GamePiece4.crashWith(obstacle) || GamePiece4.crashWith(obstacle2)|| 
    GamePiece4.crashWith(obstacle3) || GamePiece4.crashWith(obstacle4)|| 
    GamePiece4.crashWith(obstacle5) || GamePiece4.crashWith(obstacle6) ||
    GamePiece4.crashWith(obstacle8) || GamePiece4.crashWith(obstacle9) || GamePiece4.crashWith(obstacle10) ||
    GamePiece4.crashWith(greenObstacle) || GamePiece4.crashWith(greyObstacle) ||
    GamePiece4.crashWith(orangeObstacle) || GamePiece4.crashWith(blackObstacle) ||
    GamePiece4.crashWith(redObstacle) || GamePiece4.crashWith(obstacleG) || GamePiece4.crashWith(obstacleS) ||
    GamePiece4.crashWith(obstacle7) ||
    GamePiece4.crashWithArea(area, GamePiece4)) {
    if(GamePiece4.crashWithArea(area, GamePiece4)) {
      alert("O quadrado azul ganhou, por favor aperte F5");
    }
  }

  // Regra de colisão do bot vermelho
  else if(GamePiece5.crashWith(obstacle) || GamePiece5.crashWith(obstacle2)|| 
    GamePiece5.crashWith(obstacle3) || GamePiece5.crashWith(obstacle4)||
    GamePiece5.crashWith(obstacle5) || GamePiece5.crashWith(obstacle6) || GamePiece5.crashWith(obstacle7) ||
    GamePiece5.crashWith(obstacle8) || GamePiece5.crashWith(obstacle9) || GamePiece5.crashWith(obstacle10) ||
    GamePiece5.crashWith(greenObstacle) || GamePiece5.crashWith(greyObstacle) || 
    GamePiece5.crashWith(orangeObstacle) || GamePiece5.crashWith(blackObstacle) ||
    GamePiece5.crashWith(blueObstacle) || GamePiece5.crashWith(obstacleG) || GamePiece5.crashWith(obstacleS) ||
    GamePiece5.crashWithArea(area, GamePiece5)) {
    if(GamePiece5.crashWithArea(area, GamePiece5)) {
      alert("O quadrado vermelho ganhou, por favor aperte F5");
    }
  }

  // Regra de colisão do bot laranja
  else if (GamePiece6.crashWith(obstacle)|| GamePiece6.crashWith(obstacle2) || 
    GamePiece6.crashWith(obstacle3)|| GamePiece6.crashWith(obstacle4) ||
    GamePiece6.crashWith(obstacle5) || GamePiece6.crashWith(obstacle6) ||
    GamePiece6.crashWith(obstacle8) || GamePiece6.crashWith(obstacle9) || GamePiece6.crashWith(obstacle10) ||
    GamePiece6.crashWith(obstacle7) ||
    GamePiece6.crashWith(greenObstacle) || GamePiece6.crashWith(greyObstacle) ||
    GamePiece6.crashWith(blueObstacle) || GamePiece6.crashWith(redObstacle) ||
    GamePiece6.crashWith(blackObstacle) || GamePiece6.crashWith(obstacleG) || GamePiece6.crashWith(obstacleS) ||
    GamePiece6.crashWithArea(area, GamePiece6)) {
    if(GamePiece6.crashWithArea(area, GamePiece6)) {
      alert("O quadrado laranja ganhou, por favor aperte F5");
    }
  }

  // Regra de colisão da peça do Guxtavin
  else if (GamePieceG.crashWith(obstacle)|| GamePieceG.crashWith(obstacle2) || 
    GamePieceG.crashWith(obstacle3)|| GamePieceG.crashWith(obstacle4) ||
    GamePieceG.crashWith(obstacle5) || GamePieceG.crashWith(obstacle6) ||
    GamePieceG.crashWith(obstacle8) || GamePieceG.crashWith(obstacle9) ||
    GamePieceG.crashWith(greenObstacle) || GamePieceG.crashWith(greyObstacle) ||
    GamePieceG.crashWith(blueObstacle) || GamePieceG.crashWith(redObstacle) || GamePieceG.crashWith(orangeObstacle) ||
    GamePieceG.crashWith(blackObstacle) || GamePieceG.crashWith(obstacle7) || GamePieceG.crashWith(obstacleS) ||
    GamePieceG.crashWithArea(area, GamePieceG)) {
    if(GamePieceG.crashWithArea(area, GamePieceG)) {
      alert("GG, o guxtavo venceu! JG diff");
    }
  }

  // Regra de colisão da peça do Saturado
  else if (GamePiece7.crashWith(obstacle) || GamePiece7.crashWith(obstacle2) ||
    GamePiece7.crashWith(obstacle3) || GamePiece7.crashWith(obstacle4) ||
    GamePiece7.crashWith(obstacle5) || GamePiece7.crashWith(obstacle6) ||
    GamePiece7.crashWith(obstacle7) || GamePiece7.crashWith(obstacle8) ||
    GamePiece7.crashWith(obstacle9)  || GamePiece7.crashWith(greenObstacle) ||
    GamePiece7.crashWith(greyObstacle) || GamePiece7.crashWith(blueObstacle) || GamePiece7.crashWith(orangeObstacle) ||
    GamePiece7.crashWith(redObstacle) || GamePiece7.crashWith(blackObstacle) || GamePiece7.crashWith(obstacleS) ||
    GamePiece7.crashWith(obstacleG) || 
    GamePiece7.crashWithArea(area, GamePiece7)) {
    if (GamePiece7.crashWithArea(area, GamePiece7)) {
      alert("O satu é o melhor")
    }
  }

  // Regra de colisão da peça do Snack
  else if (GamePieceS.crashWith(obstacle) || GamePieceS.crashWith(obstacle2) ||
  GamePieceS.crashWith(obstacle3) || GamePieceS.crashWith(obstacle4) ||
  GamePieceS.crashWith(obstacle5) || GamePieceS.crashWith(obstacle6) ||
  GamePieceS.crashWith(obstacle7) || GamePieceS.crashWith(obstacle8) ||
  GamePieceS.crashWith(obstacle9)  || GamePieceS.crashWith(obstacle10) ||
  GamePieceS.crashWith(greyObstacle) || GamePieceS.crashWith(blueObstacle) || 
  GamePieceS.crashWith(redObstacle) || GamePieceS.crashWith(blackObstacle) || GamePieceS.crashWith(orangeObstacle) ||
  GamePieceS.crashWith(obstacleG) || GamePieceS.crashWith(greenObstacle) ||
  GamePieceS.crashWithArea(area, GamePieceS)) {
  if (GamePieceS.crashWithArea(area, GamePieceS)) {
    alert("Você foi jantado! kkk")
  }
}

  myGameArea.clear();

  //Regras de movimentação da peça preta
  myGamePiece.newPos();
  myGamePiece.update();

  //Regras de movimentação da peça cinza
  GamePiece1.newPos();
  GamePiece1.update();

  //Regras de movimentação da peça verde
  GamePiece2.speedX = 0;
  GamePiece2.speedY = 0;
  if (myGameArea.keys && myGameArea.keys[65]) {GamePiece2.speedX = -3;}
  if (myGameArea.keys && myGameArea.keys[68]) {GamePiece2.speedX = 3;}
  if (myGameArea.keys && myGameArea.keys[87]) {GamePiece2.speedY = -3;}
  if (myGameArea.keys && myGameArea.keys[83]) {GamePiece2.speedY = 3;}
  GamePiece2.newPos();
  GamePiece2.update();

  //Regras de movimentação da peça roxa
  if (myGameArea.x && myGameArea.y) {
    GamePiece3.x = myGameArea.x;
    GamePiece3.y = myGameArea.y;
  }
  GamePiece3.update();

  //Regras de movimentação do bot azul
  GamePiece4.newPosBlue();
  GamePiece4.update();
  
  //Regras de movimentação do bot vermelho
  GamePiece5.newPosRed();
  GamePiece5.update();

  //Regras de movimentação do bot laranja
  GamePiece6.newPosOrange();
  GamePiece6.update();


  //Regras de movimentação da peça do Jonatas

  GamePiece7.speedX = 0;
  GamePiece7.speedY = 0;
  if (myGameArea.keys && myGameArea.keys[37]) {GamePiece7.speedX = -5;}
  if (myGameArea.keys && myGameArea.keys[39]) {GamePiece7.speedX = 5;}
  if (myGameArea.keys && myGameArea.keys[38]) {GamePiece7.speedY = -5;}
  if (myGameArea.keys && myGameArea.keys[40]) {GamePiece7.speedY = 5;}
  if (myGameArea.keys && myGameArea.keys[16]) {GamePiece7.y = 250}
  GamePiece7.newPos();
  GamePiece7.update();

  //Regras de movimentação da peça do Guxtavin
  GamePieceG.speedX = 0;
  GamePieceG.speedY = 0;

  // Esquerda
  if (myGameArea.keys && myGameArea.keys[71]) {
    GamePieceG.speedX = -7;
    if (this.GamePieceG.x <= 1030) {
      this.GamePieceG.speedX = 3
    } 
  } 
  // Direita
  if (myGameArea.keys && myGameArea.keys[74]) {
    GamePieceG.speedX = 7;
    if (this.GamePieceG.x >= 1030) {
      this.GamePieceG.speedX = -3
    }
  }
  // Cima
  if (myGameArea.keys && myGameArea.keys[89]) {
    GamePieceG.speedY = -7;
    if (this.GamePieceG.y <= 650) {
      this.GamePieceG.speedY = 3
    }
  }
  // Baixo
  if (myGameArea.keys && myGameArea.keys[72]) {
    GamePieceG.speedY = 7;
    if (this.GamePieceG.y >= 650) {
      this.GamePieceG.speedY = -3
    }
  }
  GamePieceG.newPos();
  GamePieceG.update();

  GamePieceS.speedX = 0;
  GamePieceS.speedY = 0;
  // Esquerda
  if (myGameArea.keys && myGameArea.keys[75]) {GamePieceS.speedX = -4;}
  // Direita
  if (myGameArea.keys && myGameArea.keys[186]) {GamePieceS.speedX = 4;}
  // Cima
  if (myGameArea.keys && myGameArea.keys[79]) {GamePieceS.speedY = -4;}
  // Baixo
  if (myGameArea.keys && myGameArea.keys[76]) {GamePieceS.speedY = 4;}
  GamePieceS.newPos();
  GamePieceS.update();

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
  obstacle10.update();
  obstacleG.update();
  obstacleS.update();
  blueObstacle.update();
  redObstacle.update();
  greyObstacle.update();
  blackObstacle.update();
  greenObstacle.update();
  orangeObstacle.update();
  purpleObstacle.update();

  //AREA DE VITÓRIA
  area.update();
}
