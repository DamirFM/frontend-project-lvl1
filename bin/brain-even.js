#!/usr/bin/env node

// import * as cliEvenJs from '../src/cli-even.js ';
import { userName } from '../src/cli-even.js ';
import { question, even } from '../src/cli-even.js';

console.log(`Hi ${userName}!`);

console.log(`${question}`);

console.log(even());
