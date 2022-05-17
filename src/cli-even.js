/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');

export const randomNumber = Math.floor(Math.random() * 100);

export const answer = readlineSync.question(`'Hi ${userName}!' 
Answer "yes" if the number is even, otherwise answer "no".`);

export const question = readlineSync.question(
  `Question: ${randomNumber} ? \n`,

  (userInput) => {
    console.log(userInput);
  },
);

export const even = () => {
  if (randomNumber % 2 === 0 && question === 'yes' && question !== 'no') {
    return 'Correct!';
  }
  if (randomNumber % 2 === 0 && question === 'no' && question !== 'yes') {
    return ` "no" is wrong answer ;(. Correct answer was "yes".
    Let's try again, ${userName}!
      `;
  }
  if (randomNumber % 2 !== 0 && question === 'no' && question !== 'yes') {
    return 'Correct!';
  }
  if (randomNumber % 2 !== 0 && question === 'yes' && question !== 'no') {
    return ` "yes" is wrong answer ;(. Correct answer was "no".
      Let's try again, ${userName}!
        `;
  }
  if (question !== 'yes' && 'no') {
    return 'ERROR';
  }
  for (let i = 0; i < 4; i += 1) {
    if (even === 'Correct!') {
      return even();
    }
  }
};
