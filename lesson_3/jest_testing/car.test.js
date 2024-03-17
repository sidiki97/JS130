const Car = require("./car");

describe("Car Class", () => {
  test("Car has 4 wheels", () => {
    let car = new Car();
    expect(car.wheels).toBe(4);
  });
  test("Car has 3 wheels", () => {
    let car = new Car();
    expect(car.wheels).toBe(3);
  })
})