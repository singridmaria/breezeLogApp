// Função para atualizar os dados de velocidade do vento
function updateWindSpeed() {
    var windSpeedElement = document.getElementById("wind-speed");
    var speed = (Math.random() * 20).toFixed(2); // Simula a velocidade do vento entre 0 e 20
    windSpeedElement.textContent = speed;
}

// Atualiza os dados de velocidade e direção do vento a cada segundo
setInterval(function() {
    updateWindSpeed();
}, 1000);
