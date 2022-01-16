
const Engineer = require('../lib/Engineer')
describe("Engineer", ()=> {
    test("For correct github", () => {
        const Eng1 = new Engineer("Alex", 12, "john@yahoo.com", "lolol");
        expect(Eng1.getGithub()).toBe("lolol");
      });
      test("For correct role change", () => {
        const engRole = new Engineer("Alex", 12, "john@yahoo.com", "lolol");
        expect(engRole.getRole()).toBe("Engineer");
      });
})
