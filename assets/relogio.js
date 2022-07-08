// Invocando a função relogio e exibindo a contagem do tempo com a função setInterval()

relogio();
let timer = setInterval(relogio, 1000);

// Função implementação e exibição do relógio no INDEX
function relogio() {
    var data = new Date();
    var hor = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    if (hor < 10) {
        hor = "0" + hor;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (seg < 10) {
        seg = "0" + seg;
    }
    var horas = hor + ":" + min + ":" + seg;

    // if (horas == 15 + ":" + 31 + ":" + 15) {
    // alert("Hora Certa!!!");
    // location.reload();
    // window.close();
    // }

    let relogioNaTela = document.getElementById("relogio").value = horas;
    // console.log(relogioNaTela);
}