import mainLogic from '../index';
import getRandomNumber from '../getRandomNumber';

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const core = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const logic = () => mainLogic(intro, core);

export default logic;
