const btn_res = document.querySelector("#Registrar-se");
const btn_entrar = document.querySelector("#Login");

const btn_link = (element,local) => {
    element.addEventListener("click",()=>window.open(local, "_self"));
}



btn_link(btn_res,"./Registro/Regi.html");
btn_link(btn_entrar,"./login/login.html");