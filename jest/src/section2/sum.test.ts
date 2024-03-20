import { sum } from "./sum";

it("one plus two equal three", () => {
  expect(sum(1, 2)).toBe(3);
});

// eachでパラメータを複数パターン定義できる
// テンプレートリテラルで囲った中にパラメータの説明を記載する
it.each`
  a      | b      | result
  ${1}   | ${2}   | ${3}
  ${1}   | ${-2}  | ${-1}
  ${100} | ${100} | ${200}
`("$a plus $b expected $result ", ({ a, b, result }) => {
  expect(sum(a, b)).toBe(result);
});
