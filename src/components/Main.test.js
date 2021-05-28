import { render } from "@testing-library/react";
import Main from "./Main";

describe("Main Page", () => {
  it("should render Info Button", () => {
    const mainWrapper = render(<Main />);
    const infoElement = mainWrapper.queryByText("Info");
    expect(infoElement).toBeInTheDocument();
  });

  it("should render Portfolio Button", () => {
    const mainWrapper = render(<Main />);
    const portfolioElement = mainWrapper.queryByText("Info");
    expect(portfolioElement).toBeInTheDocument();
  });
});
