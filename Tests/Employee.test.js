const Employee = require("../lib/Employee");

describe("Employee", () => {
  test("For correct name", () => {
    const employee1 = new Employee("Alex", 12, "john@yahoo.com");
    expect(employee1.getName()).toBe("Alex");
  });
  test("testing for id", () => {
    const employee1 = new Employee("John", 14, "alex@gmail.com");
    expect(employee1.getId()).toBe(14);
  });
  test("for correct email", () => {
    const employee1 = new Employee("Jesse", 15, "jesse@yahoo.com");
    expect(employee1.getEmail()).toBe("jesse@yahoo.com");

  })
  test("for correct role", () => {
    const employee1 = new Employee("Jesse", 15, "jesse@yahoo.com");
    expect(employee1.getRole()).toBe("Employee");
  })
});
