/* eslint-disable @next/next/no-img-element */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import hamburguerIcon from "../hamburguerIcon.svg";
import Nav from ".";

const mockProps = {
  showIcon: false,
};

function handleWindowSizeChange(newValue: number) {
  global.window.innerWidth = newValue;
  mockProps.showIcon = global.window.innerWidth < 950;
}

jest.mock("next/image", () => {
  const MockedImage = () => {
    return (
      <img
        src={hamburguerIcon}
        alt="logo"
        data-testid="hamburguer-icon"
        className={`${mockProps.showIcon ? "block" : "hidden"}`}
      />
    );
  };
  MockedImage.displayName = "MockedImage";
  return MockedImage;
});

describe("The icon shows on mobile and not shows on desktop", () => {
  let hambuerguerIcon: HTMLElement;

  beforeEach(() => {
    const { getByTestId } = render(<Nav />);
    hambuerguerIcon = getByTestId("hamburguer-icon");
  });

  afterEach(() => {
    jest.clearAllMocks();
    handleWindowSizeChange(390);
  });

  it("the icon does not show on desktop", () => {
    handleWindowSizeChange(1920);
    expect(hambuerguerIcon).toHaveAttribute("class", "hidden");
  });

  it("the icon shows on mobile", () => {
    expect(hambuerguerIcon).toHaveAttribute("class", "block");
  });
});
