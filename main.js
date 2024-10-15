function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    function criaCartao(categoria, pergunta, resposta) {
        let container = document.getElementById('container');
        let cartao = document.createElement('article');
        cartao.className = 'cartao';
    
        cartao.innerHTML = `
        <div class="flashcard" onclick="this.classList.toggle('flip')">
            <div class="cartao-pergunta question">
                <h3>${categoria}</h3>
                <p>${pergunta}</p>
           
        container.appendChild(cartao);

}

criaCartao('Física', 'Como a simplificação de um objeto para um ponto material pode facilitar a análise de um problema de cinemática', 'Simplificar um objeto para um ponto material reduz a complexidade do problema permitindo focar apenas nas variáveis principais');
criaCartao('Física', 'explique como a análise de um corpo extenso difere da de um ponto material em um problema de cinemática', 'A análise de um corpo extenso considera as variáveis de rotação, torque e distribuição de massa além do movimento translacional');
criaCartao('Física', 'O que é uma partícula?', 'uma partícula é um objeto se dimensões desprezíveis, usado para simplificar problemas');
criaCartao('Física', 'O que caracteriza um corpo extenso?', 'Tem dimensões que não pode ser despresadas em análise de movimento, pois diferentes partes podem ter velocidades e acelerações distintas');
criaCartao('Física', 'O que é um movimento em cinemática', 'Quando um objeto muda sua posição em relação a um referencial ao longo do tempo');
criaCartao('Matemática','Como subtrair números negativos, como em -5- (-3)?','para subtrair números negativos, como - 5 - ( - 3) se torna - 5 + 3. Calculando, obtemos - 2. Portanto, - 5 (-3) = - 2.')
criaCartao(
'Matemática',
'Qual a relação entre ângulos internos e externos em um triângulo',
'A soma dos ângulos internos é sempre 180, enquanto cada ângulo externos é a soa dos ângulos internos não adjascentes')
criaCartao(
'Matemática',
'Como se determina a medida de um ângulo em um polígono regular',
'é dada por (n - 2) x 180°/n')
criaCartao(
'Matemática',
'Como são classificados ângulos complementares',
'Ângulos complementares são 2 ângulos cujo a soma é igual a 90°')
criaCartao(
'Matemática',
'O que são ângulos suplementares',
'São 2 ângulos cujo a soma é igual 180°')
criaCartao(
'Geografia',  
'O que é atmosfera ',
'Camada de gazes que envolve a terra')
criaCartao(
'Geografia',
'Quais são as principais camadas da atmosfera',
'Troposfera, extratosfera, mesosfera, termosfera e exosfera')
criaCartao(
'Geografia',
'Qual a importância da camada de ozônio na atmosfera',
'Absorve a maior parte da radiação ultravioleta')
criaCartao(
'Geografia',
'Como a atmosfera influencia no clima da terra',
'Principalmente por regulação de temperatura através do efeito estufa')
criaCartao(
'Geografia',
'Como a camada de ozônio se forma na atmosfera',
'Pela interação entre a radiação ultravioleta do sol e moléculas de oxigênio')
criaCartao(
'História',
'Como as alianças militares influenciaram o panorama europeu durante a 2ª guerra mundial',
'Alianças como eixo e aliados determinaram estratégias e frentes de combates')
criaCartao(
'História',
'Qual foi o Estopim da 2ª guerra mundial',
'Invasão da Alemanha nazista à Polônia em 1 de setembro de 1939')
criaCartao(
'História',
'Explique a importância da batalha da Grã - Bretanha no contexto europeu da segunda guerra mundial',
'Foi crucial pois frustrou os planos de invasão da alemanha e demonstrou resistência britânica')
criaCartao(
'História',
'Qual a relação do tratado de Versalhes com a 2ª guerra mundial',
'impôs punições pesadas para a Alemanha')
criaCartao(
'História',
'Quais foram alguns dos principais motivos que levaram ao início da 2ª guerra mundial',
'Tratado de Versalhes, ascensão do nazismo, política expansionista de Hitler e a falta das potências em conter a agressão alemã')}