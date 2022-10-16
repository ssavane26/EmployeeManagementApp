const Intern = require("../lib/Intern");

test("Creates intern object", () => {
  const testValue = "Rutgers";
  const e = new Intern("Joe", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Joe", 1, "test@test.com", "Rutgers");
  expect(e.getRole()).toBe(testValue);
});

test("Get interns school()", () => {
  const testValue = "Rutgers";
  const e = new Intern("Joe", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});