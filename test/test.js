// en el test no podemos usar el import from
// los 2 puntos quiere decir sube un nivel y ahi busca en package.json y encuentra al main
// que este caso apunta a dist/src/platzom.js
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
    it('si la palabra termina en "ar" se le quita los 2 ultimos caracteres', function() {
        const translation = platzom('programar');
        expect(translation).to.equal('program')
    });
    it('si la palabra comienza con z se le añade pe al final', function() {
        const translation = platzom('zorro');
        expect(translation).to.equal('zorrope')
    });
    it('si la palabra tiene 10 o mas letras partirla ala mitad y agregar "-" en el medio', function() {
        const translation = platzom('abecedario');
        expect(translation).to.equal('abece-dario');
    });
    it('si la palabra es un palindromo imprimir la misma palabra pero en capitalize', function() {
        const translation = platzom('sometemos');
        expect(translation).to.equal('SoMeTeMoS');
    });
})