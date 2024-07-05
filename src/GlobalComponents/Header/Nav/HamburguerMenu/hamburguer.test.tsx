/* eslint-disable @next/next/no-img-element */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import hamburguerIcon from "../../hamburguerIcon.svg";
import { routes } from "@/app/lib/routes";
import { links } from "../index";
import HamburguerMenu from "./";

jest.mock("next/image", () => {
  const MockedImage = () => {
    return <img src={hamburguerIcon} alt="" />;
  };
  MockedImage.displayName = "MockedImage";
  return MockedImage;
});

const mockMenuProps = {
  showMenu: true,
  links: links,
  handleMenu: jest.fn(),
};

describe("The hamburguer menu component links", () => {
  let whoAreWe: HTMLLinkElement,
    whatWeDo: HTMLLinkElement,
    howToHelp: HTMLLinkElement,
    partners: HTMLLinkElement,
    contact: HTMLLinkElement;

  beforeEach(() => {
    render(<HamburguerMenu {...mockMenuProps} />);
    whoAreWe = screen.getByText("Quem somos");
    whatWeDo = screen.getByText("O que fazemos");
    howToHelp = screen.getByText("Como ajudar");
    partners = screen.getByText("Parceiros");
    contact = screen.getByText("Contato");
  });

  it("renders the the needed links", () => {
    expect(whoAreWe).toBeInTheDocument();
    expect(whatWeDo).toBeInTheDocument();
    expect(howToHelp).toBeInTheDocument();
    expect(partners).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });

  it("have each link redirects to the correct place", () => {
    expect(whoAreWe).toHaveAttribute("href", routes.whoAreWe);
    expect(whatWeDo).toHaveAttribute("href", routes.whatWeDoHome);
    expect(howToHelp).toHaveAttribute("href", "/como-ajudar");
    expect(partners).toHaveAttribute("href", routes.associates);
    expect(contact).toHaveAttribute("href", routes.contact);
  });
});

describe("The hamburguer menu display", () => {
  let hamburguerContainer: HTMLDivElement;
  beforeEach(() => {
    render(<HamburguerMenu {...mockMenuProps} />);
    hamburguerContainer = screen.getByTestId("hamburguer-container");
  });

  afterEach(() => {
    mockMenuProps.showMenu = false;
  });

  it("is hidden when using desktop", () => {
    mockMenuProps.showMenu = true;
    expect(hamburguerContainer.classList).toContain("sm:flex");
  });

  it("is flex when using mobile", () => {
    expect(hamburguerContainer.classList).toContain("sm:hidden");
  });
});
