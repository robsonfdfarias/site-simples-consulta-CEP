class Cep{
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
    constructor(obj: any){
        this.cep = obj.cep;
        this.logradouro = obj.logradouro;
        this.complemento = obj.complemento;
        this.unidade = obj.unidade;
        this.bairro = obj.bairro;
        this.localidade = obj.localidade;
        this.uf = obj.uf;
        this.ibge = obj.ibge;
        this.gia = obj.gia;
        this.ddd = obj.ddd;
        this.siafi = obj.siafi;
    }
}