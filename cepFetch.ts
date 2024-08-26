class CepFetch{
    cep: string;
    url: string;
    data=null;
    constructor(){
        this.cep = "89260854";
        this.url = 'https://viacep.com.br/ws/';
    }
    
    async fetch(cep: string, car: HTMLElement){
        const cepPattern = /^\d{5}-\d{3}$/;
        if(cepPattern.test(cep)){
            this.cep = cep;
        }else{
            alert("Formato de CEP inválido. O CEP deve estar no formato: 99999-999");
            return;
        }
        this.url = this.url+this.cep+'/json/';
        car.style.display = 'block';
        await fetch(this.url, {
            method: 'GET'
        })
        .then((response)=>response.json())
        .then((json)=>{
            // console.log(json)
            this.data = json;
        })
        .catch((error)=>{
            console.log('Erro encontrado: -> '+error);
        })
        car.style.display = 'none';
        return this.data;
    }
}