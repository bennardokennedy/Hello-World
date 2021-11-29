
        const items = [
            {
                    id: 0,
                    nome: "Tobogã inflável G",
                    img: "./img/toboga.png",
                    quantidade: 0
                },
                {
                    id: 1,
                    nome: "Tobogã inflável P",
                    img: "./img/tobogap.jpg",
                    quantidade: 0
                },
                {
                    id: 2,
                    nome: "Piscina de Bolinhas",
                    img: "./img/piscinadebolinhas.jpg",
                    quantidade: 0
                },
                {
                    id: 3,
                    nome: "Cama Elástica G",
                    img: "./img/camaelasticag.jpg",
                    quantidade: 0
                },
                {
                    id: 4,
                    nome: "Cama Elástica P",
                    img: "./img/camaelasticap.jpg",
                    quantidade: 0
                },
                {
                    id: 5,
                    nome: "Tombo </br> Legal ",
                    img: "./img/tombolegal.jpg",
                    quantidade: 0
                },
                {
                    id: 6,
                    nome: "M.Algodão Doce",
                    img: "./img/maquinadealgodaodoce.jpg",
                    quantidade: 0
                },
                
    
                
    
            ]
              //mudar para função dps
        
              function inicializarLoja() {
                var containerBrinquedos = document.getElementById("brinquedos");
               // percorrer os itens da array com for
                items.map((val) => {
                    containerBrinquedos.innerHTML += `
    
    
                    <div class= "brinquedo-single">
                        <img src= "`+ val.img+`" />
                        <p> `+val.nome+`</p>
                        <a key="`+val.id+`" href="#">Add ao orçamento</a>
                    </div>        
                    
                    
                    
                    ` ;
                })
            }
            
            inicializarLoja();
    
    
            // depois trocar por orcamento
            atualizarCarrinho = () => { 
                var containerCarrinho = document.getElementById('carrinho');
                containerCarrinho.innerHTML = "";
                items.map((val) => {
                    if(val.quantidade > 0){
                    containerCarrinho.innerHTML += `
    
                    <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
                    <hr>  
                    
                    
                    
                    ` ;
                      }
                })
    
            }
            var links = document.getElementsByTagName('a');
    
            for(var i = 0; i < links.length; i++){
                links[i].addEventListener("click", function(){
                    let key = this.getAttribute('key');
                    items[key].quantidade++;
                    atualizarCarrinho();
                    return false;
                })
            }
    
    