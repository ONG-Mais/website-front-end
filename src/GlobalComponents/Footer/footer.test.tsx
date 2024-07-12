/* eslint-disable @next/next/no-img-element */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from ".";
import { routes } from "@/app/lib/routes";
import { externalLinks } from "@/app/lib/externalLinks";
import logo from "@/assets/images/logo.png";

jest.mock("next/image", () => {
  const MockedImage = () => {
    return <img src={logo.src} alt="logo" />;
  };
  MockedImage.displayName = "MockedImage";
  return MockedImage;
});

describe("the footer component", () => {
  let aboutUs: HTMLElement,
    historyAndMission: HTMLElement,
    activities: HTMLElement,
    help: HTMLElement,
    donate: HTMLElement,
    volunteer: HTMLElement,
    partnerUp: HTMLElement,
    contact: HTMLElement,
    facebook: HTMLElement,
    instagram: HTMLElement,
    whatsapp: HTMLElement;

  beforeEach(() => {
    render(<Footer />);
    aboutUs = screen.getByText("Sobre nós");
    historyAndMission = screen.getByText("História e Missão");
    activities = screen.getByText("Atividades");
    help = screen.getByText("Ajudar");
    donate = screen.getByText("Doações");
    volunteer = screen.getByText("Voluntariado");
    partnerUp = screen.getByText("Parceria");
    contact = screen.getByText("Contato");
    facebook = screen.getByTestId("facebook");
    instagram = screen.getByTestId("instagram");
    whatsapp = screen.getByTestId("whatsapp");
  });

  it("renders all necessary links", () => {
    expect(aboutUs).toBeInTheDocument();
    expect(historyAndMission).toBeInTheDocument();
    expect(activities).toBeInTheDocument();
    expect(help).toBeInTheDocument();
    expect(donate).toBeInTheDocument();
    expect(volunteer).toBeInTheDocument();
    expect(partnerUp).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
    expect(facebook).toBeInTheDocument();
    expect(instagram).toBeInTheDocument();
    expect(whatsapp).toBeInTheDocument();
  });

  it("have each link redirect the user to the correct location", () => {
    expect(aboutUs).toHaveAttribute("href", routes.whoAreWe);
    expect(historyAndMission).toHaveAttribute("href", `${routes.whoAreWe}#sobre-nos`);
    expect(activities).toHaveAttribute("href", routes.whatWeDoHome);
    expect(help).toHaveAttribute("href", routes.donate);
    expect(donate).toHaveAttribute("href", routes.donate);
    expect(volunteer).toHaveAttribute("href", routes.volunteer);
    expect(partnerUp).toHaveAttribute("href", routes.partnerUp);
    expect(contact).toHaveAttribute("href", routes.contact);
    expect(facebook).toHaveAttribute("href", externalLinks.facebookURL);
    expect(instagram).toHaveAttribute("href", externalLinks.instagramURL);
    expect(whatsapp).toHaveAttribute("href", externalLinks.whatsappURL);
  });
});
