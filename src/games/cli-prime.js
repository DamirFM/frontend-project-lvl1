import mainLogic from '../index.js';
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

function core() {
  const number = getRandomNumber(1, 100);

  const question = `${number}`;

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
}

const primeGame = () => mainLogic(intro, core);

export default primeGame;
