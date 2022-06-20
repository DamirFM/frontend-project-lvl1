import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const core = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const logic = () => mainLogic(intro, core);

export default logic;
