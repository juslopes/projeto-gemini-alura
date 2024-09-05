//executa apenas uma vez quando clicar no botão pesquisar
//Boas praticas documentar o código para documentar
function pesquisar() {
    // Busca os resultados da pesquisa e atualiza a seção HTML com os resultados.

    //console.log("clicou")
      // Seleciona o elemento HTML onde os resultados serão exibidos.
  let h3titulo = document.getElementById("resultado-titulo")
  let section = document.getElementById("resultados-pesquisa");
//console.log(section);


 // Inicializa uma string vazia para armazenar os resultados da pesquisa.
 let titulo = "";
 let resultados = "";

 //laço de repetição
//para cada dado dentro da lista de dados queremos que mostre os itens dentro da lista. Irá ficar mostrando até finalizar a lista (o último registro)
//+= está somando os resultados

titulo = "Após apresentação de cada profissional, clique em saiba mais para entrar em contato.";

 // Itera sobre cada resultado da pesquisa e adiciona ao HTML.
for(let dado of dados){
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

// Atualiza o conteúdo HTML da seção com os resultados da pesquisa.
h3titulo.innerHTML = titulo;
section.innerHTML = resultados;
}

// console.log(dados);

//Let definindo uma variável
//document.getElementById pegue o elemento que tenha esse ID dele
