/* eslint-disable consistent-return */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export const logic = () => {
  const roundsCount = 3;
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = (number) => number % 2 === 0;

  const gameCheck = () => {
    const number = Math.floor(Math.random() * 100);
    const question = `${number}`;
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = gameCheck();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
