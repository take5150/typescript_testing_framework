import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AsyncComponent from "./AsyncComponent";

const user = userEvent.setup();

describe("AsyncComponet", () => {
  it("async func work ", async () => {
    render(<AsyncComponent />);
    expect(screen.getByText("Initial text")).toBeInTheDocument();

    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // waitFor関数は実行時間がかかるため、非同期処理をモック化することも検討すべき
    await waitFor(
      () => {
        expect(screen.getByText("Updated text")).toBeInTheDocument();
      },
      {
        interval: 50,
        timeout: 3000,
      }
    );
  });
});
