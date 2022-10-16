const Employee = require("../lib/Employee");

test("Creates employee object", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Creates name object", () => {
  const name = "Joe";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("creates employee ID object", () => {
  const testValue = 100;
  const e = new Employee("Joe", testValue);
  expect(e.id).toBe(testValue);
});

test("Creates email object", () => {
  const testValue = "test@test.com";
  const e = new Employee("Joe", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Gets employee name()", () => {
  const testValue = "Joe";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Gets employee Id()", () => {
  const testValue = 100;
  const e = new Employee("Joe", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Gets employee", () => {
  const testValue = "test@test.com";
  const e = new Employee("Joe", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Joe", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});