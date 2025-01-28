<<<<<<< HEAD
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome à lista
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    // Validando se o campo não está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    // Adicionando o nome à lista de amigos
    amigos.push(nome);
    nomeInput.value = ''; // Limpa o campo de entrada

    // Atualiza a lista visualmente
    atualizarLista();
}

// Função para atualizar a lista na tela
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizá-la

    // Adiciona cada amigo à lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione nomes primeiro!');
        return;
    }

    // Sorteio aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>O amigo secreto sorteado é: <strong><span class="nome-sorteado">${amigoSorteado}</span></strong></p>`;

    // Adiciona a classe "piscar" ao nome sorteado para o efeito de piscar
    const nomeSorteado = document.querySelector('.nome-sorteado');
    nomeSorteado.classList.add('piscar');

    // Remove a classe "piscar" após alguns segundos para parar o piscar
    setTimeout(() => {
        nomeSorteado.classList.remove('piscar');
    }, 5000); // O piscar vai durar 5 segundos

    // Chama a função para gerar os confetes
    gerarConfetes();
}


// Função para gerar os confetes
function gerarConfetes() {
    const confeteContainer = document.createElement('div');
    confeteContainer.classList.add('confete-container');

    // Gera um número de confetes aleatórios
    const numConfetes = 30; // Quantidade de confetes a serem gerados

    for (let i = 0; i < numConfetes; i++) {
        const confete = document.createElement('div');
        confete.classList.add('confete');
        
        // Define uma posição aleatória para cada confete
        confete.style.left = `${Math.random() * 100}vw`; // Aleatório na largura da tela
        confete.style.animationDuration = `${Math.random() * 2 + 2}s`; // Duração aleatória
        confete.style.animationDelay = `${Math.random() * 2}s`; // Atraso aleatório para os confetes caírem de tempos diferentes

        confeteContainer.appendChild(confete);
    }

    // Adiciona os confetes ao body
    document.body.appendChild(confeteContainer);

    // Remove os confetes após 5 segundos
    setTimeout(() => {
        confeteContainer.remove();
    }, 5000); // Confetes desaparecem após 5 segundos
}


window.onload = function() {
    const title = document.querySelector('.main-title');
    const text = title.textContent; // Obter o texto do título
    const words = text.split(' '); // Separar as palavras do texto

    title.innerHTML = ''; // Limpar o conteúdo original

    // Para cada palavra, vamos criar um elemento <span> para cada letra
    words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.classList.add('word'); // Adicionar a classe para controlar o espaçamento das palavras
        wordSpan.innerHTML = ''; // Limpar o conteúdo da palavra

        // Dividir a palavra em letras e criar um <span> para cada letra
        word.split('').forEach((letter, index) => {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = letter;
            letterSpan.style.animationDelay = `${index * 0.3}s`; // Delay para efeito sequencial
            wordSpan.appendChild(letterSpan);
        });

        // Adicionar a palavra ao título, com espaço entre as palavras
        title.appendChild(wordSpan);

        // Adicionar um espaço entre as palavras
        if (wordIndex < words.length - 1) {
            title.innerHTML += ' '; // Adiciona um espaço entre as palavras
        }
    });

    // Após 3 segundos, interrompe a animação de piscar
    setTimeout(() => {
        const spans = document.querySelectorAll('.main-title span');
        spans.forEach(span => {
            span.style.animation = 'none'; // Interrompe a animação de piscar
        });
    }, 3000); // A animação vai durar 3 segundos

    // Adiciona o efeito de tremor na imagem
    const imagem = document.querySelector('.header-banner img');
    imagem.classList.add('tremor-ativo');  // Ativa o tremor da imagem

    // Após o tremor (1s), remove a animação da imagem
    setTimeout(() => {
        imagem.classList.remove('tremor-ativo'); // Remove o tremor após a animação
    }, 5000);  // O efeito dura 5 segundos

};


