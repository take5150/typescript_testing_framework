import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

const user = userEvent.setup();

describe("Form", () => {
  it("default inoutValue is empty ", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveTextContent("");
  });

  it("alert about inputValue after click send button", async () => {
    const alertSpy = jest.spyOn(window, "alert").mockReturnValue();

    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    await user.type(input, "test");

    expect(screen.getByDisplayValue("test")).toBeInTheDocument();

    const button = screen.getByRole("button");
    await user.click(button);
    expect(alertSpy).toHaveBeenCalledWith("submitted: test");
    alertSpy.mockRestore;
  });
});
