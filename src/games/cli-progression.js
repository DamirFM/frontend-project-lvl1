/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-unreachable-loop */

import { mainLogic } from '../index.js';

const intro = 'What number is missing in the progression?';

const progression = (firstItem, step, length) => {
  const arr = [];
  arr[0] = firstItem;
  for (let i = 0; i < length; i += 1) {
    const result = arr[i - 1] + step;
    arr.push(result);
    console.log(arr);
  }
  return arr;
};

function core() {
  const ranFirst = Math.floor(Math.random() * 100);
  const ranStep = Math.floor(Math.random() * 10);
  const ranLenght = Math.floor(Math.random() * 10);
  const ranProgression = progression(ranFirst, ranStep, ranLenght);
  const ranIndex = Math.floor(Math.random() * ranProgression.length);
  const question = ranProgression.join(' ');
  const correctAnswer = `${ranProgression[ranIndex]}`;
  ranProgression[ranIndex] = '..';
  return [question, correctAnswer];
}
export const logic = () => mainLogic(intro, core);
