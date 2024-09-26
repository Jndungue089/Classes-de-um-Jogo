class Heroi {
    nome;
    idade;
    tipo;

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        }

        return "O " + this.tipo + " atacou usando " + ataque;
    }
}

const jupiter = new Heroi("Jupiter", 32, "mago");
console.log(jupiter.atacar());
