export class Pessoa{
    name: string;
    cidade: string;
    genero: string;
    nascimento: Date;
    contato: string;
    procura: string;
    ProblemasSaude: string[];

    constructor(name: string, cidade: string, genero: string, nascimento: Date, contato: string, procura: string, saude:string[]) {
        this.name = name;
        this.cidade = cidade;
        this.genero = genero;
        this.nascimento = nascimento;
        this.contato = contato;
        this.procura = procura;
        this.ProblemasSaude = saude;
    }


}

export default Pessoa