"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CepFetch {
    constructor() {
        this.data = null;
        this.cep = "89260854";
        this.url = 'https://viacep.com.br/ws/';
    }
    fetch(cep, car) {
        return __awaiter(this, void 0, void 0, function* () {
            const cepPattern = /^\d{5}-\d{3}$/;
            if (cepPattern.test(cep)) {
                this.cep = cep;
            }
            else {
                alert("Formato de CEP inválido. O CEP deve estar no formato: 99999-999");
                return;
            }
            this.url = this.url + this.cep + '/json/';
            car.style.display = 'block';
            yield fetch(this.url, {
                method: 'GET'
            })
                .then((response) => response.json())
                .then((json) => {
                // console.log(json)
                this.data = json;
            })
                .catch((error) => {
                console.log('Erro encontrado: -> ' + error);
            });
            car.style.display = 'none';
            return this.data;
        });
    }
}
