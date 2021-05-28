import { render } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects", () => {
  it("should render 3 More Buttons", () => {
    const projectsWrapper = render(<Projects />);
    const prjectArray = projectsWrapper.queryAllByText("More");
    expect(prjectArray.length).toBe(3);
  });

  it("should render More Projects Button", () => {
    const projectsWrapper = render(<Projects />);

    const moreElement = projectsWrapper.queryByText("More Projects");
    expect(moreElement).toBeInTheDocument();
  });
});
