import userEvent from "@testing-library/user-event";
import axios from "axios";

import { UserSearch } from "./UserSearch";
import { render, screen, waitFor } from "@testing-library/react";

// TODO
// 1. axios の処理をモック化
// 2.input要素に対して文字を入力　user.type(component)
// 3.button要素をクリック　user.type(component)
// 4.mock化した非同期処理の結果を取得し比較

const user = userEvent.setup();
jest.mock("axios");
const mockAxios = jest.mocked(axios);

describe("UserSearch", () => {
  beforeEach(() => {
    mockAxios.get.mockClear();
  });

  it("userSearch use axios to get userData", async () => {
    // axiosを使ったデータ取得処理をモック化
    const userInfo = { id: 1, name: "takehiro" };
    const response = { data: userInfo };
    mockAxios.get.mockResolvedValue(response);

    // コンポーネントのレンダリング
    render(<UserSearch />);
    // input要素に対して文字列入力
    const input = screen.getByRole("textbox");
    await user.type(input, userInfo.name);
    // button要素をクリック
    const button = screen.getByRole("button");
    await user.click(button);

    // 適切なAPIが叩かれたか検証
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/api/users?query=${userInfo.name}`
    );
  });

  it("confirm data in screen form api", async () => {
    // axiosを使ったデータ取得処理をモック化
    const userInfo = { id: 1, name: "takehiro" };
    const response = { data: userInfo };
    mockAxios.get.mockResolvedValue(response);

    // コンポーネントのレンダリング
    render(<UserSearch />);
    // input要素に対して文字列入力
    const input = screen.getByRole("textbox");
    await user.type(input, userInfo.name);
    // button要素をクリック
    const button = screen.getByRole("button");
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText(userInfo.name)).toBeInTheDocument();
    });
  });
});
