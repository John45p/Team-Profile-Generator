
const Manager = require('../lib/Manager')
describe("Manager", ()=> {
    test("For correct name", () => {
        const manager1 = new Manager("Alex", 12, "john@yahoo.com", 122);
        expect(manager1.getName()).toBe("Alex");
      });

      test("For role change to be Manager", () => {
        const managerChange = new Manager("Alex", 12, "john@yahoo.com", 122);
        expect(managerChange.getRole()).toBe("Manager");
      });

      test("For correct office number", () => {
        const officeNumber1 = new Manager("Alex", 12, "john@yahoo.com", 122);
        expect(officeNumber1.getOfficeNumber()).toBe(122);
      });
})
