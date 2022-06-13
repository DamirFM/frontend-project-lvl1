import mainLogic from '../index';
import getRandomNumber from '../getRandomNumber';

const intro = 'What is the result of the expression?';

const arithmetic = ['+', '-', '*'];

const expression = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const core = () => {
  const num1 = getRandomNumber(1, 25);
  const num2 = getRandomNumber(1, 25);
  const randomOperator = arithmetic[getRandomNumber(0, arithmetic.length - 1)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = `${expression(num1, randomOperator, num2)}`;
  return [question, correctAnswer];
};

const logic = () => mainLogic(intro, core);

export default logic;
