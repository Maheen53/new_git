import inquirer from "inquirer"

let todos = [];

let conditition = "true"


while (conditition){}
       let addTask = await  inquirer.prompt(
    [
        {
            name:`todos` ,
            type:`input`,
            message:`what you  want to add in your todos?`

        
        },

        {
            name:`add morwe`,
            type:`confirm`,
            message:`do you want to add more?`,
            default:"false"
        }
    ]
);
todos.push(addTask.todos);
conditition = addTask.addMore
console.log(todos)