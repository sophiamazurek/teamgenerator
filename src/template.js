//engineerdata (not sure if this should be a class)
const fs =require("fs");
const path = require("path");

const cardArray=[];
function generateMarkdown(results) {
    //manage my array seperate them and so I can individally create the card
   results.filter(employee=>{
        if(employee.getRole()=="Engineer")
         {cardArray.push(engineerTemplate(employee));}
         if(employee.getRole()=="Intern")
         {cardArray.push(internTemplate(employee));}
        
    })
    return makeTemplate(cardArray.join(""));

   
}

function engineerTemplate(employee){
    console.log("inside engineer template");
    console.log(employee)
//when I need to write the template having issues returning data to write to output.html
console.log(employee.getName());
return `<div class="engineercard card col mr-3 mb-3" style="width: 18rem;">
                     <div class="card-body">
                        <h5 class="card-title">${employee.getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Role: ${employee.getRole()}</h6>
                        <hr>
                        <p class="card-text">ID: ${employee.getId()}</p><hr>
                        <a href="#" class="card-link">${employee.getGithub()}</a>
                        <a href="#" class="card-link">${employee.getEmail()}</a>
                        <hr>
                    </div>
                </div>`;

}

function makeTemplate(cardArray){
    //read htmltemplate page
    const template = fs.readFileSync(path.resolve("./src/htmltemplate.html"), "utf8");
    //replace the card array into the finalOutput
    return replaceHolders(template, "finalOuput", cardArray);


    //finalOuput

}

function replaceHolders(template, placeholder, val){
    const  temp= new RegExp("{{"+placeholder+"}}", "gm");
    return template.replace(temp, val)
}

function managerTemplate(employee){
    console.log("inside manager template");
    console.log(employee)
    //still having the same issue returning data. 
    console.log(employee.getName());
    console.log(`<div class="managercard card col mr-3 mb-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${employee.getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Role: ${employee.getRole()}</h6>
                        <hr>
                        <p class="card-text">ID: ${employee.getId()}</p><hr>
                        <p class="card-text">Office Number: ${employee.getOfficeNum()}</p>
                        <hr>
                        <a href="#" class="card-link">${employee.getEmail()}</a>
                    </div>
                </div>`)
}

function internTemplate(employee){
    console.log("inside intern template");
    console.log(employee)
    //same issue as above, will be fixing tomorrow with tutor
    console.log(employee.getName());
    return `<div class="interncard card col mr-3 mb-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${employee.getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Role: ${employee.getRole()}</h6>
                        <hr>
                        <p class="card-text">ID: ${employee.getId()}</p><hr>
                        <p class="card-text">School: ${employee.getSchool()} </p><hr>
                        <hr>
                        <a href="#" class="card-link">${employee.getEmail()}</a>
                    </div>
                </div>`;
}

module.exports = generateMarkdown;