
var results=[];//hold all the ppl in the array
//fs
//inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
//let generateMarkdown = require('./src/template.js')

//call in template.js
//once app loads

function questions(){
//ask for info via inquirer
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the best email to contact you at?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your work Id?'
    },
    {
        type: 'list',
        message: 'what is role?',
        name: 'What is your role here?',
        choices: ['Engineer', 'Manager', 'Intern']     
     }
]).then(employeedata=>{

    if(employeedata.role== "Engineer"){
        engineer(employeedata)
    }
})
    //name, id, email, role
        //role is engineer
            //ask engineer question call engineer(employeedata) fx
         //role is Intern
            //ask intern question call intern(employeedata) fx
 
}

//ask if there are more ppl
    //if there are more ppl
        //rerun questions
        //and keep on adding til your done

//once all q are done what should we do
    //build out hte template
    //display cards
    //output final results

    function engineer(employeedata){
        console.log("inside engineer fx");
        console.log(employeedata)
        //inquirer
            //github
            //ask if there are more ppl
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your GitHub?'
                },
               
                {
                    type: 'list',
                    message: 'Are there anymore employees?',
                    name: 'isDone',
                    choices: ['Yes', 'No']     
                 }
            ]).then(engineerdata=>{
                console.log(engineerdata)
                //build out an engineer
                let newGuy=new Engineer(employeedata.name,employeedata.id,employeedata.email,engineerdata.github)
                    //throw it into our array(results)    //save the response (first person)
                    results.push(newGuy)
                    console.log(results)
                //if there are more ppl
                if(engineerdata.isDone=="No"){
                    questions();
                    //rerun questions
                    //and keep on adding til your done
                }else{
                //once all q are done what should we do
                //we need to call the templatebuild fx and pass the array (results)
                //build out hte template
                //display cards
                //output final results

                }

             

            })

        

    }

    function intern(employeedata){
        console.log("inside intern fx");
        console.log(employeedata)
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'Where did you got to school?'
                },
                {
                    type: 'list',
                    message: 'Are there anymore employees?',
                    name: 'isDone',
                    choices: ['Yes', 'No']     
                 }
        ]).then(interndata=>{
            console.log(interndata)
            //build out an intern
            let newGuy=new Intern(employeedata.name,employeedata.id,employeedata.email,engineerdata.github)
                //throw it into our array(results)    //save the response (first person)
                results.push(newGuy)
                console.log(results)
            //if there are more ppl
            if(engineerdata.isDone=="No"){
                questions();
                //rerun questions
                //and keep on adding til your done
            }else{
            //once all q are done what should we do
            //we need to call the templatebuild fx and pass the array (results)
            //build out hte template
            //display cards
            //output final results

            }



        //inquirer
            //school
            //ask if there are more ppl

        //build out an intern
        //throw it into our array(results)    //save the response (first person)
    
    //if there are more ppl
        //rerun questions()
        //and keep on adding til your done
    
    //once all q are done what should we do
        //build out hte template
        //display cards
        //output final results   

    }

    questions();