/* eslint-disable prefer-rest-params */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
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

const expression = (num1, arithmetic, num2) => {
  switch (arithmetic) {
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
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const core = () => {
  const num1 = Math.floor(1, Math.random() * 25);
  const num2 = Math.floor(1, Math.random() * 25);
  const randomOperator = arithmetic[getRandomNumber(0, arithmetic.length - 1)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = `${expression(num1, randomOperator, num2)}`;
  return [question, correctAnswer];
};

export const logic = () => mainLogic(intro, core);
