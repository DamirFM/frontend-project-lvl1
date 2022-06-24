import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const intro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function generateRoundData() {
  const number = getRandomNumber(1, 100);

  const question = `${number}`;

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
}

const primeGame = () => gameEngine(intro, generateRoundData);

export default primeGame;
