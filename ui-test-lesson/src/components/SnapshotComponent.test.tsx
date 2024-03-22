import { render } from "@testing-library/react";
import SnapshotComponent from "./SnapshotComponent";

describe("SnapshotComponent", () => {
  it("should render text", () => {
    // ? containerである必要は？
    const { container } = render(<SnapshotComponent text={"test"} />);
    expect(container).toMatchSnapshot();
  });
});
