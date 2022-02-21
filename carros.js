let carro1;
let carro2;
let carro3;
let carro;
let compCarro = 50;
let altCarro = 40;

let xCarro = [600,600,600,600,600,600]
let yCarro = [96,40,150,210,260,315]
let vCarro = [2,3,2.5,5,3.3,2.3]
//exibe carro
function mostraCarro(){
  for (let i = 0; i<carro.length; i+=1 ){
  image(carro[i],xCarro[i],yCarro[i],compCarro,altCarro);
  }
}

//move carro
function moveCarro(){
  for (let i = 0; i<carro.length; i+=1){
  xCarro[i] -= vCarro[i];
  }
}

function loopCarro(){
  for (let i = 0; i<carro.length; i+=1){
    if (retorna(xCarro[i])){
      xCarro[i] = 600;
    }
  }
}

function retorna(xCarro){
  return xCarro < - 50;
}