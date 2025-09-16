// Criar estrelas para o fundo
        document.addEventListener('DOMContentLoaded', function() {
            const starsContainer = document.getElementById('stars');
            const starsCount = 80;
            
            for (let i = 0; i < starsCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Posição e tamanho aleatórios
                const size = Math.random() * 3;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 50}%`;
                
                // Atraso de animação aleatório
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                starsContainer.appendChild(star);
            }
            
            // Adicionar efeito de parallax suave às ilhas
            const ilhasContainers = document.querySelectorAll('.ilhas-container');
            
            window.addEventListener('scroll', function() {
                const scrollY = window.scrollY;
                
                ilhasContainers.forEach((container, index) => {
                    const speed = 0.05 + (index * 0.02);
                    container.style.transform = `translateY(${scrollY * speed}px)`;
                });
            })
        })

 // Dados das ilhas e seus desafios
        const ilhasData = {
            ilha1: {
                nome: "Ilha dos Cálculos Perdidos",
                descricao: "Resolva problemas matemáticos básicos usando fórmulas simples de planilha.",
                itens: [
                    {
                        id: 1,
                        nome: "Mapa Antigo",
                        icone: "📜",
                        valor: "50 moedas",
                        dificuldade: "Fácil",
                        pergunta: "Calcule a soma dos valores: 45, 78, 123, 56, 89. Qual é o resultado?",
                        instrucoesPlanilha: "<p>Na sua planilha, digite os números em células diferentes e use a função <code>=SOMA()</code> para calcular o total.</p><ul><li>Digite 45 na célula A1</li><li>Digite 78 na célula A2</li><li>Digite 123 na célula A3</li><li>Digite 56 na célula A4</li><li>Digite 89 na célula A5</li><li>Na célula A6, digite: <code>=SOMA(A1:A5)</code></li></ul>",
                        resposta: "391"
                    },
                    {
                        id: 2,
                        nome: "Ábaco Dourado",
                        icone: "🧮",
                        valor: "75 moedas",
                        dificuldade: "Fácil",
                        pergunta: "Qual é a média dos números: 12, 18, 24, 30, 36?",
                        instrucoesPlanilha: "<p>Use a função <code>=MÉDIA()</code> para calcular a média dos valores.</p><ul><li>Digite os números nas células A1 até A5</li><li>Na célula A6, digite: <code>=MÉDIA(A1:A5)</code></li></ul>",
                        resposta: "24"
                    },
                    {
                        id: 3,
                        nome: "Tábua de Cálculos",
                        icone: "🔢",
                        valor: "100 moedas",
                        dificuldade: "Médio",
                        pergunta: "Se você tem uma coluna com os valores 15, 25, 35, 45, 55, qual é o resultado da multiplicação de todos esses valores?",
                        instrucoesPlanilha: "<p>Use a função <code>=PRODUTO()</code> para multiplicar todos os valores.</p><ul><li>Digite os números nas células A1 até A5</li><li>Na célula A6, digite: <code>=PRODUTO(A1:A5)</code></li></ul>",
                        resposta: "32484375"
                    }
                ]
            },
            ilha2: {
                nome: "Floresta das Sombras",
                descricao: "Desafios de lógica e fórmulas condicionais para superar as sombras.",
                itens: [
                    {
                        id: 1,
                        nome: "Luneta Noturna",
                        icone: "🔭",
                        valor: "80 moedas",
                        dificuldade: "Médio",
                        pergunta: "Se você tem uma lista de 10 números (5, 12, 8, 20, 3, 15, 9, 17, 6, 11), quantos são maiores que 10?",
                        instrucoesPlanilha: "<p>Use a função <code>=CONT.SE()</code> para contar valores que atendam a um critério.</p><ul><li>Digite os números nas células A1 até A10</li><li>Na célula A11, digite: <code>=CONT.SE(A1:A10;\">10\")</code></li></ul>",
                        resposta: "5"
                    },
                    {
                        id: 2,
                        nome: "Poção das Sombras",
                        icone: "🧪",
                        valor: "120 moedas",
                        dificuldade: "Difícil",
                        pergunta: "Qual é o desvio padrão dos valores: 12, 15, 18, 22, 25, 30, 35, 40?",
                        instrucoesPlanilha: "<p>Use a função <code>=DESVPAD()</code> para calcular o desvio padrão.</p><ul><li>Digite os números nas células A1 até A8</li><li>Na célula A9, digite: <code>=DESVPAD(A1:A8)</code></li></ul>",
                        resposta: "10.23"
                    }
                ]
            },
            ilha3: {
                nome: "Vale dos Guardiões de Pedra",
                descricao: "Problemas complexos que exigem fórmulas avançadas e combinação de funções.",
                itens: [
                    {
                        id: 1,
                        nome: "Chave de Pedra",
                        icone: "🔑",
                        valor: "150 moedas",
                        dificuldade: "Difícil",
                        pergunta: "Se você investir R$ 1.000,00 a uma taxa de juros de 5% ao ano, qual será o valor total após 8 anos?",
                        instrucoesPlanilha: "<p>Use a função <code>=VF()</code> para calcular o valor futuro de um investimento.</p><ul><li>Na célula A1, digite: <code>=VF(5%; 8; 0; -1000; 0)</code></li></ul>",
                        resposta: "1477.46"
                    }
                ]
            }
        };

        // Variáveis globais
        let ilhaAtual = null;
        let itemAtual = null;
        let desafioAtualIndex = 0;

        // Criar estrelas para o fundo
        document.addEventListener('DOMContentLoaded', function() {
            const starsContainer = document.getElementById('stars');
            const starsCount = 80;
            
            for (let i = 0; i < starsCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                const size = Math.random() * 3;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 50}%`;
                
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                starsContainer.appendChild(star);
            }
            
            // Adicionar efeito de parallax suave às ilhas
            const ilhasContainers = document.querySelectorAll('.ilhas-container');
            
            window.addEventListener('scroll', function() {
                const scrollY = window.scrollY;
                
                ilhasContainers.forEach((container, index) => {
                    const speed = 0.05 + (index * 0.02);
                    container.style.transform = `translateY(${scrollY * speed}px)`;
                });
            });
            
            // Configurar eventos de clique para as ilhas
            document.getElementById('ilha01').addEventListener('click', () => abrirModalIlha('ilha1'));
            document.getElementById('ilha02').addEventListener('click', () => abrirModalIlha('ilha2'));
            document.getElementById('ilha03').addEventListener('click', () => abrirModalIlha('ilha3'));
            document.getElementById('ilha04').addEventListener('click', () => abrirModalIlha('ilha4'));
            document.getElementById('ilha05').addEventListener('click', () => abrirModalIlha('ilha5'));
            
            // Fechar modais
            document.getElementById('closeModal').addEventListener('click', fecharModalIlha);
            document.getElementById('closeDesafioModal').addEventListener('click', fecharModalDesafio);
            
            // Configurar evento de envio de resposta
            document.getElementById('submitResposta').addEventListener('click', verificarResposta);
            
            // Configurar navegação entre desafios
            document.getElementById('prevDesafio').addEventListener('click', () => navegarDesafio(-1));
            document.getElementById('nextDesafio').addEventListener('click', () => navegarDesafio(1));
            
            // Permitir enviar resposta com Enter
            document.getElementById('respostaInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    verificarResposta();
                }
            });
            
            // Fechar modais clicando fora deles
            window.addEventListener('click', function(event) {
                if (event.target === document.getElementById('ilhaModal')) {
                    fecharModalIlha();
                }
                if (event.target === document.getElementById('desafioModal')) {
                    fecharModalDesafio();
                }
            });
        });

        // Função para abrir o modal de uma ilha
        function abrirModalIlha(ilhaId) {
            const ilhaData = ilhasData[ilhaId];
            if (!ilhaData) {
                alert('Desafios para esta ilha estarão disponíveis em breve!');
                return;
            }
            
            ilhaAtual = ilhaId;
            
            // Atualizar título e descrição do modal
            document.getElementById('ilhaModalTitle').textContent = ilhaData.nome;
            document.getElementById('ilhaModalDesc').textContent = ilhaData.descricao;
            
            // Limpar e popular os itens
            const itemsContainer = document.getElementById('ilhaItemsContainer');
            itemsContainer.innerHTML = '';
            
            ilhaData.itens.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'item';
                itemElement.setAttribute('data-id', item.id);
                itemElement.innerHTML = `
                    <span class="item-icon">${item.icone}</span>
                    <div class="item-name">${item.nome}</div>
                    <div class="item-value">Valor: ${item.valor}</div>
                `;
                
                itemElement.addEventListener('click', () => abrirDesafio(item));
                itemsContainer.appendChild(itemElement);
            });
            
            // Exibir o modal
            document.getElementById('ilhaModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // Função para fechar o modal da ilha
        function fecharModalIlha() {
            document.getElementById('ilhaModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Função para abrir um desafio
        function abrirDesafio(item) {
            itemAtual = item;
            desafioAtualIndex = 0;
            
            // Preencher informações do desafio
            document.getElementById('desafioTitulo').textContent = item.nome;
            document.getElementById('desafioDificuldade').textContent = item.dificuldade;
            document.getElementById('desafioDescricao').textContent = item.pergunta;
            document.getElementById('planilhaInstrucoes').innerHTML = item.instrucoesPlanilha;
            
            // Limpar campos anteriores
            document.getElementById('respostaInput').value = '';
            document.getElementById('feedback').style.display = 'none';
            
            // Configurar navegação
            document.getElementById('prevDesafio').disabled = true;
            
            // Mostrar modal de desafio
            document.getElementById('desafioModal').style.display = 'flex';
        }

        // Função para fechar o modal de desafio
        function fecharModalDesafio() {
            document.getElementById('desafioModal').style.display = 'none';
        }

        // Função para verificar a resposta
        function verificarResposta() {
            const respostaUsuario = document.getElementById('respostaInput').value.trim();
            const feedback = document.getElementById('feedback');
            
            if (respostaUsuario === '') {
                feedback.textContent = 'Por favor, digite uma resposta.';
                feedback.className = 'feedback incorrect';
                feedback.style.display = 'block';
                return;
            }
            
            if (respostaUsuario === itemAtual.resposta) {
                // Resposta correta
                feedback.textContent = 'Resposta correta! Item coletado com sucesso.';
                feedback.className = 'feedback correct';
                feedback.style.display = 'block';
                
                // Marcar item como coletado
                const items = document.querySelectorAll('.item');
                items.forEach(item => {
                    if (parseInt(item.getAttribute('data-id')) === itemAtual.id) {
                        item.classList.add('collected');
                    }
                });
                
                // Atualizar botão de próximo
                document.getElementById('nextDesafio').textContent = 'Concluir';
            } else {
                // Resposta incorreta
                feedback.textContent = 'Resposta incorreta. Tente novamente!';
                feedback.className = 'feedback incorrect';
                feedback.style.display = 'block';
            }
        }

        // Função para navegar entre desafios
        function navegarDesafio(direction) {
            // Esta função seria usada se houvesse múltiplos desafios por item
            // Por enquanto, apenas fecha o modal quando clicar em "Concluir"
            if (document.getElementById('nextDesafio').textContent === 'Concluir') {
                fecharModalDesafio();
            }
        }