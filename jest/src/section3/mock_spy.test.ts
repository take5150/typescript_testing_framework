import { Calculator } from "./mock_spy";

it("sum func is called", () => {
  const calc = new Calculator();
  const sumSpy = jest.spyOn(calc, "sum");
  const result = calc.sum(1, 2);
  expect(result).toBe(3);

  expect(sumSpy).toHaveBeenCalledTimes(1);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);

  sumSpy.mockRestore();
});
