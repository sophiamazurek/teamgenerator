const Employee = require("./Employee.js")

class Manager extends Employee{
    constructor(myname, myid, myemail, myOffice) { 
        super(myname, myid, myemail);
        this.officenum=myOffice;

    }
  
     getRole(){
        return 'Manager';
     }

  }

  module.exports= Manager;