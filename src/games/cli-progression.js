import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What number is missing in the progression?';
const generateProgression = (firstItem, step, Length) => {
  const array = [];
  for (let i = 0; i < Length; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
};

function generateRoundData() {
  const first = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = generateProgression(first, step, length);
  const randIndex = Math.floor(Math.random() * progression.length);

  const correctAnswer = `${progression[randIndex]}`;
  progression[randIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
}

const progressionGame = () => gameEngine(gameRules, generateRoundData);

export default progressionGame;
