let car = document.getElementById('car');
let otherCar = document.getElementById('otherCar');
let gameArea = document.getElementById('gameArea');
let gameOver = document.getElementById('gameOver');
let carSpeed = 5;
let otherCarSpeed = 4;

let carPosition = { x: 150, y: 500 };
let otherCarPosition = { x: 150, y: -100 };

document.addEventListener('keydown', moveCar);

function moveCar(event) {
    if (event.key === 'ArrowLeft' && carPosition.x > 0) {
        carPosition.x -= carSpeed;
    } else if (event.key === 'ArrowRight' && carPosition.x < 350) {
        carPosition.x += carSpeed;
    }
    car.style.left = carPosition.x + 'px';
}

function moveOtherCar() {
    otherCarPosition.y += otherCarSpeed;
    if (otherCarPosition.y > 600) {
        otherCarPosition.y = -100;
        otherCarPosition.x = Math.floor(Math.random() * 350);
    }
    otherCar.style.top = otherCarPosition.y + 'px';
    otherCar.style.left = otherCarPosition.x + 'px';
}

function checkCollision() {
    if (
        carPosition.x < otherCarPosition.x + 50 &&
        carPosition.x + 50 > otherCarPosition.x &&
        carPosition.y < otherCarPosition.y + 100 &&
        carPosition.y + 100 > otherCarPosition.y
    ) {
        gameOver.style.display = 'block';
        clearInterval(gameLoop);
    }
}

let gameLoop = setInterval(() => {
    moveOtherCar();
    checkCollision();
}, 20);
