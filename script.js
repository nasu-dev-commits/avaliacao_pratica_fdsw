alert('Seja bem vindo(a)!!!\n\nSaiba aqui um pouco mais sobre mim.');

let botao = document.querySelector("#botao");
    botao.style.background="white";

botao.addEventListener("mouseover", e =>{
botao.style.background="black";
});

botao.addEventListener("mouseout", e =>{
    botao.style.background="white";
});

botao.addEventListener("click", e =>{
    botao.style.background="white";
    botao.innerHTML="Leia sua mensagem abaixo ↓↓↓";
});

    