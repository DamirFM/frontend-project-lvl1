import mainLogic from '../index';
import getRandomNumber from '../getRandomNumber';

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

const logic = () => mainLogic(intro, core);

export default logic;
