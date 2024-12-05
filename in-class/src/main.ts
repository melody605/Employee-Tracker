import inquirer from "inquirer";
// import departmentService from './service/departmentService.js';
// import roleService from './service/roleService.js';
// import employeeService from './service/employeeService.js';
import { pool, connectToDb } from "./connection.js";

await connectToDb();

const mainMenu = async () => {
  try {
    const { action } = await inquirer.prompt({
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        "Exit",
      ],
    });
    if (action == "Exit") {
      process.exit(1)
    }


    // WHEN THEY SELECT VIEW DEPARTMENTS
    if (action == "View All Departments") {
      // Send a query to the db
      // Query: "SELECT * FROM department";
      pool.query("SELECT * FROM department", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.table(data.rows);
          mainMenu()
        }
      });
      // after receiving the results, show results in table form
    }


    // WHEN THEY SELECT ADD DEPRATMENT
    if (action == "Add Department") {
      const { dept_name } = await inquirer.prompt([
        {
          type: "input",
          name: "dept_name",
          message: "What is the name of the new department?"
        },
        // more questions if needed
      ])

      pool.query(
        "INSERT INTO department(name) VALUES ($1);",
        [dept_name],
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Department has been created!");
            mainMenu()
          }
        }
      );

    }
    if (action == "Add Role") {
      const { role_name } = await inquirer.prompt([
        {
          type: "input",
          name: "role_name",
          message: "What is the name of the new role?"
        },
       
      ])

      pool.query(
        "INSERT INTO role(name) VALUES ($1);",
        [role_name],
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Role has been created!");
            mainMenu()
          }
        }
      );
      if (action == "Add Employee") {
        const { employee_name } = await inquirer.prompt([
          {
            type: "input",
            name: "employee_name",
            message: "What is the name of the new role?"
          },
          
        ])

        pool.query(
          "INSERT INTO employee(name) VALUES ($1);",
          [employee_name],
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Employee has been created!");
              mainMenu()
            }
          }
        );

  }  process.exit(0);
};
} catch (error) {
console.error('Error calling Cli methods:', error);
}
}

};

export default new Cli;