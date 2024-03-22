import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("button tag is rendered", () => {
    render(<Button label="Button" onClick={() => alert("clicked")} />);

    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });
});
