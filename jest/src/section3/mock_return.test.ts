it("mock setting return something", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
});

it("mock setting once return something", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe(undefined);
});

it("mock setting async func return something", async () => {
  const mockFunc = jest.fn();
  mockFunc.mockResolvedValue("Resolved value");
  const result = await mockFunc();
  expect(result).toBe("Resolved value");
});
