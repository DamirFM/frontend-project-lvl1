import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const intro = 'Find the greatest common divisor of given numbers.';

const core = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const gcd = (number1, number2) => {
    if (number2 === 0) {
      return number1;
    }
    return gcd(number2, number1 % number2);
  };

  const question = `${num1} ${num2} ?`;
  const correctAnswer = `${gcd(num1, num2)}`;
  return [question, correctAnswer];
};
const gcdGame = () => mainLogic(intro, core);

export default gcdGame;
