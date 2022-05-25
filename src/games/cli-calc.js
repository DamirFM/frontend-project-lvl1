/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */
import { mainLogic } from '../index.js';

const intro = 'What is the result of the expression?';

const arithmetic = ['+', '-', '*'];

const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);

const expression = (num1, arithmetic, num2) => {
  switch (arithmetic) {
    case '+':
      (num1) + (num2);
      break;
    case '-':
      (num1) - (num2);
      break;
    case '*':
      (num1) * (num2);
      break;
    default:
      return null;
  }
};

const core = () => {
  const someArithmetic = arithmetic[Math.floor(Math.random(0, arithmetic.length - 1))];
  const question = `${num1} ${someArithmetic} ${num2} ?`;
  const correctAnswer = `${expression(num1, someArithmetic, num2)}`;
  return [question, correctAnswer];
};

export const logic = () => mainLogic(intro, core);
