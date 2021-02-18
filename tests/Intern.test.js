const { it, expect, test } = require('@jest/globals');
const { describe } = require('yargs');
const Intern = require('../lib/Intern');

test('creates a intern object', () => {
  // Create a new character with a `name`, `strength`, and `hitpoints` values
  // YOUR CODE HERE
  describe("creates an object when new instance of Intern is gen",()=>{
    //   it("should return a type object",()=>{
        const newGuy= new Intern();
        expect(typeof(newGuy)).toBe("object");
    //   }
  });
});

test("can set name variable",()=>{
    describe("can set name via Intern constructor ",()=>{
        //   it("should return a type object",()=>{
            const name ="Sam"
            const newGuy= new Intern(name);
            expect(newGuy.name).toBe("Sam");
        //   }
      });

});

test("can set id variable",()=>{
    describe("can set id via Intern constructor ",()=>{
        //   it("should return a type object",()=>{
            const id ="1234"
            const newGuy= new Intern("Sam",id,"a@a.com");
            expect(newGuy.id).toBe("1234");
        //   }
      });

});

test("can set email variable",()=>{
    describe("can set email via Intern constructor ",()=>{
        //   it("should return a type object",()=>{
            const eamil ="1234"
            const newGuy= new Intern("Sam","id", email);
            expect(newGuy.email).toBe("a@a.com");
        //   }
      });

});

test("can get name variable",()=>{
    describe("can get name via getName function ",()=>{
            const name ="Sam"
            const newGuy= new Intern(name,"1","a@a.com");
            expect(newGuy.getName()).toBe("Sam");
        //   }
      });

});

test("can get Role variable",()=>{
    describe("can get role via getRole function ",()=>{
        const testVal="Intern"
            const newGuy= new Intern("sam","1","a@a.com");
            expect(newGuy.getRole()).toBe(testVal);
        //   }
      });

});

test("can get Role variable",()=>{
    describe("can get Id via getId function ",()=>{
        const testVal="1234"
            const newGuy= new Intern("sam","1","a@a.com");
            expect(newGuy.getId()).toBe(testVal);
      });

});

test("can get Role variable",()=>{
    describe("can get email via getEmail function ",()=>{
        const testVal="sm@gmail.com"
            const newGuy= new Intern("sam","1","a@a.com");
            expect(newGuy.getEmail()).toBe(testVal);
      });

});

test("can get Role variable",()=>{
    describe("can get github via getGitHub function ",()=>{
        const testVal="Oshkosh"
            const newGuy= new Intern("sam","1","a@a.com");
            expect(newGuy.getSchool()).toBe(testVal);
      });

});

test("can set school variable",()=>{
    describe("can set github via Employee constructor ",()=>{
        //   it("should return a type object",()=>{
            const school ="Oshkosh"
            const newGuy= new Intern("Sam","id", "email", school);
            expect(newGuy.school).toBe("Oshkosh");
        //   }
      });

});
// Bonus: write a test that will check if the character is alive or not
