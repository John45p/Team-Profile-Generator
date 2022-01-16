const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const render = require("./lib/generateHtml"); 
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "./team.html");
var employees = [];

createManager = () => {
    console.log("Please enter the team manager's information")
return inquirer.prompt([
    {
        type: "input",
        message: "Who is the team's Manager?",
        name: "name"
    },
    {
        type: "input",
        message: "Manager's employee ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Manager's email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Manager's office number:",
        name: "number"
    }
         
]).then((managerResults) => {
    managerResults.role = "Manager";
    const { name, id, email, officeNumber, role } = managerResults;
    const newManager = new Manager(name, id, email, officeNumber, role);
    employees.push(newManager);
addEmployee();
})
     

};
 
addEmployee = () => {
    console.log("What type of employee would you like to add?");
    return inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "what type of employee would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add another employee."]
        }

    ]).then(function(response){
    console.log(response);
        if (response.employeeType == "Engineer"){
            addEngineer()
        } else if (response.employeeType == "Intern"){
            addIntern();
        } else {
            console.log("Team Generated!");
            //generate team 
            render(employees);
        }

    })

}

addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Intern's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Intern's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Intern's school:",
            name: "school"
        }
    ]).then((internResults) => {
        internResults.role = "Intern";
        const { name, id, email, school, role } = internResults;
        const newIntern = new Intern(name, id, email, school, role);
        employees.push(newIntern);
        addEmployee();
    })
};

addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Engineer's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Engineer's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Engineer's github user name:",
            name: "github"
        }
    ]).then((engineerResults) => {
        engineerResults.role = "Engineer";
        const { name, id, email, github, role } = engineerResults;
        const newEngineer = new Engineer(name, id, email, github, role);
        employees.push(newEngineer);
        addEmployee();
    })
    }

    renderHtml = () => {
        const buildHTML = render(employees);
        fs.writeFile(outputPath, buildHTML, (err) => {
            if (err) {
                return console.log(err);
            } else {
                return console.log("Html file has been generated!")
            };
        })
    };

createManager()