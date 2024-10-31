## Table of contents

## Overview

### The challenge

### Links

### Built with

## My process

### What I learned

#### 2024.10.31

-   Initial problem was that the first iteration of `getHumanSelection` and `getComputerChoice` would have its values constant and repeat across all 5 rounds of the loop.
-   The variables `humanSelection` storing the `gethumanchoice()` and `getComputerChoice` values needed to be put inside the `for loop` so that each iteration would acquire a new value.
-   The human selection needs to come first or else can cheat by seeing computer selection in the console.

### Updates

-   At first I wondered if you could use a `switch` statement for the rock vs paper vs scissors conditions, but I thought switch statements do not support multiple parameters `humanChoice` and `getComputerChoice`
-   However, you can assign an outcome in the form of a string, and if the `case` matches that string, you can select a winner accordingly.
-   Less repetitive so you can group the draw options together.
-   Can use `+=` operator in `humanScore += 1` to rplace of `humanScore = humanScore + 1`

### Useful resources

-   ChatGPT for the `switch` statement.
