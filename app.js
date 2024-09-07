//executa apenas uma vez quando clicar no botão pesquisar
//Busca os resultados da pesquisa e atualiza a seção HTML com os resultados.
function pesquisar() {


    //console.log("clicou")
    // Seleciona o elemento HTML onde os resultados serão exibidos.
    let h3titulo = document.getElementById("resultado-titulo")
    let section = document.getElementById("resultados-pesquisa");
    //console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    //console.log(campoPesquisa);

    //se campoPesquisa for uma string vazia
    //Quando irá comparar valores usa == para validar
    if(campoPesquisa == ""){
        section.innerHTML = "<p>Informações não encontradas. Por favor, refaça a pesquisa!</p>"

        //Quando usa o return ele finaliza a função e não executa mais nada.
        return
    }


 // Inicializa uma string vazia para armazenar os resultados da pesquisa.
 let tituloHtml = "";
 let resultados = "";
 let titulo = "";
 let descricao = "";
 let tags = ""
    
    campoPesquisa = campoPesquisa.toLowerCase();

    titulo = "Após apresentação de cada profissional, clique em saiba mais para entrar em contato.";

//laço de repetição
//para cada dado dentro da lista de dados queremos que mostre os itens dentro da lista. Irá ficar mostrando até finalizar a lista (o último registro).
//+= está somando os resultados
// Itera sobre cada resultado da pesquisa e adiciona ao HTML.
for(let dado of dados){
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    //Se o titulo está incluido no campoPesquisa, faça o comando. o resultado da checagem do include no console será true ou false
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Cria uma div para cada resultado, formatando os dados do resultado.
        resultados += `
        <div class="item-resultado">
        
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">
                    saiba mais <i class="fab fa-instagram"></i>
                    </a>
            </div>
        `
        }
    }

    //se o resultado não existir, faça determinada ação
    if(!resultados){
        resultados = "<p> Resultado não encontrado!</p>"
    }
    
// Atualiza o conteúdo HTML da seção com os resultados da pesquisa.
h3titulo.innerHTML = tituloHtml;
section.innerHTML = resultados;
}

// console.log(dados);

//Let definindo uma variável
//document.getElementById pegue o elemento que tenha esse ID dele
//Boas praticas documentar o código.
