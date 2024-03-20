// describeでテストをグループ化できる
describe("test of array", () => {
  it("push something to array", () => {
    const arr = [];
    arr.push("something");
    expect(arr).toEqual(["something"]);
  });

  it("array length is correct", () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
  });

  // describeはネスト可能
  describe("search test in array", () => {
    it("find element in array", () => {
      const arr = [1, 2];
      expect(arr.indexOf(2)).toBe(1);
    });
  });
});
