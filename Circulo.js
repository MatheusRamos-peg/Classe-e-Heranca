class  Circulo extends Forma{

    constructor(x,y,raio){
        super(x,y,raio);

        this.raio = this.raio
    }

    Desenhar() {
        fill(this.cor);
        circle(
            this.x,
            this.y,
            this.ratio*2);
}
}