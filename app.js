let listaAmigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() { 
    let nomeDoAmigo = document.querySelector('input').value.trim(); // Obtém o valor do input e remove espaços extras
    if (!nomeDoAmigo) { // Verifica se o campo está vazio
        alert('Por favor, insira um nome.');
        return;
    }
    
    listaAmigos.push(nomeDoAmigo); // Adiciona o nome à lista
    atualizarLista(); // Atualiza a exibição da lista
    limparCampo(); // Limpa o campo de input
}

function sortearAmigo() {
    if (listaAmigos.length === 0) { // Verifica se a lista está vazia
        alert('Por favor, insira pelo menos um nome.');
        return;
    }
    
    let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]; // Sorteia um amigo da lista
    document.getElementById('resultado').innerText = `Amigo Secreto: ${amigoSecreto}`; // Exibe o amigo sorteado
    
    limparLista(); // Limpa a exibição da lista
    listaAmigos = []; // Reseta a lista de amigos
}

function limparCampo() {
    document.querySelector('input').value = ''; // Limpa o campo de input
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos'); // Obtém a referência da lista no HTML
    lista.innerHTML = ''; // Limpa a lista antes de atualizar
    
    listaAmigos.forEach(amigo => { // Percorre a lista de amigos
        let li = document.createElement('li'); // Cria um elemento <li>
        li.innerText = amigo; // Define o nome do amigo como texto do <li>
        lista.appendChild(li); // Adiciona o <li> à lista no HTML
    });
}

function limparLista() {
    document.getElementById('listaAmigos').innerHTML = ''; // Remove todos os itens da lista visível
}