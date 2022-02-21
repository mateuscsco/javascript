//cenário 
let estrada;

function preload(){
  estrada = loadImage("imagens/estrada.png");
  ator = loadImage("imagens/ator-1.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  carro = [carro1,carro2,carro3,carro1,carro2,carro3];
  trilha = loadSound("audios/trilha.mp3");
  ponto = loadSound("audios/pontos.wav");
  colide = loadSound("audios/colidiu.mp3");
}
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(estrada);
  mostraAtor();
  moveAtor();
  mostraCarro();
  moveCarro();
  loopCarro();
  verificaColisao();
  exibePontos();
  marcaPonto();
}