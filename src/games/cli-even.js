import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const core = () => {
  const num = getRandomNumber(1, 99);
  const question = `${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const logic = () => mainLogic(intro, core);

export default logic;
