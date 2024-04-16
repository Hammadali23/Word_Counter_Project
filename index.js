#! /usr/bin/env node
//import the 'inquirer' module, which  is a commoand line interface for node.js
import inquirer from "inquirer";
// Declare a constant 'answers'and assign it to the result of inquirer.prompt funaction 
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence to count the word: "
    }
]);
const words = answers.sentence.trim().split(" ");
// print  the array of word  to the console 
console.log(words);
// print the word of the sentence  to the console 
console.log(`Your sentence  word count is ${words.length}`);
