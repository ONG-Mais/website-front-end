export const routes = {
  home: "/",
  whoAreWe: "/quem-somos",
  whatWeDoHome: "/o-que-fazemos",
  whatWeDoSchoolSupport: "/o-que-fazemos/apoio-escolar",
  whatWeDoSocialAction: "/o-que-fazemos/acoes-sociais",
  whatWeDoEmotionalSupport: "/o-que-fazemos/socio-emocional",
  whatWeDoCookingClass: "/o-que-fazemos/oficina-de-culinaria",
  whatWeDoSports: "/o-que-fazemos/oficina-de-esportes",
  contact: "/contato",
  associates: "/parceiros",
  donate: "/doacao",
  volunteer: "/voluntario",
  partnerUp: "/empresa-parceira",
} as const;

export type routeKeys = keyof typeof routes;
export const routeValuesArray = Object.values(routes);
export type routeValues = (typeof routeValuesArray)[number];
