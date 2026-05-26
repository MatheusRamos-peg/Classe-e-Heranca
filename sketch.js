var quadrado1;
var circulo1;
var retangulo1;
var chao;

function setup() {

  createCanvas(800, 400);

  quadrado1 = new Quadrado(
    200,
    50,
    "red",
    80
  );

  circulo1 = new Circulo(
    400,
    50,
    "blue",
    40
  );

  retangulo1 = new Retangulo(
    600,
    50,
    "yellow",
    80,
    40
  );

  chao = new Quadrado(
    160,
    350,
    "green",
    80
  );

}

function draw() {

  background(220);

  quadrado1.aplicarGravidade();
  circulo1.aplicarGravidade();
  retangulo1.aplicarGravidade();

  if (
    quadrado1.y + quadrado1.tamanho >
    chao.y
  ) {

    quadrado1.y =
      chao.y - quadrado1.tamanho;

    quadrado1.velocidadeY = 0;

  }

  if (
    circulo1.y + circulo1.raio >
    chao.y
  ) {

    circulo1.y =
      chao.y - circulo1.raio;

    circulo1.velocidadeY = 0;

  }

  if (retangulo1.y + retangulo1.tamanho > chao.y) {    
  retangulo1.y = chao.y - retangulo1.tamanho;    
  retangulo1.velocidadeY = 0;  
} 
says:var quadrado1;
var circulo1;
var retangulo1;
var chao;

function setup() {  
  createCanvas(800, 400);  
  
  // 1. O Quadrado (X, Y, Cor, Tamanho)
  quadrado1 = new Quadrado(200, 50, "red", 80);   
  
  // 2. O Retângulo (X, Y, Cor, Largura, Altura) -> Agora com os 5 parâmetros certinhos
  retangulo1 = new Retangulo(300, 50, "green", 80, 50);   
  
  // 3. O Círculo (X, Y, Cor, Raio)
  circulo1 = new Circulo(600, 50, "blue", 40);  
  
  // 4. O Chão como um Retângulo (X, Y, Cor, Largura, Altura)
  chao = new Retangulo(0, 350, "yellow", 800, 50);
}

function draw() {  
  background(220);  
  
  // --- FÍSICA (GRAVIDADE) ---
  quadrado1.aplicarGravidade();  
  circulo1.aplicarGravidade();  
  retangulo1.aplicarGravidade();  
  
  // --- SCRIPT DE COLISÕES COM O CHÃO ---
  
  // Colisão do Quadrado
  if (quadrado1.y + quadrado1.tamanho >= chao.y) {    
    quadrado1.y = chao.y - quadrado1.tamanho;    
    quadrado1.velocidadeY = 0;  
  }   
  
  // Colisão do Retângulo (Usa .altura)
  if (retangulo1.y + retangulo1.altura >= chao.y) {    
    retangulo1.y = chao.y - retangulo1.altura;    
    retangulo1.velocidadeY = 0;  
  }     
  
  // Colisão do Círculo (Usa .raio)
  if (circulo1.y + circulo1.raio >= chao.y) {    
    circulo1.y = chao.y - circulo1.raio;    
    circulo1.velocidadeY = 0;  
  }  
  
  // --- DESENHAR OS OBJETOS ---
  quadrado1.desenhar();  
  circulo1.desenhar();  
  retangulo1.desenhar();  
  chao.desenhar();
} 

  quadrado1.desenhar();
  circulo1.desenhar();
  retangulo1.desenhar();
  chao.desenhar();

}
