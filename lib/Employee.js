class Employee {
    constructor(myname, myid, myemail) { 
        this.name =myname;
        this.id=myid;
        this.email=myemail;

    }

     getName(){
         return this.name;

     }

     getId(){
         return this.id;

     }
     getEmail(){
        return this.email;
     }
     getRole(){
        return 'Employee';
     }

  }
  
module.exports= Employee;
