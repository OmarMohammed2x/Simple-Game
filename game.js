function Character(name, health) {
  this.name = name;
  this.health = health;
  this.attack = function () {
    return Math.floor(Math.random() * 20) + 1;
  };
  this.attackEnemy = function (enemy) {
    enemy.health -= this.attack();
    console.log(`${enemy.name}'s health is : ${enemy.health}`);
  };
}

const warrior = new Character("Omar", 100);
const monster = new Character("Stick Man", 80);

// ------------------------------------

const playerOneAttackBtn = document.getElementById("attack1");
const playerTwoAttackBtn = document.getElementById("attack2");
const playerOneHealth = document.getElementById("health1");
const playerTwoHealth = document.getElementById("health2");

playerOneAttackBtn.addEventListener("click", function () {

  warrior.attackEnemy(monster);
  playerTwoHealth.textContent = monster.health;
    if(monster.health <= 0){
        alert("Warrior won!");
        location.reload();
    }
});
playerTwoAttackBtn.addEventListener("click", function () {
  monster.attackEnemy(warrior);
  playerOneHealth.textContent = warrior.health;
  if(warrior.health <= 0){
    alert("Monster won!");
    location.reload();
}
});
