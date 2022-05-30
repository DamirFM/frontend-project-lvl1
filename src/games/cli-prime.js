/* eslint-disable consistent-return */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unreachable */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { mainLogic } from '../index.js';

const intro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function core() {
  const num = Math.floor(Math.random() * 100);
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  const question = `${num}`;

  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [question, correctAnswer];
}
export const logic = () => mainLogic(intro, core);
