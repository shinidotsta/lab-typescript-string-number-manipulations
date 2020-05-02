![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | Typescript - Strings and Numbers

## Introduction
In this lab, we are going to work with strings and numbers in TypeScript. We are going to create different lists following different strategies using TypeScript. In the process, we will cover several important basic topics such as variable types, functions, classes, and interfaces.

Project Structure
The project structure will be as follows:
```
starter-code/
├── progression-1
    ├── index.html
    ├── main.js
    └── main.ts

```
You are going to work on the *.ts files.

Note: Remember that the *.js files are generated every time we save the TypeScript files.

## Learning Goals

After this lab, you will be able to:

- Quickly develop basic TypeScript functions.
- Create a TypeScript interface, and use it from a class.
- Implement two different interfaces and use them from classes.

## Requirements

- Fork this repo.
- Clone this repo.
- Install TypeScript on your computer using the below command.

```$ npm install -g typescript```

## Submission
Upon completion, run the following commands:
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a pull request from your master branch to the original repository master branch.In the pull request name, add your ProGrad Id and last names separated by a dash "-"

## How to run the project
To compile the project
- Open the terminal inside VScode editor and execute the following command.
    - ``` tsc main.ts ```
- Once you complie your typescript code, main.js file gets generated automatically.
- Now run the main.js file to see the output. To run the file, use the command given below
    - ``` node main.js ```
- You can see the output in the terminal.
- Also open the index.html and see the output in the browser console.

![Complile&Run](https://i1.faceprep.in/ProGrad/typescrip-lab1.png)


## Progression #1: 
- Go to main-service.ts.
- Create an interface called StringManipulationService and don't forget to export it.
- Define the following methods inside the StringManipulationService,
    - print(word:string): void;
    - printWithSpace(sentence:string) : void;
    - findVowel(str: string) : void;

## Progression #2: 
- Go to main.ts.
- Create a class called as StringManipulations which should implement the StringManipulationService.
- Your class should implement all the three methods.
- print(word:string): void method should take string as input and it should perform the following operations
    - Display the given string without any modifications (use console.log to print)
    - Display the given string in uppercase.
    - Display the given string in lowercase.
    - Display the character at a particular position in a given string.
    - Concatenate the given string with another string.
    - Slice the given string and display.
    - Find the length of the given string.
    - printWithSpace(sentence:string) : void method should take string as input and display the given string by adding space between every character.
    - findVowel(str: string) : void should take string as input and display the number of vowels in a given string.
    
## Progression #3: 
- Go to main-service.ts.
- Create an interface called NumberManipulationService and don't forget to export it.
- Define the following methods inside the StringManipulationService,
    - findPrime(num: number) : void;
    - findMagic(num: number) : void;
    
## Progression #4:
- Go to main.ts.
- Create a class called as NumbersManipulations which should implement the NumberManipulationService.
- Your class should implement all the two methods.
    - findPrime(num: number) : void method should check whether the given number is a prime number or not.
    - findMagic(num: number) : void method to check whether the given number is a magic number. What's a magic number? Firstly add all the digits of the given number continuously until the sum becomes a single digit number. If the number obtained is equivalent to 1, then the given number is a magic number, else display that it is not a magic number.
For example, consider a number 199 -> 1 + 9 + 9 = 19 -> 1 + 9 = 10 -> 1 + 0 = 1. So 199 is a magic number.
    

Happy Coding ProGrad ❤️
