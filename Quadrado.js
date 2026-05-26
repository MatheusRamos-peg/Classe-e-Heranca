class Quadrado extends Forma {

  constructor(x, y, cor, tamanho) {

    super(x, y, cor);

    this.tamanho = tamanho;

  }

  desenhar() {

    fill(this.cor);

    rect(
      this.x,
      this.y,
      this.tamanho,
      this.tamanho
    );

  }

}