import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What is the result of the expression?';

const operands = ['+', '-', '*'];

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

const generateRoundData = () => {
  const num1 = getRandomNumber(1, 25);
  const num2 = getRandomNumber(1, 25);
  const randomOperator = operands[getRandomNumber(0, operands.length - 1)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = `${expression(num1, randomOperator, num2)}`;
  return [question, correctAnswer];
};

const calcGame = () => gameEngine(gameRules, generateRoundData);

export default calcGame;
