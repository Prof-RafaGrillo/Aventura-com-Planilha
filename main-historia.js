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
                        desafios: [
                            {
                                pergunta: "Calcule a soma dos valores: 45, 78, 123, 56, 89. Qual é o resultado?",
                                instrucoesPlanilha: "<p>Na sua planilha, digite os números em células diferentes e use a função <code>=SOMA()</code> para calcular o total.</p><ul><li>Digite 45 na célula A1</li><li>Digite 78 na célula A2</li><li>Digite 123 na célula A3</li><li>Digite 56 na célula A4</li><li>Digite 89 na célula A5</li><li>Na célula A6, digite: <code>=SOMA(A1:A5)</code></li></ul>",
                                resposta: "391",
                                dificuldade: "Fácil"
                            },
                            {
                                pergunta: "Qual é a média dos números: 12, 18, 24, 30, 36?",
                                instrucoesPlanilha: "<p>Use a função <code>=MÉDIA()</code> para calcular a média dos valores.</p><ul><li>Digite os números nas células A1 até A5</li><li>Na célula A6, digite: <code>=MÉDIA(A1:A5)</code></li></ul>",
                                resposta: "24",
                                dificuldade: "Fácil"
                            },
                            {
                                pergunta: "Se você tem uma coluna com os valores 15, 25, 35, 45, 55, qual é o resultado da multiplicação de todos esses valores?",
                                instrucoesPlanilha: "<p>Use a função <code>=PRODUTO()</code> para multiplicar todos os valores.</p><ul><li>Digite os números nas células A1 até A5</li><li>Na célula A6, digite: <code>=PRODUTO(A1:A5)</code></li></ul>",
                                resposta: "32484375",
                                dificuldade: "Médio"
                            }
                        ]
                    },
                    {
                        id: 2,
                        nome: "Ábaco Dourado",
                        icone: "🧮",
                        valor: "75 moedas",
                        desafios: [
                            {
                                pergunta: "Se você tem uma lista de 10 números (5, 12, 8, 20, 3, 15, 9, 17, 6, 11), quantos são maiores que 10?",
                                instrucoesPlanilha: "<p>Use a função <code>=CONT.SE()</code> para contar valores que atendam a um critério.</p><ul><li>Digite os números nas células A1 até A10</li><li>Na célula A11, digite: <code>=CONT.SE(A1:A10;\">10\")</code></li></ul>",
                                resposta: "5",
                                dificuldade: "Médio"
                            },
                            {
                                pergunta: "Qual é o desvio padrão dos valores: 12, 15, 18, 22, 25, 30, 35, 40?",
                                instrucoesPlanilha: "<p>Use a função <code>=DESVPAD()</code> para calcular o desvio padrão.</p><ul><li>Digite os números nas células A1 até A8</li><li>Na célula A9, digite: <code>=DESVPAD(A1:A8)</code></li></ul>",
                                resposta: "10.23",
                                dificuldade: "Difícil"
                            }
                        ]
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
                        desafios: [
                            {
                                pergunta: "Se você investir R$ 1.000,00 a uma taxa de juros de 5% ao ano, qual será o valor total após 8 anos?",
                                instrucoesPlanilha: "<p>Use a função <code>=VF()</code> para calcular o valor futuro de um investimento.</p><ul><li>Na célula A1, digite: <code>=VF(5%; 8; 0; -1000; 0)</code></li></ul>",
                                resposta: "1477.46",
                                dificuldade: "Médio"
                            },
                            {
                                pergunta: "Qual é o valor presente de um investimento que renderá R$ 2.000,00 em 5 anos com uma taxa de desconto de 6% ao ano?",
                                instrucoesPlanilha: "<p>Use a função <code>=VP()</code> para calcular o valor presente.</p><ul><li>Na célula A1, digite: <code>=VP(6%; 5; 0; 2000; 0)</code></li></ul>",
                                resposta: "1494.52",
                                dificuldade: "Difícil"
                            }
                        ]
                    },
                    {
                        id: 2,
                        nome: "Poção das Sombras",
                        icone: "🧪",
                        valor: "120 moedas",
                        desafios: [
                            {
                                pergunta: "Crie uma tabela com 3 colunas: Nome, Idade e Cidade. Use a função =CONT.SES() para contar quantas pessoas têm mais de 30 anos e são da cidade 'Rio de Janeiro'.",
                                instrucoesPlanilha: "<p>Crie uma tabela com dados de exemplo e use a função <code>=CONT.SES()</code> com múltiplos critérios.</p><ul><li>Digite os dados nas colunas A, B e C</li><li>Use: <code>=CONT.SES(B2:B10;\">30\"; C2:C10; \"Rio de Janeiro\")</code></li></ul>",
                                resposta: "3",
                                dificuldade: "Difícil"
                            }
                        ]
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
                        desafios: [
                            {
                                pergunta: "Crie uma planilha com uma lista de produtos, quantidades e preços. Calcule o valor total de cada produto e depois o valor total geral.",
                                instrucoesPlanilha: "<p>Use multiplicação entre colunas e depois a função <code>=SOMA()</code>.</p><ul><li>Coluna A: Nomes dos produtos</li><li>Coluna B: Quantidades</li><li>Coluna C: Preços unitários</li><li>Coluna D: <code>=B2*C2</code> (e arraste para baixo)</li><li>Em uma célula: <code>=SOMA(D2:D10)</code></li></ul>",
                                resposta: "Varia conforme os dados",
                                dificuldade: "Médio"
                            },
                            {
                                pergunta: "Use a função =PROCV() para buscar o preço de um produto específico em uma tabela.",
                                instrucoesPlanilha: "<p>Crie uma tabela de produtos e preços, depois use <code>=PROCV()</code> para buscar um valor.</p><ul><li>Tabela em A1:B10</li><li>Em D1, digite o nome do produto a buscar</li><li>Em E1: <code>=PROCV(D1; A1:B10; 2; FALSO)</code></li></ul>",
                                resposta: "Varia conforme os dados",
                                dificuldade: "Difícil"
                            }
                        ]
                    }
                ]
            },
            ilha4: {
                nome: "Montanha de Fogo",
                descricao: "Desafios avançados com fórmulas complexas e análise de dados.",
                itens: [
                    {
                        id: 1,
                        nome: "Cristal de Fogo",
                        icone: "🔮",
                        valor: "200 moedas",
                        desafios: [
                            {
                                pergunta: "Crie um gráfico de pizza para representar as vendas por categoria: Eletrônicos (45%), Roupas (30%), Livros (15%), Outros (10%). Qual é o ângulo do setor de Eletrônicos?",
                                instrucoesPlanilha: "<p>Insira os dados e crie um gráfico de pizza. O ângulo pode ser calculado com: <code>=360*porcentagem</code>.</p>",
                                resposta: "162",
                                dificuldade: "Médio"
                            },
                            {
                                pergunta: "Use a função =SE() aninhada para classificar notas: acima de 90 é 'A', entre 80-89 é 'B', entre 70-79 é 'C', abaixo de 70 é 'D'.",
                                instrucoesPlanilha: "<p>Use: <code>=SE(A1>=90; \"A\"; SE(A1>=80; \"B\"; SE(A1>=70; \"C\"; \"D\")))</code></p>",
                                resposta: "Varia conforme a nota",
                                dificuldade: "Difícil"
                            }
                        ]
                    }
                ]
            },
            ilha5: {
                nome: "Castelo do Tesouro Final",
                descricao: "Desafios mestres que combinam todas as habilidades de planilha aprendidas.",
                itens: [
                    {
                        id: 1,
                        nome: "Tesouro Final",
                        icone: "🏆",
                        valor: "500 moedas",
                        desafios: [
                            {
                                pergunta: "Crie uma planilha de controle de gastos mensais com categorias e use a função =SOMASES() para calcular o total gasto em cada categoria.",
                                instrucoesPlanilha: "<p>Crie uma tabela com Data, Descrição, Categoria e Valor. Use <code>=SOMASES()</code> para somar por categoria.</p>",
                                resposta: "Varia conforme os dados",
                                dificuldade: "Difícil"
                            },
                            {
                                pergunta: "Use a função =ÍNDICE() combinada com =CORRESP() para fazer uma busca avançada na tabela.",
                                instrucoesPlanilha: "<p>Use: <code>=ÍNDICE(intervalo_dados; CORRESP(valor_busca; intervalo_busca; 0); número_coluna)</code></p>",
                                resposta: "Varia conforme os dados",
                                dificuldade: "Especialista"
                            }
                        ]
                    }
                ]
            }
        };

        // Variáveis globais
        let ilhaAtual = null;
        let itemAtual = null;
        let desafioAtualIndex = 0;
        let progressoDesafios = {};

        // Inicializar o progresso dos desafios
        function inicializarProgresso() {
            for (const ilhaId in ilhasData) {
                progressoDesafios[ilhaId] = {};
                for (const item of ilhasData[ilhaId].itens) {
                    progressoDesafios[ilhaId][item.id] = {
                        completos: 0,
                        total: item.desafios.length
                    };
                }
            }
        }

        // Criar estrelas para o fundo
        document.addEventListener('DOMContentLoaded', function() {
            inicializarProgresso();
            
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
                const progresso = progressoDesafios[ilhaId][item.id];
                const porcentagemConcluido = progresso.total > 0 ? (progresso.completos / progresso.total) * 100 : 0;
                
                const itemElement = document.createElement('div');
                itemElement.className = 'item';
                itemElement.setAttribute('data-id', item.id);
                itemElement.innerHTML = `
                    <span class="item-icon">${item.icone}</span>
                    <div class="item-name">${item.nome}</div>
                    <div class="item-value">Valor: ${item.valor}</div>
                    <div class="item-progress">
                        <div class="item-progress-bar" style="width: ${porcentagemConcluido}%"></div>
                    </div>
                `;
                
                // Marcar como coletado se todos os desafios foram concluídos
                if (progresso.completos === progresso.total && progresso.total > 0) {
                    itemElement.classList.add('collected');
                }
                
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
            
            // Preencher informações do primeiro desafio
            atualizarDesafio();
            
            // Mostrar modal de desafio
            document.getElementById('desafioModal').style.display = 'flex';
        }

        // Função para atualizar o desafio exibido
        function atualizarDesafio() {
            const desafio = itemAtual.desafios[desafioAtualIndex];
            
            // Preencher informações do desafio
            document.getElementById('desafioTitulo').textContent = itemAtual.nome;
            document.getElementById('desafioDificuldade').textContent = desafio.dificuldade;
            document.getElementById('desafioDescricao').textContent = desafio.pergunta;
            document.getElementById('planilhaInstrucoes').innerHTML = desafio.instrucoesPlanilha;
            document.getElementById('desafioCounter').textContent = `Desafio ${desafioAtualIndex + 1} de ${itemAtual.desafios.length}`;
            
            // Limpar campos anteriores
            document.getElementById('respostaInput').value = '';
            document.getElementById('feedback').style.display = 'none';
            
            // Configurar navegação
            document.getElementById('prevDesafio').disabled = desafioAtualIndex === 0;
            
            // Verificar se é o último desafio
            if (desafioAtualIndex === itemAtual.desafios.length - 1) {
                document.getElementById('nextDesafio').textContent = 'Concluir';
            } else {
                document.getElementById('nextDesafio').textContent = 'Próximo';
            }
        }

        // Função para fechar o modal de desafio
        function fecharModalDesafio() {
            document.getElementById('desafioModal').style.display = 'none';
        }

        // Função para verificar a resposta
        function verificarResposta() {
            const respostaUsuario = document.getElementById('respostaInput').value.trim();
            const feedback = document.getElementById('feedback');
            const desafio = itemAtual.desafios[desafioAtualIndex];
            
            if (respostaUsuario === '') {
                feedback.textContent = 'Por favor, digite uma resposta.';
                feedback.className = 'feedback incorrect';
                feedback.style.display = 'block';
                return;
            }
            
            // Para respostas que variam conforme os dados, aceitamos qualquer resposta não vazia
            const respostaValida = desafio.resposta.toLowerCase().includes('varia') ? 
                respostaUsuario !== '' : respostaUsuario === desafio.resposta;
            
            if (respostaValida) {
                // Resposta correta
                feedback.textContent = 'Resposta correta!';
                feedback.className = 'feedback correct';
                feedback.style.display = 'block';
                
                // Atualizar progresso
                progressoDesafios[ilhaAtual][itemAtual.id].completos = desafioAtualIndex + 1;
                
                // Se for o último desafio, marcar item como coletado
                if (desafioAtualIndex === itemAtual.desafios.length - 1) {
                    setTimeout(() => {
                        fecharModalDesafio();
                        abrirModalIlha(ilhaAtual); // Recarregar o modal para atualizar o progresso
                    }, 1500);
                }
            } else {
                // Resposta incorreta
                feedback.textContent = 'Resposta incorreta. Tente novamente!';
                feedback.className = 'feedback incorrect';
                feedback.style.display = 'block';
            }
        }

        // Função para navegar entre desafios
        function navegarDesafio(direction) {
            // Se estiver no último desafio e clicar em "Concluir", fechar o modal
            if (direction === 1 && desafioAtualIndex === itemAtual.desafios.length - 1) {
                fecharModalDesafio();
                abrirModalIlha(ilhaAtual); // Recarregar o modal para atualizar o progresso
                return;
            }
            
            // Navegar para o próximo ou anterior desafio
            desafioAtualIndex += direction;
            atualizarDesafio();
        }