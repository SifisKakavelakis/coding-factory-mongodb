const mathOperations = require('../index');

describe('Calculator Tests', () => {
  test("Addition of 2 numbers", () => {
    let result = mathOperations.sum(1,2);

    expect(result).toBe(3);
  })  

  test("Subtraction of two numbers", () => {
    let result = mathOperations.diff(10,2)

    expect(result).toBe(21)
  })
})