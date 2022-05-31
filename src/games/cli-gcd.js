/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-self-assign */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { mainLogic } from '../index.js';

const intro = 'Find the greatest common divisor of given numbers.';

function core() {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  function fun(num1, num2) {
    num1 > num2 || ([num1, num2] = [num1, num2]);
    const length = num2 / 2; let
      k = 1;
    for (let i = 2; i <= length;) {
      if (!(num2 % i) && !(num1 % i)) {
        num2 /= i;
        num1 /= i;
        k *= i;
      } else i++;
    }

    return k;
  }
  const question = `Question: ${num1} ${num2} ?`;
  const correctAnswer = `${fun(num1, num2)}`;
  return [question, correctAnswer];
}
export const logic = () => mainLogic(intro, core);
