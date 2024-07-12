/* eslint-disable @next/next/no-img-element */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./index";
import hamburguerIcon from "./hamburguerIcon.svg";
import { routes } from "@/app/lib/routes";

jest.mock("next/image", () => {
  const MockedImage = () => {
    return <img src={hamburguerIcon} alt="" />;
  };
  MockedImage.displayName = "MockedImage";
  return MockedImage;
});

describe("the header component", () => {
  const header = render(<Header />);

  it("should render without erros", () => {
    expect(header).toBeInTheDocument();
  });
});

describe("The header component", () => {
  let nav: HTMLElement,
    whoAreWe: HTMLLinkElement,
    whatWeDo: HTMLLinkElement,
    howToHelp: HTMLLinkElement,
    partners: HTMLLinkElement,
    contact: HTMLLinkElement,
    button: HTMLButtonElement,
    buttonLink: HTMLElement;

  beforeEach(() => {
    render(<Header />);
    nav = screen.getByRole("navigation");
    whoAreWe = screen.getByText("Quem somos");
    whatWeDo = screen.getByText("O que fazemos");
    howToHelp = screen.getByText("Como ajudar");
    partners = screen.getByText("Parceiros");
    contact = screen.getByText("Contato");
    button = screen.getByRole("button");
    buttonLink = screen.getByTestId("link");
  });

  it("renders the the needed elements", () => {
    expect(nav).toBeInTheDocument();
    expect(whoAreWe).toBeInTheDocument();
    expect(whatWeDo).toBeInTheDocument();
    expect(howToHelp).toBeInTheDocument();
    expect(partners).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(buttonLink).toBeInTheDocument();
  });

  it("have each link redirects to the correct place", () => {
    expect(whoAreWe).toHaveAttribute("href", routes.whoAreWe);
    expect(whatWeDo).toHaveAttribute("href", routes.whatWeDoHome);
    expect(howToHelp).toHaveAttribute("href", "/como-ajudar");
    expect(partners).toHaveAttribute("href", routes.associates);
    expect(contact).toHaveAttribute("href", routes.contact);
    expect(buttonLink).toHaveAttribute("href", routes.donate);
  });
});
