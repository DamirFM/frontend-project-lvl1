/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-unreachable-loop */

import { mainLogic } from '../index.js';

const intro = 'What number is missing in the progression?';
const mainProgression = (firstItem, step, mainProgressionLength) => {
  const array = [];
  for (let i = 0; i < mainProgressionLength; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
};

function core() {
  const first = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10);
  const length = Math.floor(5, Math.random() * 10);
  const progression = mainProgression(first, step, length);
  const randIndex = Math.floor(Math.random() * progression.length);

  const correctAnswer = `${progression[randIndex]}`;
  progression[randIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
}

export const logic = () => mainLogic(intro, core);
