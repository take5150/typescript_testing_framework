# Typescriptを使用したテスティングフレームワークを使ってみる

## ■ Jest
#### 【環境セットアップ】

```
npm init -y
npm i -D typescript
npx tsc --init
npm i -D jest @types/jest ts-jest
npx ts-jest config:init
```

## ■ React Testing Library
#### 【環境セットアップ】
```
npm i -D jest @types/jest ts-jest
npm i -D jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
npx ts-jest config:init
```

#### 【テスト実施環境セットアップ】
※Reactアプリ環境は構築済み

jest.config.jsファイルを編集する。
```
/** @type {import('ts-jest').JestConfigWithTsJest} */
// esmodulesの書き方に修正
export default {
  preset: "ts-jest",
  // テスト環境をjest-environment-jsdomに変更
  testEnvironment: "jest-environment-jsdom",
  // jest.setup.tsの内容を読み込む(import "@testing-library/jest-dom";)
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
```
tsconfig.jsonファイルに以下を追記。
```
"esModuleInterop": true,
"types": ["@testing-library/jest-dom"]
```

## ■ Storybook




## ■ Playwright



