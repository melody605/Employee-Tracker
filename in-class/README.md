City government content management systems as a command-line application and database written using TypeScript, Node.js, Inquirer, and PostgreSQL.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

1. Install PostgreSQL
2. Install node.js
3. Open the command-line interface
4. Clone the repository, and cd to the db/ folder
4. In postgres, run \i on both .sql files to create and seed the database
5. Run npm install
6. Run npm start

## Usage


### Usage Information
- On application start, the user is presented with the following options:
    - 'View total utilized labor budget by department'
    - 'View all departments'
    - 'View all roles'
    - 'View all employees'
    - 'Add a department'
    - 'Add a role'
    - 'Add an employee'
    - 'Update an employee role'
    - 'Exit'
        - Use the arrow keys to navigate through the prompts.
        - Press the enter key to select an option.
- Each option allows you to perform Create, Read, Update, or Delete (CRUD) operations on the database.

## How to Contribute
Contribute freely! Please create an associated ticket in the github project management tool to track your change.

## Tests
This application is functionally tested.
