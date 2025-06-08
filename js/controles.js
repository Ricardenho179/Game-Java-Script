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