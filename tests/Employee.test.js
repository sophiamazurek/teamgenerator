const { it, expect, test } = require('@jest/globals');
const { describe } = require('yargs');
const Employee = require('../lib/Employee');

test('creates a employee object', () => {
  // Create a new character with a `name`, `strength`, and `hitpoints` values
  // YOUR CODE HERE
  describe("creates an object when new instance of Employee is gen",()=>{
    //   it("should return a type object",()=>{
        const newGuy= new Employee();
        expect(typeof(newGuy)).toBe("object");
    //   }
  });
});

test("can set name variable",()=>{
    describe("can set name via Employee constructor ",()=>{
        //   it("should return a type object",()=>{
            const name ="Sam"
            const newGuy= new Employee(name);
            expect(newGuy.name).toBe("Sam");
        //   }
      });

});

test("can set id variable",()=>{
    describe("can set id via Employee constructor ",()=>{
        //   it("should return a type object",()=>{
            const id ="1234"
            const newGuy= new Employee("Sam",id,"a@a.com");
            expect(newGuy.id).toBe("1234");
        //   }
      });

});

test("can set email variable",()=>{
    describe("can set email via Employee constructor ",()=>{
        //   it("should return a type object",()=>{
            const eamil ="1234"
            const newGuy= new Employee("Sam","id", email);
            expect(newGuy.email).toBe("a@a.com");
        //   }
      });

});

test("can get name variable",()=>{
    describe("can get name via getName function ",()=>{
            const name ="Sam"
            const newGuy= new Employee(name,"1","a@a.com");
            expect(newGuy.getName()).toBe("Sam");
        //   }
      });

});

test("can get Role variable",()=>{
    describe("can get role via getRole function ",()=>{
        const testVal="Employee"
            const newGuy= new Employee("sam","1","a@a.com");
            expect(newGuy.getRole()).toBe(testVal);
        //   }
      });

});

test("can get Role variable",()=>{
    describe("can get Id via getId function ",()=>{
        const testVal="1234"
            const newGuy= new Employee("sam","1","a@a.com");
            expect(newGuy.getId()).toBe(testVal);
      });

});

test("can get Role variable",()=>{
    describe("can get email via getEmail function ",()=>{
        const testVal="1234"
            const newGuy= new Employee("sam","1","a@a.com");
            expect(newGuy.getEmail()).toBe(testVal);
      });

});

