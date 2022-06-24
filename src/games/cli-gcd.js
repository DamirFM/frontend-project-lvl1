import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import gcd from '../gcd.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const generateRoundData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = `${gcd(num1, num2)}`;
  return [question, correctAnswer];
};
const gcdGame = () => gameEngine(gameRules, generateRoundData);

export default gcdGame;
