const btn_entrar = document.querySelector("#Entrar");
const usar_redes = document.querySelectorAll(".usar_redes");

const btn_link = (element,local) => {
    element.addEventListener("click",()=>window.open(local, "_self"));
}

usar_redes.forEach(element=>{
    btn_link(element,"https://www.google.com.br/?hl=pt-BR");
})
btn_link(btn_entrar,"../catalogo/catalogo.html");
