// toThrow

import { divide, ZeroDivisorError } from "./exception";

it("divide by zero is occure exception", () => {
  // 無名関数でラップしないとtoThrow実行前に処理が止まる
  expect(() => divide(10, 0)).toThrow();
  expect(() => divide(10, 0)).toThrow("0で割ることはできません");
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
});
