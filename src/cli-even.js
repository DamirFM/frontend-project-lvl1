/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');

export const randomNumber = Math.floor(Math.random() * 100);

export const answer = readlineSync.question('Your answer: ');

export const even = () => {
  if (randomNumber % 2 === 0 && answer === 'yes' && answer !== 'no') {
    return 'Correct!';
  }
  if (randomNumber % 2 === 0 && answer === 'no' && answer !== 'yes') {
    return ` "yes" is wrong answer ;(. Correct answer was "no".
    Let's try again, ${userName}!
      `;
  }
  if (randomNumber % 2 !== 0 && answer === 'no' && answer !== 'yes') {
    return 'Correct!';
  }
  if (randomNumber % 2 !== 0 && answer === 'yes' && answer !== 'no') {
    return ` "yes" is wrong answer ;(. Correct answer was "no".
      Let's try again, ${userName}!
        `;
  }
  if (answer !== 'yes' && 'no') {
    return 'ERROR';
  }
  for (let i = 0; i < 4; i += 1) {
    if (even === 'Correct!') {
      return even();
    }
  }
};
