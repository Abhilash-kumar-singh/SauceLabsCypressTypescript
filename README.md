
# Saucelabs 

Saucelabs ecom web automation using cypress, typescript. It has mochaawesome reporter configured in it. Page Object Model design pattern is used. Github actions is used for CI.


## Pre-requisite
### Node

Install and setup Node from [Node](https://nodejs.org/en).


## Install dependencies

Open terminal and change directory in which repository is cloned. Execute following command to install dependencies.

```bash
  npm install
```
or 
```bash
  npm i
```
## About 
This project is created for demo and practice purpose, where few scenarios related to SauceLabs ecom website is automated. Along with that, few scenarios related to how to handle multiple windows and how to handle table is created. This is not final version, rather it is exploratory in nature. Soon I will optimise it to be better,cleaner and DRY

## Open cypress dashboard

To open cypress dashboard

```bash
  npx cypress open
```

## Run App
Open a new terminal and go to directory in which repository is cloned. Type the following in your command prompt to run your test

```bash
  npx cypress run --headed --browser chrome
```
for headed run in chrome browser
or 
```bash
  npx cypress run 
```
for unheaded run in electron
There can be many possible ways to run test. Please refer official documentation
## Features

- Login page 
- Inventory page
- Exploratory- How to handle multiple windows
- Exploratory- How to handle table in cypress


