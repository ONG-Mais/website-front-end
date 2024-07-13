export const externalLinks = {
  whatsappURL: "https://api.whatsapp.com/send/?phone=555184582931",
  facebookURL: "https://www.facebook.com/ong-mais",
  instagramURL: "https://www.instagram.com/maismultiplicaramor?igsh=MWQ0b2E4ajFpc2Ezeg=",
} as const;

export type externalLinksKeys = keyof typeof externalLinks;
export const externalLinkValues = Object.values(externalLinks);
export type externalLinkValuesType = (typeof externalLinkValues)[number];
