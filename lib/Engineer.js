const Employee = require("./Employee.js")

class Engineer extends Employee{
    constructor(myname, myid, myemail, myGitHub) { 
        super(myname, myid, myemail);
        this.github=myGitHub;

    }
    getGithub(){
        return this.github;

    }

     getRole(){
        return 'Engineer';
     }

  }

  module.exports= Engineer;