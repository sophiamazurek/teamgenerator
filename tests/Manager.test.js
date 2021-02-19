const { it, expect, test } = require('@jest/globals');
const { describe } = require('yargs');
const Manager = require('../lib/Intern');

test('creates a manager object', () => {
  // Create a new character with a `name`, `strength`, and `hitpoints` values
  // YOUR CODE HERE
  describe("creates an object when new instance of manager is gen",()=>{
    //   it("should return a type object",()=>{
        const newGuy= new Manager();
        expect(typeof(newGuy)).toBe("object");
    //   }
  });
});

test("can set name variable",()=>{
    describe("can set name via manager constructor ",()=>{
        //   it("should return a type object",()=>{
            const name ="Sam"
            const newGuy= new Manager(name);
            expect(newGuy.name).toBe("Sam");
        //   }
      });

});

test("can set id variable",()=>{
    describe("can set id via manager constructor ",()=>{
        //   it("should return a type object",()=>{
            const id ="1234"
            const newGuy= new Manager("Sam",id,"a@a.com");
            expect(newGuy.id).toBe("1234");
        //   }
      });

});

test("can set email variable",()=>{
    describe("can set email via Manager constructor ",()=>{
        //   it("should return a type object",()=>{
            const eamil ="1234"
            const newGuy= new Manager("Sam","id", email);
            expect(newGuy.email).toBe("a@a.com");
        //   }
      });

});

test("can get name variable",()=>{
    describe("can get name via getName function ",()=>{
            const name ="Sam"
            const newGuy= new Manager(name,"1","a@a.com");
            expect(newGuy.getName()).toBe("Sam");
        //   }
      });

});

test("can get Role variable",()=>{
    describe("can get role via getRole function ",()=>{
        const testVal="Manager"
            const newGuy= new Manager("sam","1","a@a.com");
            expect(newGuy.getRole()).toBe(testVal);
        //   }
      });

});

test("can get Role variable",()=>{
    describe("can get Id via getId function ",()=>{
        const testVal="1234"
            const newGuy= new Manager("sam","1","a@a.com");
            expect(newGuy.getId()).toBe(testVal);
      });

});

test("can get Role variable",()=>{
    describe("can get email via getEmail function ",()=>{
        const testVal="sm@gmail.com"
            const newGuy= new Manager("sam","1","a@a.com");
            expect(newGuy.getEmail()).toBe(testVal);
      });

});


test("can set officenumber variable",()=>{
    describe("can set office number via Manager constructor ",()=>{
        //   it("should return a type object",()=>{
            const officenum ="123"
            const newGuy= new Manager("Sam","id", "email", officenum);
            expect(newGuy.officenum).toBe(officenum);
        //   }
      });

});
// Bonus: write a test that will check if the character is alive or not
