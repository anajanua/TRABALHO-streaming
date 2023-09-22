const btn_entrar = document.querySelector("#Entrar");

const btn_link = (element,local) => {
    console.log(btn_entrar);
    element.addEventListener("click",()=>window.open(local, "_self"));
}

btn_link(btn_entrar,"../login/login.html");