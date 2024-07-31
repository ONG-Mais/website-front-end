/* eslint-disable @next/next/no-img-element */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import hamburguerIcon from "../../hamburguerIcon.svg";
import { routes } from "@/app/lib/routes";
import { navItems } from "../index";
import HamburguerMenu from "./";

jest.mock("next/image", () => {
  const MockedImage = () => {
    return <img src={hamburguerIcon} alt="" />;
  };
  MockedImage.displayName = "MockedImage";
  return MockedImage;
});

const mockMenuProps = {
  showMobileMenu: true,
  navItems: navItems,
  handleMobileMenu: jest.fn(),
};

describe("The hamburguer menu component", () => {
  let whoAreWe: HTMLLinkElement,
    whatWeDo: HTMLLinkElement,
    howToHelp: HTMLLinkElement,
    donate: HTMLLinkElement,
    partners: HTMLLinkElement,
    contact: HTMLLinkElement;

  beforeEach(() => {
    const user = userEvent.setup();
    render(<HamburguerMenu {...mockMenuProps} />);
    whoAreWe = screen.getByText("Quem somos");
    whatWeDo = screen.getByText("O que fazemos");
    howToHelp = screen.getByText("Como ajudar");
    donate = screen.getByText("Doação");
    partners = screen.getByText("Parceiros");
    contact = screen.getByText("Contato");
  });

  it("shows a dropdown that have nested links", () => {
    userEvent.click(howToHelp);
    expect(donate).toBeInTheDocument();
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
    mockMenuProps.showMobileMenu = false;
  });

  it("is hidden when using desktop", () => {
    mockMenuProps.showMobileMenu = true;
    expect(hamburguerContainer.classList).toContain("sm:flex");
  });

  it("is flex when using mobile", () => {
    expect(hamburguerContainer.classList).toContain("sm:hidden");
  });
});
