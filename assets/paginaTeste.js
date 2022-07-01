var botaoFechaAba = document.querySelector("button");

botaoFechaAba.addEventListener("click", fecha);

function fecha() {
    alert("Função funcionando!");
    setTimeout(() => {
        window.close();
    }, 1500);
}

// alert("OK");