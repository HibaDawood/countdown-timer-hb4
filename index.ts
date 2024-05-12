#! /usr/bin/env node

import { differenceInSeconds } from "date-fns";
differenceInSeconds;
import inquirer from "inquirer";
import chalk from "chalk";

async function startTimer() {
  const res = await inquirer.prompt({
    type: "input",
    name: "userInput",
    message: chalk.bold.yellowBright(
      "Please enter the amount of seconds ⏲️  : "
    ),
    validate: (input) => {
      if (isNaN(input)) {
        return chalk.bold.italic.redBright("Please enter a valid number");
      } else if (input > 60) {
        return chalk.bold.italic.redBright("Seconds must be in 60");
      } else {
        return true;
      }
    },
  });

  const input = parseInt(res.userInput);

  let remainingSeconds = input;

  const interval = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(interval);
      console.log(chalk.bold.magentaBright("Timer has expired ⌛"));
      process.exit();
    }

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    console.log(
      `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`
    );
    remainingSeconds--;
  }, 1000);
}

startTimer();
