// Seleciona os elementos do DOM
const form = document.getElementById('reportForm');
const listaOcorrencias = document.getElementById('listaOcorrencias');

// Array para simular um banco de dados local
let ocorrencias = [];

// Função para atualizar o mural na tela
function renderizarOcorrencias() {
    listaOcorrencias.innerHTML = ''; // Limpa a lista

    if (ocorrencias.length === 0) {
        listaOcorrencias.innerHTML = '<p class="empty-msg">Nenhuma ocorrência registrada ainda.</p>';
        return;
    }

    ocorrencias.forEach(oc => {
        const card = document.createElement('div');
        card.classList.add('ocorrencia-card');
        
        card.innerHTML = `
            <h3>${oc.tipo}</h3>
            <p><strong>Local:</strong> ${oc.bairro}</p>
            <p><strong>Detalhes:</strong> ${oc.descricao}</p>
        `;
        
        listaOcorrencias.appendChild(card);
    });
}

// Evento de envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita recarregar a página

    // Captura os valores
    const tipo = document.getElementById('tipo').value;
    const bairro = document.getElementById('bairro').value;
    const descricao = document.getElementById('descricao').value;

    // Adiciona ao "banco de dados"
    ocorrencias.push({
        tipo: tipo,
        bairro: bairro,
        descricao: descricao
    });

    // Limpa o formulário
    form.reset();

    // Atualiza a tela
    renderizarOcorrencias();
});
