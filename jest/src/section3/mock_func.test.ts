it("fist try mock", () => {
  // jest.fn()
  const mockFunc = jest.fn(() => {
    return "hello";
  });
  expect(mockFunc()).toBe("hello");
});

it("mockImplementation", () => {
  const mockFunc = jest.fn().mockImplementation(() => {
    return "hello";
  });
  expect(mockFunc()).toBe("hello");
});
