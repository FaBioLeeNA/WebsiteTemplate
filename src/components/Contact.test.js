import Contact from "./Contact";
import { render } from "@testing-library/react";

describe("Contact", () => {
  it("should render Submit button", () => {
    const contactWrapper = render(<Contact />);
    const submitElement = contactWrapper.queryByText("Submit");
    expect(submitElement).toBeInTheDocument();
  });
  it("should render First Name text input", () => {
    const contactWrapper = render(<Contact />);
    const firstNameInput = contactWrapper.queryByPlaceholderText("First Name");
    expect(firstNameInput).toBeInTheDocument();
  });
  it("should render Last Name text input", () => {
    const contactWrapper = render(<Contact />);
    const lastNameInput = contactWrapper.queryByPlaceholderText("Last Name");
    expect(lastNameInput).toBeInTheDocument();
  });
  it("should render Email text input", () => {
    const contactWrapper = render(<Contact />);
    const emailInput = contactWrapper.queryByPlaceholderText("Email");
    expect(emailInput).toBeInTheDocument();
  });
});
