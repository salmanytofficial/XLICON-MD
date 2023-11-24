//SCRIPT CREDIT GOES TO excelottah6 OWENR OF IZUKU-MD


const {cmd} = require('../lib');

function getRandomStartingLetter() {
  const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const randomIndex = Math.floor(Math.random() * allLetters.length);
  return allLetters[randomIndex];
}

const wcgData = {
  isGameActive: false,
  countdownSeconds: 44,
  players: [],
  currentTurn: null,
  currentCriteria: { startingLetter: getRandomStartingLetter(), minLetters: 3 },
  totalWords: 0,
};

cmd({
  pattern: 'startwcg',
  desc: 'Starts a Word Chain Game.',
  category: 'games',
}, async (Void, citel) => {
  if (wcgData.isGameActive) {
    return citel.reply('A Word Chain Game is already in progress.');
  }

  wcgData.isGameActive = true;
  wcgData.players = [];
  wcgData.currentTurn = null;
  wcgData.totalWords = 0;

  setTimeout(() => {
    wcgData.currentTurn = getRandomPlayer();
    citel.reply(`👾 wcg starts in ${wcgData.countdownSeconds} seconds ⏳\nType *enter* to play 🙋‍♂️🙋‍♀️\n🧩 🗿\n\n👥 ${wcgData.players.length} players joined.`);
    startNextTurn(citel);
  }, wcgData.countdownSeconds * 1000);
});

function getRandomPlayer() {
  const randomIndex = Math.floor(Math.random() * wcgData.players.length);
  return wcgData.players[randomIndex];
}

const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getRandomStartingLetter() {
  const randomIndex = Math.floor(Math.random() * allLetters.length);
  return allLetters[randomIndex];
}

function startNextTurn(citel) {
  wcgData.currentTurn = getRandomPlayer();
  wcgData.currentCriteria = { startingLetter: getRandomStartingLetter(), minLetters: 3 };
  wcgData.totalWords = 0;

  citel.reply(`🌀Turn : ${wcgData.currentTurn}\n⏭Next : @⁨${wcgData.currentTurn}⁩\n🈴Your word must start with *${wcgData.currentCriteria.startingLetter}* and include at least *${wcgData.currentCriteria.minLetters}* letters\n🤾Players remaining : ${wcgData.players.length}/${wcgData.players.length}\n⏳You have *40s* to answer\n📝Total words : ${wcgData.totalWords}`);
}


cmd({
  on: 'text',
  pattern: 'enter',
}, async (Void, citel, text, { from }) => {
  if (!wcgData.isGameActive) {
    return;
  }

  if (wcgData.players.includes(from)) {
    return;
  }

  wcgData.players.push(from);
  citel.reply(`@⁨${from}⁩ Joined 👏`);
});

cmd({
  on: 'text',
  pattern: '',
}, async (Void, citel, text, { from }) => {
  if (!wcgData.isGameActive || from !== wcgData.currentTurn) {
    return;
  }

  const submittedWord = text.trim();

  if (!isValidWord(submittedWord)) {
    return;
  }

  wcgData.totalWords++;
  citel.reply('✅');
  startNextTurn();
});

function isValidWord(word) {
  const { startingLetter, minLetters } = wcgData.currentCriteria;
  return word.startsWith(startingLetter) && word.length >= minLetters;
}
