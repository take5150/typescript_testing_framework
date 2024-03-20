it("check mock is called", () => {
  const mockFunc = jest.fn();
  mockFunc();
  expect(mockFunc).toHaveBeenCalled();
});

it("check mock is called twice", () => {
  const mockFunc = jest.fn();
  mockFunc();
  mockFunc();
  expect(mockFunc).toHaveBeenCalledTimes(2);
});

it("check mockFunc has argument hoge", () => {
  const mockFunc = jest.fn();
  mockFunc("hoge");
  expect(mockFunc).toHaveBeenCalledWith("hoge");
});
