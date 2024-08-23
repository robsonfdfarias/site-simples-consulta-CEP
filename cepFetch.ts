class CepFetch{
    cep: string;
    url: string;
    constructor(){
        this.cep = "89260854";
        this.url = 'https://viacep.com.br/ws/';
    }
    async fetch(cep: string, car: HTMLElement){
        if(cep != undefined){
            this.cep = cep;
        }
        this.url = this.url+this.cep+'/json/';
        var data=null;
        car.style.display = 'block';
        await fetch(this.url, {
            method: 'GET'
        })
        .then((response)=>response.json())
        .then((json)=>{
            // console.log(json)
            data = json;
        })
        .catch((error)=>{
            console.log('Erro encontrado: -> '+error);
        })
        car.style.display = 'none';
        return data;
    }
}