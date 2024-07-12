import React from "react";
import { getByTestId, render } from "@testing-library/react";
import Container from "./";

describe("Container component", () => {
  it("should render without crashing", () => {
    const { container } = render(<Container />);
    expect(container).toBeInTheDocument();
  });

  it("should apply the id prop correctly", () => {
    const { container } = render(<Container id="test-id" />);
    expect(container.firstChild).toHaveAttribute("id", "test-id");
  });
});

describe("the Container component", () => {
  it("should render one children correctly", () => {
    const { getByText } = render(
      <Container>
        <p>Child content</p>
      </Container>
    );
    expect(getByText("Child content")).toBeInTheDocument();
  });

  it("should render multiple children correctly", () => {
    const { getByTestId } = render(
      <Container>
        <div data-testid="children 1">
          <p>Child content</p>
          <p>Child content</p>
          <p>Child content</p>
        </div>
        <div data-testid="children 2">
          <p>Child content</p>
          <p>Child content</p>
          <p>Child content</p>
        </div>
      </Container>
    );
    const children1 = getByTestId("children 1");
    const children2 = getByTestId("children 2");

    expect(children1).toBeInTheDocument();
    expect(children2).toBeInTheDocument();
  });
});
