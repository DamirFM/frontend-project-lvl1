#!/usr/bin/env node

import { mainLogic } from '../index.js';

const intro = 'What is the result of the expression?';

export const logic = () => mainLogic(intro, gameCheck);
