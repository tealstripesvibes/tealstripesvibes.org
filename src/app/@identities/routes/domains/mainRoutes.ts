import { IRouteConfig } from "../types/linkConfig";
import { mainResumeRoute } from "../../../../../pages/resume/route";

const mainRootRoute: IRouteConfig = <const>{
  id: "scene__root",
  href: "/",
  absolutePath: "/*",
  subConfigMap: {},
};
const mainHomeRoute: IRouteConfig = <const>{
  id: "scene__home",
  href: "/home",
  title: "Home",
  absolutePath: "/home",
  subConfigMap: {},
};
const mainAboutRoute: IRouteConfig = <const>{
  id: "scene__about",
  href: "/about",
  title: "About",
  absolutePath: "/about",
  subConfigMap: {},
};
const mainRhythmRoute: IRouteConfig = <const>{
  id: "scene__rhythm",
  href: "/rhythm",
  title: "Rhythm",
  absolutePath: "/rhythm",
  subConfigMap: {},
};
const mainSceneRoute: IRouteConfig = <const>{
  id: "scene__scene",
  href: "/scene",
  title: "Scene",
  absolutePath: "/scene",
  subConfigMap: {},
};
const mainPricingRoute: IRouteConfig = <const>{
  id: "scene__pricing",
  href: "/pricing",
  title: "Pricing",
  absolutePath: "/pricing",
  subConfigMap: {},
};
const mainServicesRoute: IRouteConfig = <const>{
  id: "scene__services",
  href: "/services",
  title: "Services",
  absolutePath: "/services",
  subConfigMap: {},
};
const mainShopRoute: IRouteConfig = <const>{
  id: "scene__shop",
  href: "/shop",
  title: "Shop",
  absolutePath: "/shop",
  subConfigMap: {},
};
const mainArticlesRoute: IRouteConfig = <const>{
  id: "scene__articles",
  href: "/articles",
  title: "Articles",
  absolutePath: "/articles",
  subConfigMap: {},
};

export const mainOnRoute = (<const>{
  id: "scene__on",
  href: "/on",
  title: "On",
  absolutePath: "/on",
  subConfigMap: {
    architecture: {
      id: "scene__on__architecture",
      href: "/on/architecture",
      title: "Architecture",
      absolutePath: "/on/architecture",
      subConfigMap: {},
    },
    neurodivergence: {
      id: "scene__on__neurodivergence",
      href: "/on/neurodivergence",
      title: "Neurodivergence",
      absolutePath: "/on/neurodivergence",
      subConfigMap: {},
    },
    termination: {
      id: "scene__on__termination",
      href: "/on/termination",
      title: "Termination",
      absolutePath: "/on/termination",
      subConfigMap: {},
    },
  },
}) satisfies IRouteConfig;

const mainAiRoute = (<const>{
  id: "scene__ai",
  href: "/ai",
  title: "AI",
  absolutePath: "/ai",
  subConfigMap: {},
}) satisfies IRouteConfig;

const mainPortfolioRoute = (<const>{
  id: "scene__ai",
  href: "/portfolio",
  title: "Portfolio",
  absolutePath: "/portfolio",
  subConfigMap: {},
}) satisfies IRouteConfig;

export const mainRoutes = {
  root: mainRootRoute,
  home: mainHomeRoute,
  articles: mainArticlesRoute,
  about: mainAboutRoute,
  rhythm: mainRhythmRoute,
  scene: mainSceneRoute,
  resume: mainResumeRoute,
  // services: mainServicesRoute,
  shop: mainShopRoute,
  ai: mainAiRoute,
  portfolio: mainPortfolioRoute,
};

export const funRoutes = {
  fantasyTitleGenerator: {
    id: "scene__fantasyTitleGenerator",
    href: "/play/generators/title/fantasy/",
    title: "Fantasy Title Generator",
    absolutePath: "/play/generators/title/fantasy/",
    subConfigMap: {},
  } as IRouteConfig,
};
