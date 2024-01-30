//capturando o botão
const botaoDisparaContagem = document.querySelector('.btn-contagem');
let numero = 10;
//adicionando um evento dinamicamente
botaoDisparaContagem.addEventListener('click', () => {
    /*let numero = 10;
    do {
        console.log(numero);
        numero = numero - 1;
    }
    while (numero >= 0);*/

    /*for (let i = 10; i >= 0; i--) {
        console.log(i);
    }*/

    while (numero >= 0) {
        console.log(numero);
        numero = numero - 1;
    }
});