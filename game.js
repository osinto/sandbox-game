// Game constants
const GAME_WIDTH = 400;
const GAME_HEIGHT = 400;
const ZUCKERBERG_SIZE = 30;
const OPENAI_LOGO_SIZE = 20;
const ELON_MUSK_SIZE = 40;

// Game variables
let zuckerbergX = Math.floor(Math.random() * (GAME_WIDTH - ZUCKERBERG_SIZE));
let zuckerbergY = Math.floor(Math.random() * (GAME_HEIGHT - ZUCKERBERG_SIZE));
let openAILogos = [];
let elonMuskX = Math.floor(Math.random() * (GAME_WIDTH - ELON_MUSK_SIZE));
let elonMuskY = Math.floor(Math.random() * (GAME_HEIGHT - ELON_MUSK_SIZE));

// Game functions
function drawGame() {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = "";
    
    // Draw Zuckerberg's head
    const zuckerbergElement = document.createElement("div");
    zuckerbergElement.style.width = `${ZUCKERBERG_SIZE}px`;
    zuckerbergElement.style.height = `${ZUCKERBERG_SIZE}px`;
    zuckerbergElement.style.backgroundImage = "url('https://img.fruugo.com/product/4/44/182762444_max.jpg')";
    zuckerbergElement.style.position = "absolute";
    zuckerbergElement.style.top = `${zuckerbergY}px`;
    zuckerbergElement.style.left = `${zuckerbergX}px`;
    gameContainer.appendChild(zuckerbergElement);
    
    // Draw OpenAI logos
    for (let i = 0; i < openAILogos.length; i++) {
        const openAIElement = document.createElement("div");
        openAIElement.style.width = `${OPENAI_LOGO_SIZE}px`;
        openAIElement.style.height = `${OPENAI_LOGO_SIZE}px`;
        openAIElement.style.backgroundImage = "url('https://static-00.iconduck.com/assets.00/openai-icon-2021x2048-4rpe5x7n.png')";
        openAIElement.style.position = "absolute";
        openAIElement.style.top = `${openAILogos[i].y}px`;
        openAIElement.style.left = `${openAILogos[i].x}px`;
        gameContainer.appendChild(openAIElement);
    }
    
    // Draw Elon Musk's ghost
    const elonMuskElement = document.createElement("div");
    elonMuskElement.style.width = `${ELON_MUSK_SIZE}px`;
    elonMuskElement.style.height = `${ELON_MUSK_SIZE}px`;
    elonMuskElement.style.backgroundImage = "url('https://p7.hiclipart.com/preview/124/1020/1006/elon-musk-tesla-motors-chief-executive-falcon-heavy-business-business.jpg')";
    elonMuskElement.style.position = "absolute";
    elonMuskElement.style.top = `${elonMuskY}px`;
    elonMuskElement.style.left = `${elonMuskX}px`;
    gameContainer.appendChild(elonMuskElement);
}

function updateGame() {
    // Update Zuckerberg's head position
    zuckerbergX += Math.floor(Math.random() * 5) - 2;
    zuckerbergY += Math.floor(Math.random() * 5) - 2;
    
    // Update OpenAI logos positions
    for (let i = 0; i < openAILogos.length; i++) {
        openAILogos[i].x += Math.floor(Math.random() * 3) - 1;
        openAILogos[i].y += Math.floor(Math.random() * 3) - 1;
        
        // Check if Zuckerberg's head collides with an OpenAI logo
        if (checkCollision(zuckerbergX, zuckerbergY, openAILogos[i].x, openAILogos[i].y)) {
            // Remove the OpenAI logo from the game
            openAILogos.splice(i, 1);
        }
    }
    
    // Update Elon Musk's ghost position
    elonMuskX += Math.floor(Math.random() * 5) - 2;
    elonMuskY += Math.floor(Math.random() * 5) - 2;
}

function checkCollision(x1, y1, x2, y2) {
    if (Math.abs(x1 - x2) < (ZUCKERBERG_SIZE + OPENAI_LOGO_SIZE) / 2 && Math.abs(y1 - y2) < (ZUCKERBERG_SIZE + OPENAI_LOGO_SIZE) / 2) {
        return true;
    }
    return false;
}

// Game loop
setInterval(() => {
    updateGame();
    drawGame();
}, 100);

// Initialize the game with some OpenAI logos
for (let i = 0; i < 10; i++) {
    openAILogos.push({
        x: Math.floor(Math.random() * (GAME_WIDTH - OPENAI_LOGO_SIZE)),
        y: Math.floor(Math.random() * (GAME_HEIGHT - OPENAI_LOGO_SIZE))
    });
}
