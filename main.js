function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    
    cartao.innerHTML = `
        <div class="flashcard">
            <div class="flashcard-front">
                <h3>${categoria}</h3>
                <div class="cartao-pergunta question">
                    <p>${pergunta}</p>
                </div>
            </div>
            <div class="flashcard-back">
                <div class="cartao-resposta answer">
                    <p>${resposta}</p>
                </div>
            </div>
        </div>
    `;

    // Adiciona evento de clique para girar o cartão
    cartao.onclick = function() {
        cartao.classList.toggle('flip');
    };

    container.appendChild(cartao);
}
