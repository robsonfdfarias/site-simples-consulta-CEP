"use strict";
class LayoutCep {
    constructor(cep) {
        this.cep = cep;
    }
    layout_1() {
        return ('CEP: ' + this.cep.cep +
            '<br>Logradouro: ' + this.cep.logradouro +
            '<br>complemento: ' + this.cep.complemento +
            '<br>unidade: ' + this.cep.unidade +
            '<br>bairro: ' + this.cep.bairro +
            '<br>localidade: ' + this.cep.localidade +
            '<br>uf: ' + this.cep.uf +
            '<br>ibge: ' + this.cep.ibge +
            '<br>gia: ' + this.cep.gia +
            '<br>ddd: ' + this.cep.ddd +
            '<br>siafi: ' + this.cep.siafi +
            '');
    }
    layout_2() {
        return ('<div class="container">' +
            '<h1>Detalhes do CEP</h1>' +
            '<div class="cep-card">' +
            '<div class="grid-container">' +
            '<div class="detail-item">' +
            '<span class="label">CEP:</span>' +
            '<span class="value">' + (this.cep.cep != '' ? this.cep.cep : 'N/A') + '</span>' +
            '</div>' +
            '<div class="detail-item">' +
            '<span class="label">Logradouro:</span>' +
            '<span class="value">' + (this.cep.logradouro != '' ? this.cep.logradouro : 'N/A') + '</span>' +
            '</div>' +
            '<div class="detail-item">' +
            '<span class="label">Complemento:</span>' +
            '<span class="value">' + (this.cep.complemento != '' ? this.cep.complemento : 'N/A') + '</span>' +
            '</div>' +
            '<div class="detail-item">' +
            '<span class="label">Unidade:</span>' +
            '<span class="value">' + (this.cep.unidade != '' ? this.cep.unidade : 'N/A') + '</span>' +
            '</div>' +
            '<div class="detail-item">' +
            '<span class="label">Bairro:</span>' +
            '<span class="value">' + (this.cep.bairro != '' ? this.cep.bairro : 'N/A') + '</span>' +
            '</div>' +
            '<div class="detail-item">' +
            '<span class="label">Localidade:</span>' +
            '<span class="value">' + (this.cep.localidade != '' ? this.cep.localidade : 'N/A') + '</span>' +
            '</div>' +
            '<div class="detail-item">' +
            '<span class="label">UF:</span>' +
            '<span class="value">' + (this.cep.uf != '' ? this.cep.uf : 'N/A') + '</span>' +
            '</div>' +
            '<div class="detail-item">' +
            '<span class="label">IBGE:</span>' +
            '<span class="value">' + (this.cep.ibge != '' ? this.cep.ibge : 'N/A') + '</span>' +
            '</div>' +
            '<div class="detail-item">' +
            '<span class="label">GIA:</span>' +
            '<span class="value">' + (this.cep.gia != '' ? this.cep.gia : 'N/A') + '</span>' +
            '</div>' +
            '<div class="detail-item">' +
            '<span class="label">DDD:</span>' +
            '<span class="value">' + (this.cep.ddd != '' ? this.cep.ddd : 'N/A') + '</span>' +
            '</div>' +
            '<div class="detail-item">' +
            '<span class="label">SIAFI:</span>' +
            '<span class="value">' + (this.cep.siafi != '' ? this.cep.siafi : 'N/A') + '</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }
}
