#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const inquirer = require('inquirer');
const clear = require('clear');
const open = require('open');

clear();

const actions = {
    email: {
        name: `Send me an ${chalk.green.bold('email')}`,
        handler: () => {
            open('mailto:metrisiddaram@gmail.com');
            console.log('\nEmail client opened.\n');
        }
    },
    whatsapp: {
        name: `Send me a ${chalk.green.bold('whatsApp')}`,
        handler: () => {
            open('https://wa.me/918792422820');
            console.log('\nWhatsApp opened on your default browser.\n');
        }
    },
    resume: {
        name: `Download my ${chalk.green.bold('resume')}`,
        handler: () => {
            open('https://drive.google.com/file/d/1yWHDZN1CNC-xSd1GPknMFZD_sZxt39NH/view?usp=sharing');
            console.log('\nResume download started.\n');
        }
    },
    quit: {
        name: 'Quit',
        handler: () => {
            console.log(chalk.green.bold('\nThank you for visiting my profile!\n'));
            process.exit();
        }
    }
};

const questions = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: Object.values(actions).map(action => ({
            name: action.name,
            value: action.handler
        }))
    }
];

const data = {
    name: chalk.bold.green('                 Siddaram Metri'),
    work: `${chalk.white('Full Stack Developer at')} ${chalk.hex('#2b82b2').bold('Incusehr')}`,
    twitter: `${chalk.gray('https://twitter.com/')}${chalk.cyan('siddarammetri')}`,
    github: `${chalk.gray('https://github.com/')}${chalk.green('siddarammetri')}`,
    linkedin: `${chalk.gray('https://linkedin.com/in/')}${chalk.blue('siddaram-metri')}`,
    npx: `${chalk.red('npx')} ${chalk.white('siddarammetri')}`
};

const infoBox = boxen(
    [
        `${data.name}`,
        `\n${chalk.white.bold('Work:')} ${data.work}\n`,
        `${chalk.white.bold('Twitter:')} ${data.twitter}`,
        `${chalk.white.bold('GitHub:')} ${data.github}`,
        `${chalk.white.bold('LinkedIn:')} ${data.linkedin}`,
        `\n${chalk.white.bold('Card:')} ${data.npx}`,
        `\n${chalk.italic('Feel free to reach out to me!')}`
    ].join('\n'),
    {
        float: 'center',
        borderStyle: 'double',
        padding: 1,
        borderColor: 'red',
    }
);

console.log(infoBox);
console.log(chalk.cyanBright('Use arrow keys to navigate and press Enter to select an option.\n'));

inquirer.prompt(questions).then(answer => answer.action());
