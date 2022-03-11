const INPUT_MAX_HEALTH = prompt('Maximum health game healthbar', '100');
const PLAYER_ATTACK_VALUE = 10;
const PLAYER_HEAL_VALUE = 10;
const MONSTER_ATTACK_VALUE = 15;
const STRONG_PLAYER_ATTACK_VALUE = 15;
const STRONG_MONSTER_ATTACK_VALUE = 17;
const MESSAGE_WIN = 'You won!';
const MESSAGE_LOSE = 'You lose... :(';
const MESSAGE_DRAW = 'You lose... :(';
const MESSAGE_BONUS_LIFE = 'Get a second chance peasant!';
const MESSAGE_BAD_HEALTH_INPUT = 'Invalid max health, health set to 50';
const EVENT_ON_CLICK = 'click';
const LOG_EVENT_GAME_START = 'GAME START: ';
const LOG_EVENT_ATTACK = 'PLAYER ATTACK: ';
const LOG_EVENT_STRONG_ATTACK = 'PLAYER STRONG ATTACK: ';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER ATTACK: ';
const LOG_EVENT_STRONG_MONSTER_ATTACK = 'MONSTER STRONG ATTACK: ';
const LOG_EVENT_HEAL = 'PLAYER HEAL: ';
const LOG_EVENT_BONUS_LIFE = 'BONUS LIFE ';
const LOG_EVENT_GAME_OVER = 'GAME OVER: ';

if (isNaN(INPUT_MAX_HEALTH) || Number(INPUT_MAX_HEALTH) <= 0) {
	alert(MESSAGE_BAD_HEALTH_INPUT);
}

let MAX_HEALTH = Number(INPUT_MAX_HEALTH) || 50;
let currentPlayerHealth = MAX_HEALTH;
let currentMonsterHealth = MAX_HEALTH;
let extraLifes = true;
let battleLog = [];

adjustHealthBars(MAX_HEALTH);
writeBattleLog(LOG_EVENT_GAME_START, 0, MAX_HEALTH, MAX_HEALTH);

function writeBattleLog(prEvent, prValue, prMonsterHealth, prPlayerHealth) {
	let logEntry = {
		event: prEvent,
		value: prValue,
		monsterHealth: prMonsterHealth,
		playerHealth: prPlayerHealth,
	};

	battleLog.push(logEntry);
}

function attackHandler() {
	performAttack(PLAYER_ATTACK_VALUE, MONSTER_ATTACK_VALUE);
}

function strongAttackHandler() {
	performAttack(STRONG_PLAYER_ATTACK_VALUE, STRONG_MONSTER_ATTACK_VALUE);
}

function healPlayerHandler() {
	let healEffect;
	if (MAX_HEALTH >= currentPlayerHealth + PLAYER_HEAL_VALUE) {
		healEffect = PLAYER_HEAL_VALUE;
		currentPlayerHealth += PLAYER_HEAL_VALUE;
	} else if (MAX_HEALTH !== currentPlayerHealth) {
		healEffect = MAX_HEALTH - currentPlayerHealth;
		currentPlayerHealth = MAX_HEALTH;
	}

	increasePlayerHealth(healEffect);
	writeBattleLog(LOG_EVENT_HEAL, healEffect, currentMonsterHealth, currentPlayerHealth);

	performAttack(0, MONSTER_ATTACK_VALUE);
}

function performAttack(player_attack, monster_attack) {
	const initialPlayerHealth = currentPlayerHealth;
	let damageDealt;

	damageDealt = dealMonsterDamage(player_attack);
	currentMonsterHealth -= damageDealt;
	if (player_attack == STRONG_PLAYER_ATTACK_VALUE) {
		writeBattleLog(LOG_EVENT_STRONG_ATTACK, damageDealt, currentMonsterHealth, currentPlayerHealth);
	} else if (player_attack == PLAYER_ATTACK_VALUE) {
		writeBattleLog(LOG_EVENT_ATTACK, damageDealt, currentMonsterHealth, currentPlayerHealth);
	}

	damageDealt = dealPlayerDamage(monster_attack);
	currentPlayerHealth -= damageDealt;
	if (player_attack == STRONG_PLAYER_ATTACK_VALUE) {
		writeBattleLog(LOG_EVENT_STRONG_MONSTER_ATTACK, damageDealt, currentMonsterHealth, currentPlayerHealth);
	} else {
		writeBattleLog(LOG_EVENT_MONSTER_ATTACK, damageDealt, currentMonsterHealth, currentPlayerHealth);
	}

	if (currentPlayerHealth <= 0 && extraLifes) {
		extraLifes = !extraLifes;
		currentPlayerHealth = initialPlayerHealth;
		setPlayerHealth(currentPlayerHealth);
		removeBonusLife();
		alert(MESSAGE_BONUS_LIFE);
		writeBattleLog(LOG_EVENT_BONUS_LIFE, 0, currentMonsterHealth, currentPlayerHealth);
	}

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		resetBoard(MESSAGE_WIN);
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		resetBoard(MESSAGE_LOSE);
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
		resetBoard(MESSAGE_DRAW);
	}
}

function resetBoard(message) {
	alert(message);
	currentPlayerHealth = MAX_HEALTH;
	currentMonsterHealth = MAX_HEALTH;
	extraLifes = true;
	resetGame(MAX_HEALTH);
	writeBattleLog(LOG_EVENT_GAME_OVER, message, currentMonsterHealth, currentPlayerHealth);
}

function showBattleLog() {
	let i = 0;
	for (const logEntry of battleLog) {
		console.log(`Entry <#${i}>`);
		for (const prop in logEntry) {
			console.log(`${prop}<${logEntry[prop]}>`);
		}
		i++;
	}
}

attackBtn.addEventListener(EVENT_ON_CLICK, attackHandler);
strongAttackBtn.addEventListener(EVENT_ON_CLICK, strongAttackHandler);
healBtn.addEventListener(EVENT_ON_CLICK, healPlayerHandler);
logBtn.addEventListener(EVENT_ON_CLICK, showBattleLog);
