       //Aqui adiciona-se novos produtos
        const items = [
            {
                    id: 0,
                    nome: "Tobogã inflável G",
                    img: "./img/toboga.jpg",
                    quantidade: 0,
                    precoAluguel: 500
                },
                {
                    id: 1,
                    nome: "Tobogã inflável P",
                    img: "./img/tobogap.jpg",
                    quantidade: 0,
                    precoAluguel: 250
                },
                {
                    id: 2,
                    nome: "Piscina de Bolinhas",
                    img: "./img/piscinadebolinhas.jpg",
                    quantidade: 0,
                    precoAluguel:250
                },
                {
                    id: 3,
                    nome: "C. Elástica 3,70m",
                    img: "./img/camaelasticag.jpg",
                    quantidade:0,
                    precoAluguel: 160
                },
                {
                    id: 4,
                    nome: "C. Elástica 3,70m",
                    img: "./img/camaelasticag2.jpg",
                    quantidade:0,
                    precoAluguel: 160
                },
                {
                    id: 5,
                    nome: "C. Elástica 2,66",
                    img: "./img/camaelasticap.jpg",
                    quantidade: 0,
                    precoAluguel: 130
                },
                {
                    id: 6,
                    nome: "Tombo </br> Legal ",
                    img: "./img/tombolegal.jpg",
                    quantidade: 0,
                    precoAluguel: 250
                },
                {
                    id: 7,
                    nome: "M.Algodão Doce",
                    img: "./img/maquinadealgodaodoce.jpg",
                    quantidade: 0,
                    precoAluguel: 130
                },
                
    
                
    
            ]
              
                 //aqui eu criei uma função que ultiliza um map, para percorrer a lista de produtos,
                 //extraindo as informações e montando o catálogo.
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
                    <p>`+val.nome+` | quantidade: 1 `+` | valor: R$ `+val.precoAluguel+`,00 `+`| duração: 4h | s/ monitor`+`</p>
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
           
    