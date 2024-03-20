import fs from "fs";
import { readFile } from "./mock_module";

// js module をモック化
// module 全体のメソッドなどは実装をもっていない状態
jest.mock("fs");
// mockedObject型になるため、fsモジュールメソッドが使える
const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue("dummy");

it("readFile return dummy", () => {
  const result = readFile("path/");
  expect(result).toBe("dummy");

  expect(fs.readFileSync).toHaveBeenCalled();
});
