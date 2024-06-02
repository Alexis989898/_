function explodeButton() {
    const button = document.getElementById('actionButton');
    const explosion = document.getElementById('explosion');
    const carCrash = document.getElementById('carcrash');
    const explosionSound = document.getElementById('explosionSound');
    const carCrashSound = document.getElementById('carcrashSound');

    // Hide the button and show the explosion
    button.style.display = 'none';
    explosion.style.display = 'block';
    carCrash.style.display = 'block';

    // Play the explosion sound
    explosionSound.play();
    carCrashSound.play();

    // After the explosion animation ends, display random text
    setTimeout(() => {
        explosion.style.display = 'none';
    }, 1000); // Adjust this timeout based on the length of your explosion animation

    setTimeout(() => {
        carCrash.style.display = 'none';
        displayText();
    }, 3000); // Adjust this timeout based on the length of your explosion animation
}

function displayText() {
    const textElement = document.createElement('div');
    textElement.textContent = `Os biocombustíveis são combustíveis derivados de biomassa, como plantas e resíduos orgânicos. Eles incluem etanol, biodiesel, biogás e outros combustíveis renováveis. Sua importância para a humanidade é significativa por várias razões.

    Primeiramente, os biocombustíveis ajudam a reduzir a dependência de combustíveis fósseis, como petróleo, carvão e gás natural. Isso é crucial para a segurança energética, pois diminui a vulnerabilidade a flutuações de preços e instabilidades geopolíticas.
    
    Em segundo lugar, os biocombustíveis emitem menos gases de efeito estufa em comparação com os combustíveis fósseis, contribuindo para a mitigação das mudanças climáticas. A utilização de biocombustíveis pode ajudar a reduzir as emissões de CO2, um dos principais responsáveis pelo aquecimento global.
    
    Além disso, a produção de biocombustíveis pode estimular o desenvolvimento econômico, especialmente em áreas rurais. A agricultura de biomassa cria empregos e oferece novas oportunidades para agricultores e comunidades locais, promovendo o desenvolvimento sustentável.
    
    No entanto, é importante considerar os desafios associados aos biocombustíveis, como a competição com a produção de alimentos e os impactos ambientais do cultivo intensivo de biomassa. O desenvolvimento de tecnologias avançadas, como os biocombustíveis de segunda e terceira geração, que utilizam resíduos e algas, pode ajudar a superar esses obstáculos.
    
    Em resumo, os biocombustíveis são essenciais para a transição energética global. Eles oferecem uma alternativa mais sustentável e menos poluente aos combustíveis fósseis, contribuindo para a segurança energética, a redução das emissões de gases de efeito estufa e o desenvolvimento econômico.`;
    textElement.style.fontSize = '24px';
    textElement.classList.add('fade-in');

    document.querySelector('.container').appendChild(textElement);
}
