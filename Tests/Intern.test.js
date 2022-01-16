
const Intern = require('../lib/Intern')
describe("Intern", ()=> {
    test("For correct school", () => {
        const Intern1 = new Intern("Alex", 12, "john@yahoo.com", "UGA");
        expect(Intern1.getSchool()).toBe("UGA");
      });
      test("get role should be changed intern", () => {
        const testRole = new Intern("John", 12, "john@yahoo.com", "UGA");
        expect(testRole.getRole()).toBe("Intern");
      });


})
