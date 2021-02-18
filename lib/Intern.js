const Employee = require("./Employee.js")

class Intern extends Employee{
    constructor(myname, myid, myemail, mySchool) { 
        super(myname, myid, myemail);
        this.school=mySchool;

    }
    getSchool(){
        return this.school;

    }

     getRole(){
        return 'Intern';
     }

  }

  module.exports= Intern;