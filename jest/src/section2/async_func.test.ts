import { delay } from "./async_func";

it("async function delay is work and return message after time", async () => {
  const result = await delay("Hello Jest", 3000);
  expect(result).toBe("Hello Jest");
});

it("if time is minus throw error", async () => {
  // 非同期処理のエラーハンドリングはtry-catchで囲う
  try {
    const result = await delay("Hello Jest", -1);
  } catch (e: any) {
    expect(e.message).toBe("timeは0以上で指定してください");
  }
});
