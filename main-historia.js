document.addEventListener('DOMContentLoaded', function(){
    const ocean = document.getElementById('ocean')

    function createWave(){
        const wave = document.createElement('div')
        wave.classList.add('wave')

        //tamanho aleatório
        const size = Math.random() * 100 + 50
        wave.style.width = `${size}px`;
        wave.style.height = `${size}px`;

        //Posição aleatória
        const left = Math.random() *100;
        const top = Math.random()*100;
        wave.style.left = `${left}%`;
        wave.style.top = `${top}%`;
       
        //Duração e delay aleatórios
        const duration = Math.random()* 30 + 15;
        const delay = Math.random() * 5;
        wave.style.animationDuration = `${duration}s`
        wave.style.animationDelay = `-${delay}s`;

        ocean.appendChild(wave);

        return wave;

    }

    

      function createLightReflection() {
                const light = document.createElement('div');
                light.classList.add('light-reflection');
                
                // Largura e posição horizontal aleatórias
                const width = Math.random() * 1 + 3; // 5% a 15% de largura
                const left = Math.random() * 100;
                light.style.width = `${width}%`;
                light.style.left = `${left}%`;
                
                // Altura e posição vertical
                const height = Math.random() * 15 + 10; // 10% a 25% de altura
                light.style.height = `${height}%`;
                
                // Duração e delay aleatórios
                const duration = Math.random() * 15 + 10; // 10 a 25 segundos
                const delay = Math.random() * 10;
                light.style.animationDuration = `${duration}s`;
                light.style.animationDelay = `-${delay}s`;
                
                // Adicionar ao oceano
                ocean.appendChild(light);
                
                return light;
            }
            
            for (let i = 0; i<8; i++){
                createWave()
            }

              // Criar reflexos de luz iniciais
            for (let i = 0; i < 5; i++) {
                createLightReflection();
            }
            
           
        


});