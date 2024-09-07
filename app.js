function pesquisar() {
    // Busca a seção onde os resultados serão exibidos

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value;
   
    if (!campoPesquisa){
        section.innerHTML = "Nao foi possivel realizar busca."
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa e cria uma div para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)||tags.includes(campoPesquisa)){
          resultados += `
          <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais Informações</a>
            <a href="${dado.tags}" target="_blank"></a>
          </div>
        `;
       
        }
    }

    if (!resultados){
        resultados = "Nao foi possivel realizar busca. Nao encontrado na nossa base de dados."
    }

    // Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
}