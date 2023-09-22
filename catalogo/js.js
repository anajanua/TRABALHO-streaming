const frmPesquisa = document.querySelector("form");
        const chaveApi = "1eda42a7";
        const lista = document.querySelector(".lista");

        frmPesquisa.onsubmit = (ev) => {
            ev.preventDefault();
            
         
            const pesquisa = ev.target.pesquisa.value;

        if (pesquisa == "")
        {
            alert('Preencha o campo!')
            return;
        }
        lista.innerHTML = ""

        fetch(`http://www.omdbapi.com/?s=${pesquisa}&apikey=${chaveApi}`)
        .then(result => {

          if (result.ok) {
           return result.json()
          } 

        })

         .then(json => {

            mostrarfilmes(json);
            btn_link("../sinopse/sinopse.html");

         })

         .catch(Error => erro(Error));
            
    }

    function mostrarfilmes(json){
             console.log(json)
            json.Search.forEach(element => {
            lista.innerHTML += `<div class="item"><img src =${element.Poster}><h2>${element.Title}</h2></div>`
        });
       
    }

    function erro(error){
        console.warn(error)
        lista.innerHTML = `<div class="erro">Filme não encontrado</div>`
    }
 
    function btn_link(local)  {
        let btn_res = document.querySelectorAll(".item");
        //res -> registrar
        btn_res.forEach(element =>{
            element.addEventListener("click",()=>{
                window.open(local, "_self")
                console.log("clicou")
            });
        })
    }
        










