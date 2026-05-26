class Retangulo extends Forma {

    constructor(x, y, cor, largura, altura) {
        super(x,y,cor);
        this.largura = largura
        this.altura = altura

}

desenhar(){
    fill(this.cor);
    rect(this.x,this.y,this.largura,this.altura);
}

}