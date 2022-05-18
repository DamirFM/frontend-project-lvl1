/* eslint-disable no-sequences */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-loop-func */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';

const roundsCount = 3;
const randomNumber = Math.floor(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

const check = () => {
  const number = randomNumber;
  // const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return correctAnswer;
};

export const logic = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= roundsCount; i += 1) {
    const userAnswer = readlineSync.question(
      `Question: ${randomNumber} ? \n`,

      (userInput) => {
        console.log(`Your answer: ${userInput}`);
      },
    );
    const correctAnswer = check();
    if (userAnswer === correctAnswer) {
      return userAnswer;
    }
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
};
