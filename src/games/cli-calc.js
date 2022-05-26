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

function core() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const randomOperator = Math.floor(Math.random() * arithmetic.length);
  const rValue = arithmetic[randomOperator];
  const question = `${num1} ${rValue} ${num2} ?`;
  const correctAnswer = `${expression(num1, rValue, num2)}`;
  return [question, correctAnswer];
}

export const logic = () => mainLogic(intro, core);
