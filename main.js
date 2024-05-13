#! /usr/bin/env node
console.log("** Welcome to TypeSript Quizz Section.**");
console.log("** Pass these Quiz to accelerate your knowledge.**");
import inquirer from "inquirer";
// Permanent score for all Levels
let score = 0;
//Level wise Questions
const totalQuestion1 = 3;
const totalQuestion2 = 3;
const totalQuestion3 = 3;
const Levels = await inquirer.prompt([{
        name: "level",
        message: "Select levels what you wants..",
        type: "list",
        choices: ["1):Level 1", "2):Level 2", "3):Level 3"]
    }]);
if (Levels.level === "1):Level 1") {
    console.log("Welcome to Level one of typescript quiz..");
    const Subone = await inquirer.prompt([{
            name: "subone",
            message: "What does TypeScript compile to..?",
            type: "list",
            choices: ["a) JavaScript", "b) C#", "c) Python", "d) HTML"]
        }]);
    if (Subone.subone === "a) JavaScript") {
        console.log("Correct Answer..!");
        score++;
    }
    else {
        console.log("Incorrect Answer..! Oops--");
    }
    const Subtwo = await inquirer.prompt([{
            name: "subtwo",
            message: "What does the ('ANY') type signify in TypeScript..?",
            type: "list",
            choices: ["a) It represents any data type", "b) It represents an array", "c) It represents a string", "d) It represents a number"]
        }]);
    if (Subtwo.subtwo === "a) It represents any data type") {
        console.log("Correct Answer..!");
        score++;
    }
    else {
        console.log("Incorrect Answer..! Oops--");
    }
    const Subthree = await inquirer.prompt([{
            name: "subthree",
            type: "list",
            message: "How can you define a tuple type in TypeScript..?",
            choices: ["a) Using the 'TUPLE' keyword", "b) Separating elements by commas", "c) Enclosing elements within square brackets", "d) Using the 'TYPE' keyword"]
        }]);
    if (Subthree.subthree === "c) Enclosing elements within square brackets") {
        console.log("Correct Answer..!");
        score++;
    }
    else {
        console.log("Incorrect Answer..! Oops--");
    }
    console.log(`\nQuiz Completed ! Your score is ${score} out of ${totalQuestion1}`);
    // Check if all answers in Level 1 are correct
    if (score === totalQuestion1) {
        console.log("Congratulations! You passed Level 1 with a perfect score.");
    }
    else {
        console.log("You did not pass Level 1. Try again!");
    }
    // Level two start
    //
}
else if (Levels.level === "2):Level 2") {
    console.log("Welcome to Level two of typescript quiz..");
    const Someone = await inquirer.prompt([{
            name: "someone",
            message: "What is the output of the following TypeScript code..?\nconsole.log(5 + '5');",
            type: "list",
            choices: ["a) 10", "b) 55", "c) 5 + '5'", "d) Error"]
        }]);
    if (Someone.someone === "b) 55") {
        console.log("Correct Answer..!");
        score++;
    }
    else {
        console.log("Incorrect Answer..! Oops--");
    }
    const Sometwo = await inquirer.prompt([{
            name: "sometwo",
            message: "What is the purpose of the 'UNKNOWN' type in TypeScript..?",
            type: "list",
            choices: ["a) It represents a type that is not known at compile time", "b) It represents a type that is known but not disclosed", "c) It represents a type that cannot be assigned to any other type", "d) It represents a type that is not yet implemented"]
        }]);
    if (Sometwo.sometwo === "a) It represents a type that is not known at compile time") {
        console.log("Correct Answer..!");
        score++;
    }
    else {
        console.log("Incorrect Answer..! Oops--");
    }
    const Somethree = await inquirer.prompt([{
            name: "somethree",
            message: "Which operator in TypeScript is used for checking if a property exists in an object..?",
            type: "list",
            choices: ["a) ?", "b) :", "c) !", "d) in"]
        }]);
    if (Somethree.somethree === "a) ?") {
        console.log("Correct Answer..!");
        score++;
    }
    else {
        console.log("Incorrect Answer..! Oops--");
    }
    console.log(`\nQuiz Completed ! Your score is ${score} out of ${totalQuestion2}`);
    // Check if all answers in Level 2 are correct
    if (score === totalQuestion2) {
        console.log("Congratulations! You passed Level 2 with a perfect score.");
    }
    else {
        console.log("You did not pass Level 2. Try again!");
    }
    // Level 3 Start
    //
}
else if (Levels.level === "3):Level 3") {
    console.log("Welcome to Level three of typescript quiz..");
    const Zeroone = await inquirer.prompt([{
            name: "zeroone",
            message: "What is the purpose of the 'AS' keyword in TypeScript..?",
            type: "list",
            choices: ["a) It is used to assign values to variables", "b) It is used for type assertion", "c) It is used to create aliases for types", "d) It is used for conditional expressions"]
        }]);
    if (Zeroone.zeroone === "b) It is used for type assertion") {
        console.log("Correct Answer..!");
        score++;
    }
    else {
        console.log("Incorrect Answer..! Oops--");
    }
    const Zerotwo = await inquirer.prompt([{
            name: "zerotwo",
            message: "What is the purpose of the 'INFER' keyword in TypeScript..?",
            type: "list",
            choices: ["a) It is used for conditional type assignments", "b) It is used for type inference within conditional types", "c) It is used to infer function return types", "d) It is used to infer the types of function parameters"]
        }]);
    if (Zerotwo.zerotwo === "b) It is used for type inference within conditional types") {
        console.log("Correct Answer..!");
        score++;
    }
    else {
        console.log("Incorrect Answer..! Oops--");
    }
    const Zerothree = await inquirer.prompt([{
            name: "zerothree",
            message: "Which TypeScript feature allows you to create a new type based on existing types..?",
            type: "list",
            choices: ["a) Inheritance", "b) Polymorphism", "c) Type Assertion", "d) Type Alias"]
        }]);
    if (Zerothree.zerothree === "d) Type Alias") {
        console.log("Correct Answer..!");
        score++;
    }
    else {
        console.log("Incorrect Answer..! Oops--");
    }
    console.log(`\nQuiz Completed ! Your score is ${score} out of ${totalQuestion3}`);
    // Check if all answers in Level 3 are correct
    if (score === totalQuestion3) {
        console.log("Congratulations! You passed Level 3 with a perfect score.");
    }
    else {
        console.log("You did not pass Level 3. Try again!");
    }
}
