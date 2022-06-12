import readlineSync from 'readline-sync';

export const mainLogic = (intro, core) => {
  const roundsCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(intro);

  for (let i = 0; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = core();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
