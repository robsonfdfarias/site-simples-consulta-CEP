"use strict";
class Conn {
    constructor(url) {
        this.url = url;
    }
    fetchGet(cep) {
        if (cep == '' || cep == undefined || cep == null) {
            alert('Insira o cep');
            return;
        }
    }
}
