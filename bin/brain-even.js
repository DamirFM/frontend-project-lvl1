#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */

import * as cliEvenJs from '../src/cli-even.js ';
import { even } from '../src/cli-even.js';

console.log(`Hi ${cliEvenJs.userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(`Question: ${cliEvenJs.randomNumber}`);
console.log(even());
