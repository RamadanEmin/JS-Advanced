// Select game screens
const gameStart = document.querySelector('.game-start');
const gameArea = document.querySelector('.game-area');
const gameOver = document.querySelector('.game-over');
const gameScore = document.querySelector('.game-score');
const gamePoints = gameScore.querySelector('.points');

// Game start listener
gameStart.addEventListener('click', onGameStart);

// Global key listeners
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

let keys = {};
let player = {
    x: 150,
    y: 100,
    width: 0,
    height: 0,
    lastTimeFiredFireball: 0
};
let game = {
    speed: 2,
    movingMultiplier: 4,
    fireBallMultiplier: 5,
    fireInterval: 500,
    cloudSpawnInterval: 3000,
    bugSpawnInterval: 1000,
    bugKillBonus: 2000
};
let scene = {
    score: 0,
    lastCloudSpawn: 0,
    lastBugSpawn: 0,
    isActiveGame: true
};

// Game start function
function onGameStart() {
    gameStart.classList.add('hide');

    // Render wizard
    const wizard = document.createElement('div');
    wizard.classList.add('wizard');
    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';
    gameArea.appendChild(wizard);

    player.width = wizard.offsetWidth;
    player.height = wizard.offsetHeight;

    // Game infinite loop
    window.requestAnimationFrame(gameAction);

}

// Key handlers
function onKeyDown(e) {
    keys[e.code] = true;
}
function onKeyUp(e) {
    keys[e.code] = false;
}

// Game loop function
function gameAction(timestamp) {
    const wizard = document.querySelector('.wizard');

    // Increment score count
    scene.score++;

    // Add bugs
    if (timestamp - scene.lastBugSpawn > game.bugSpawnInterval + 5000 * Math.random()) {
        let bug = document.createElement('div');
        bug.classList.add('bug');
        bug.x = gameArea.offsetWidth - 60;
        bug.style.left = bug.x + 'px';
        bug.style.top = (gameArea.offsetHeight - 60) * Math.random() + 'px';
        gameArea.appendChild(bug);
        scene.lastBugSpawn = timestamp;
    }

    // Modify bug positions
    let bugs = document.querySelectorAll('.bug');
    bugs.forEach(bug => {
        bug.x -= game.speed * 3;
        bug.style.left = bug.x + 'px';

        if (bug.x + bug.offsetWidth <= 0) {
            bug.parentElement.removeChild(bug);
        }
    });

    // Add clouds
    if (timestamp - scene.lastCloudSpawn > game.cloudSpawnInterval + 20000 * Math.random()) {
        let cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.x = gameArea.offsetWidth - 200;
        cloud.style.left = cloud.x + 'px';
        cloud.style.top = (gameArea.offsetHeight - 200) * Math.random() + 'px';
        gameArea.appendChild(cloud);
        scene.lastCloudSpawn = timestamp;
    }

    // Modify cloud positions
    let clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        cloud.x -= game.speed;
        cloud.style.left = cloud.x + 'px';

        if (cloud.x + cloud.offsetWidth <= 0) {
            cloud.parentElement.removeChild(cloud);
        }
    });

    // Apply gravitation
    let isInAir = (player.y + player.height) <= gameArea.offsetHeight;
    if (isInAir) {
        player.y += game.speed;
    }
    if ((keys.ArrowDown || keys.KeyS) && isInAir) {
        player.y += game.speed * game.movingMultiplier;
    }

    // Modify fireballs positions
    let fireBalls = document.querySelectorAll('.fire-ball');
    fireBalls.forEach(fireBall => {
        fireBall.x += game.speed * game.fireBallMultiplier;
        fireBall.style.left = fireBall.x + 'px';

        if (fireBall.x + fireBall.offsetWidth > gameArea.offsetWidth) {
            fireBall.parentElement.removeChild(fireBall);
        }
    });

    // Register user input
    if ((keys.ArrowUp || keys.KeyW) && player.y > 0) {
        player.y -= game.speed * game.movingMultiplier;
    }
    if ((keys.ArrowDown || keys.KeyS) && player.y + player.height < gameArea.offsetHeight) {
        player.y += game.speed * game.movingMultiplier;
    }
    if ((keys.ArrowLeft || keys.KeyA) && player.x > 0) {
        player.x -= game.speed * game.movingMultiplier;
    }
    if ((keys.ArrowRight || keys.KeyD) && player.x + player.width < gameArea.offsetWidth) {
        player.x += game.speed * game.movingMultiplier;
    }
    if (keys.Space && timestamp - player.lastTimeFiredFireball > game.fireInterval) {
        wizard.classList.add('wizard-fire');
        addFireBall(player);
        player.lastTimeFiredFireball = timestamp;
    } else {
        wizard.classList.remove('wizard-fire');
    }

    // Apply movement
    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';

    // Collision detection
    bugs.forEach(bug => {
        if (isCollision(wizard, bug)) {
            gameOverAction();
        }

        fireBalls.forEach(fireBall => {
            if (isCollision(fireBall, bug)) {
                scene.score += game.bugKillBonus;
                bug.parentElement.removeChild(bug);
                fireBall.parentElement.removeChild(fireBall);
            }
        });
    });

    // Apply score
    gamePoints.textContent = scene.score;

    if (scene.isActiveGame) {
        window.requestAnimationFrame(gameAction);
    }
}

function addFireBall(player) {
    let fireBall = document.createElement('div');

    fireBall.classList.add('fire-ball');
    fireBall.style.top = (player.y + player.height / 3 - 5) + 'px';
    fireBall.x = player.x + player.width;
    fireBall.style.left = fireBall.x + 'px';
    gameArea.appendChild(fireBall);
}

function isCollision(firstElement, secondElement) {
    let firstRect = firstElement.getBoundingClientRect();
    let secondRect = secondElement.getBoundingClientRect();

    return !(firstRect.top > secondRect.bottom ||
        firstRect.bottom < secondRect.top ||
        firstRect.right < secondRect.left ||
        firstRect.left > secondRect.right);
}

function gameOverAction() {
    scene.isActiveGame = false;
    gameOver.classList.remove('hide');
    gameOver.innerHTML = "😭 " + "GAME OVER. " + `Your final score is: ${scene.score} pts.`;
    gameStart.classList.remove('hide');
    gameStart.style.top = "500px";
    gameScore.style.bottom = "250px";
}
