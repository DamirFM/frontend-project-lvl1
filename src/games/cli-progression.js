import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const intro = 'What number is missing in the progression?';
const mainProgression = (firstItem, step, mainProgressionLength) => {
  const array = [];
  for (let i = 0; i < mainProgressionLength; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
};

function core() {
  const first = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = mainProgression(first, step, length);
  const randIndex = Math.floor(Math.random() * progression.length);

  const correctAnswer = `${progression[randIndex]}`;
  progression[randIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
}

const progressionGame = () => mainLogic(intro, core);

export default progressionGame;
