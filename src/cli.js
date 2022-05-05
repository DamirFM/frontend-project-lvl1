import readlineSync from 'readline-sync';
// Wait for user's response.
// eslint-disable-next-line import/prefer-default-export
export const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName}!`);
