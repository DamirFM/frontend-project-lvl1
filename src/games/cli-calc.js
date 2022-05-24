/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */
import { mainLogic } from '../index.js';

const intro = 'What is the result of the expression?';

const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);

const expression = (num1, num2) => [(num1) + (num2), (num1) - (num2), (num1) * (num2)];
const core = () => {
  const question = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const correctAnswer = expression(num1, num2) ? 'yes' : 'no';
  return (question, correctAnswer);
};
export const logic = () => mainLogic(intro, core);
