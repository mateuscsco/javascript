//vaca
let ator;
let xAtor = 100;
let yAtor = 366;
let colisao = false;

let placar = 0;

//exibe vaca
function mostraAtor(){
  image(ator,xAtor,yAtor,30,30);
}

//movimenta vaca
function moveAtor(){
  if (keyIsDown(UP_ARROW)){
      yAtor-=2;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor+=2;
    }
  }
}
function verificaColisao(){
  for (let i = 0; i<carro.length; i++){
  colisao = collideRectCircle(xCarro[i], yCarro[i], compCarro, altCarro, xAtor, yAtor, 15);
    if (colisao){
    colidiu();
    }
   }
}
function colidiu(){
  yAtor = 366;
  colide.play();
  if(placar>=1){
    placar--;
  }
}
function marcaPonto(){
  if(yAtor<30){
  placar++;
  ponto.play();
  yAtor = 366;
  }
}
function exibePontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(placar,100,27);
}
function podeSeMover(){
  return yAtor<366;
}