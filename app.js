function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Se campoPesquisa for uma string sem nada
    if(!campoPesquisa) {
      section.innerHTML = "<p>Nenhum resultado encontrado. É necessário digitar sua pesquisa.</p>"
      return
    }
    // Se campoPesquisa tiver menos que 3 caracteres
    if (!campoPesquisa || campoPesquisa.trim().length < 3) {
      section.innerHTML = "<p>Sua pesquisa é muito curta. Por favor, digite mais caracteres.</p>";
      return;
    }
    // Transforma campoPesquisa em letras minúsculas
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let categoria = "";
  
    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dado of dados) {
      // Transforma título, descrição e categoria em letras minúsculas
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      categoria = dado.categoria.toLowerCase()
      // Se título includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| categoria.includes(campoPesquisa)) {
  // Cria um novo elemento div para cada resultado
  resultados += `
  <div class="item-resultado">
    <h2>${dado.titulo}</h2> 
    <h4>${dado.dificuldade}</h4>
    <p class="descricao-meta">${dado.descricao}</p>
     <a href=${dado.link} target="_blank">Passo a passo</a> </div>
`;
      }
    }
    // Se não houver nenhum resultado correspondente com a pesquisa
    if(!resultados) {
      resultados = "<p>Nenhum resultado encontrado</p>"
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }