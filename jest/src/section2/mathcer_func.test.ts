// toBe 内部的には Object.isが使用されているイメージ
it("numbers test", () => {
  expect(2 + 2).toBe(4);
});
it("string test", () => {
  expect("test").toBe("test");
});
it("boolean test", () => {
  expect(true).toBe(true);
});

// toEqual 配列、オブジェクトの比較が可能
it("array test", () => {
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3];
  expect(array1).toEqual(array2);
});
it("object test", () => {
  const object1 = {
    name: "take",
  };
  const object2 = {
    name: "take",
  };
  expect(object1).toEqual(object2);
});

// not matcher関数の比較結果を反転させる
it("two plus two is not five", () => {
  expect(2 + 2).not.toBe(5);
});
