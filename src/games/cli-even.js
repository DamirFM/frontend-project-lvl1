import gameEngine from '../index';
import getRandomNumber from '../getRandomNumber';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRoundData = () => {
  const num = getRandomNumber(1, 99);
  const question = `${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => gameEngine(gameRules, generateRoundData);

export default evenGame;
