import { IRouteConfig } from "@identities/routes/types/linkConfig";
export const mainResumeRoute = (<const>{
  id: "scene__resume",
  href: "/resume",
  title: "Resume",
  absolutePath: "/resume",
  subConfigMap: {
    svgObject: {
      id: "scene__resume__svg__object",
      href: "/resume/svg/object",
      title: "Resume SVG | Object Tag",
      absolutePath: "/resume/svg/object",
      subConfigMap: {},
    },
    svgComponent: {
      id: "scene__resume__svg__component",
      href: "/resume/svg/component",
      title: "Resume SVG | React Component",
      absolutePath: "/resume/svg/component",
      subConfigMap: {},
    },
  },
}) satisfies IRouteConfig;