=======
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome à lista
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    // Validando se o campo não está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    // Adicionando o nome à lista de amigos
    amigos.push(nome);
    nomeInput.value = ''; // Limpa o campo de entrada

    // Atualiza a lista visualmente
    atualizarLista();
}

// Função para atualizar a lista na tela
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizá-la

    // Adiciona cada amigo à lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione nomes primeiro!');
        return;
    }

    // Sorteio aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>O amigo secreto sorteado é: <strong><span class="nome-sorteado">${amigoSorteado}</span></strong></p>`;

    // Adiciona a classe "piscar" ao nome sorteado para o efeito de piscar
    const nomeSorteado = document.querySelector('.nome-sorteado');
    nomeSorteado.classList.add('piscar');

    // Remove a classe "piscar" após alguns segundos para parar o piscar
    setTimeout(() => {
        nomeSorteado.classList.remove('piscar');
    }, 5000); // O piscar vai durar 5 segundos

    // Chama a função para gerar os confetes
    gerarConfetes();
}


// Função para gerar os confetes
function gerarConfetes() {
    const confeteContainer = document.createElement('div');
    confeteContainer.classList.add('confete-container');

    // Gera um número de confetes aleatórios
    const numConfetes = 30; // Quantidade de confetes a serem gerados

    for (let i = 0; i < numConfetes; i++) {
        const confete = document.createElement('div');
        confete.classList.add('confete');
        
        // Define uma posição aleatória para cada confete
        confete.style.left = `${Math.random() * 100}vw`; // Aleatório na largura da tela
        confete.style.animationDuration = `${Math.random() * 2 + 2}s`; // Duração aleatória
        confete.style.animationDelay = `${Math.random() * 2}s`; // Atraso aleatório para os confetes caírem de tempos diferentes

        confeteContainer.appendChild(confete);
    }

    // Adiciona os confetes ao body
    document.body.appendChild(confeteContainer);

    // Remove os confetes após 5 segundos
    setTimeout(() => {
        confeteContainer.remove();
    }, 5000); // Confetes desaparecem após 5 segundos
}


window.onload = function() {
    const title = document.querySelector('.main-title');
    const text = title.textContent; // Obter o texto do título
    const words = text.split(' '); // Separar as palavras do texto

    title.innerHTML = ''; // Limpar o conteúdo original

    // Para cada palavra, vamos criar um elemento <span> para cada letra
    words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.classList.add('word'); // Adicionar a classe para controlar o espaçamento das palavras
        wordSpan.innerHTML = ''; // Limpar o conteúdo da palavra

        // Dividir a palavra em letras e criar um <span> para cada letra
        word.split('').forEach((letter, index) => {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = letter;
            letterSpan.style.animationDelay = `${index * 0.3}s`; // Delay para efeito sequencial
            wordSpan.appendChild(letterSpan);
        });

        // Adicionar a palavra ao título, com espaço entre as palavras
        title.appendChild(wordSpan);

        // Adicionar um espaço entre as palavras
        if (wordIndex < words.length - 1) {
            title.innerHTML += ' '; // Adiciona um espaço entre as palavras
        }
    });

    // Após 3 segundos, interrompe a animação de piscar
    setTimeout(() => {
        const spans = document.querySelectorAll('.main-title span');
        spans.forEach(span => {
            span.style.animation = 'none'; // Interrompe a animação de piscar
        });
    }, 3000); // A animação vai durar 3 segundos

    // Adiciona o efeito de tremor na imagem
    const imagem = document.querySelector('.header-banner img');
    imagem.classList.add('tremor-ativo');  // Ativa o tremor da imagem

    // Após o tremor (1s), remove a animação da imagem
    setTimeout(() => {
        imagem.classList.remove('tremor-ativo'); // Remove o tremor após a animação
    }, 5000);  // O efeito dura 5 segundos

};


>>>>>>> 193e98f81374ff9ea0c6acbda0146e708fd71d66
