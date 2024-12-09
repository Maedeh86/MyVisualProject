const colorDisplay = document.getElementById('colorDisplay');
const gameContainer = document.getElementById('gameContainer');
const messageDisplay = document.getElementById('message');
let correctColor;

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateGame() {
    // Clear previous game state
    gameContainer.innerHTML = '';
    messageDisplay.textContent = '';

    // Generate random colors
    const colors = [];
    for (let i = 0; i < 6; i++) {
        colors.push(generateRandomColor());
    }

    // Select a correct color
    correctColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = correctColor;

    //  color boxes
    colors.forEach(color => {
        const box = document.createElement('div');
        box.classList.add('colorBox');
        box.style.backgroundColor = color;
        box.addEventListener('click', () => checkGuess(color));
        gameContainer.appendChild(box);
    });
}

function checkGuess(color) {
    if (color === correctColor) {
        messageDisplay.textContent = 'Correct! You guessed the color!';
        document.querySelectorAll('.colorBox').forEach(box => {
            box.style.backgroundColor = correctColor;
        });
    } else {
        messageDisplay.textContent = 'Try again!';
    }
}

function resetGame() {
    generateGame();
}

generateGame();
