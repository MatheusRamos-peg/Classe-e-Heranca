class Forma {

  constructor(x, y, cor) {

    this.x = x;
    this.y = y;
    this.cor = cor;

    // FÍSICA
    this.velocidadeY = 0;
    this.gravidade = 0.5;

  }

  aplicarGravidade() {

    this.velocidadeY =
      this.velocidadeY + this.gravidade;

    this.y =
      this.y + this.velocidadeY;

  }

  mudarCor(novaCor) {

    this.cor = novaCor;

  }

}