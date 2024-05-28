import { IRouteConfig } from "../types/linkConfig";

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
const mainContactRoute: IRouteConfig = <const>{
  id: "scene__contact",
  href: "/contact",
  title: "Contact",
  absolutePath: "/contact",
  subConfigMap: {},
};
const mainEcosystemRoute: IRouteConfig = <const>{
  id: "scene__ecosystem",
  href: "/ecosystem",
  title: "Ecosystem",
  absolutePath: "/ecosystem",
  subConfigMap: {},
};

export const mainRoutes = {
  root: mainRootRoute,
  home: mainHomeRoute,
  about: mainAboutRoute,
  contact: mainContactRoute,
  ecosystem: mainEcosystemRoute,
};
