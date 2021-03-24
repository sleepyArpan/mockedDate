#!/usr/bin/env node
import inquirer from 'inquirer';

(async () => {
  try {
    const { time } = await inquirer.prompt([
      {
        type: 'list',
        message:
          'Pick whether you want a mocked Date.now() string from the past or the future',
        name: 'time',
        choices: ['Past', 'Future'],
      },
    ]);
    let dateToBeShown = '';
    switch (time) {
      case 'Past':
        dateToBeShown = Date.now() - 5 * 365 * 24 * 60 * 60 * 1000;
        break;
      case 'Future':
        dateToBeShown = Date.now() + 5 * 365 * 24 * 60 * 60 * 1000;
        break;
      default:
        throw new Error('Unreachable code, only select Past or Future');
    }
    console.log(
      'The mocked value of Date.now() according to your choice is',
      dateToBeShown
    );
  } catch (e) {
    throw new Error(e);
  }
})();
