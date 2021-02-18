const { it, expect, test } = require('@jest/globals');
const { describe } = require('yargs');
const Engineer = require('../lib/Engineer');

test('creates a employee object', () => {
  // Create a new character with a `name`, `strength`, and `hitpoints` values
  // YOUR CODE HERE
  describe("creates an object when new instance of Employee is gen",()=>{
    //   it("should return a type object",()=>{
        const newGuy= new Engineer();
        expect(typeof(newGuy)).toBe("object");
    //   }
  });
});




// Bonus: write a test that will check if the character is alive or not
