// ENEMIES our player must avoid
var Enemy = function(coordX, coordY, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // Setting the Enemy initial location (you need to implement)
    this.x = coordX;
    this.y = coordY;
    // Setting the Enemy speed (you need to implement)
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(coordX, coordY) {
    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.playerSprite = 'images/char-boy.png';
    this.x = coordX;
    this.y = coordY;


}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.playerSprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var enemy1 = new Enemy(0, 60, 100);
var enemy2 = new Enemy(0, 145, 200);
var enemy3 = new Enemy(0, 230, 50);

var allEnemies = [enemy3, enemy2, enemy1];
// Place the player object in a variable called player

var player = new Player(205, 405); 

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});