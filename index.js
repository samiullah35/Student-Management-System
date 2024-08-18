import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Choose your courses",
        choices: ["Ms.Office", "HTML", "Javascript", "TypeScript", "Python",]
    }
]);
const tutionFee = {
    "Ms.Office": 5000,
    "HTML": 6000,
    "Javascript": 7000,
    "TypeScript": 8000,
    "Python": 9000
};
console.log(`\nTutionFees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let pymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Enter your payment amount:",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcas"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer amount",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou Select payment amount ${pymentType.payment}`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(pymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulation, you have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log(chalk.green.bold(`"\n**************status**************"`));
        console.log(chalk.red(`Student Name: ${answer.students}`));
        console.log(`Student ID: ${randomNumber}`);
        console.log(chalk.yellow(`Course: ${answer.courses}`));
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System");
    }
}
else {
    console.log("Invalid payment amount\n");
}
