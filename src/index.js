/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import readlineSync from 'readline-sync';

export const mainLogic = (intro, core) => {
  const roundsCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(intro);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = core();
    console.log(` ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`Question:'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
