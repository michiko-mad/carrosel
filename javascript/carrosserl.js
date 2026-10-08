//Captura o botão "próximo"
let btnProximo = document.getElementById("proximo");
//Captura o botão "anterior"
let btnAnterior = document.getElementById("anterior");
//captura o quadro aonde a fotográfia é exibida
let Quadroimagem = document.getElementById("imagem");
//Cria o album e guarda as fotos

let album = [
    "https://picsum.photos/id/1015/1200/600",
    "https://picsum.photos/id/1025/1200/600",
    "https://picsum.photos/id/1043/1200/600"

]
//Quando o próximo botão for clicado,
//executará a função mostrarproximo
btnProximo.addEventListener("click", mostrarProximo);

//Define a posição inicial da fotográfia do album

let foto = 0;

//Função responsável por mostrar a próxima fotográfia
function mostrarProximo() {
    //Avança uma posição do álbum
    foto = foto + 1;
    //Verifica se passou a última fotográfia
    if (foto >= album.length) {
        //Volta a posição inicial
        foto = 0;
    }
    Quadroimagem.src = album[foto];

}

// Quando o botão anterior for clicado
// executará a função mostrarAnterior

btnAnterior.addEventListener("click", mostrarAnterior);
//Função responsável por mostrar a fotográfia anterior
function mostrarAnterior() {
    //Regride a posição do álbum
    foto = foto - 1;

    if (foto < 0) {
        foto = album.length - 1 
    }
        Quadroimagem.src = album[foto];
}