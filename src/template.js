//engineerdata (not sure if this should be a class)

const cardArray=[];
function generateMarkdown(results) {
    //manage my array seperate them and so I can individally create the card
    results.filter(employee=>{
        if(employee.getRole()=="Engineer")
         engineerTemplate(employee);

    })

   
}

function engineerTemplate(employee){
    console.log("inside engineer template");
    console.log(employee)
//when I need to write the template having issues returning data to write to output.html
console.log(employee.getName());
console.log( `<div class="managercard card col mr-3 mb-3" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${employee.getName()}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Role: ${employee.getRole()}</h6>
                  <hr>
                  <p class="card-text">ID: id</p><hr>
                  <p class="card-text">Office Number: number</p>
                  <hr>
                  <a href="#" class="card-link">email</a>
                </div>
              </div>`)

}


module.exports = generateMarkdown;