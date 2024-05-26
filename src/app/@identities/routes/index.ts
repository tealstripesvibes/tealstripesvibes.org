import {IRouteConfig} from './types/linkConfig';

export {adminRoutes} from './domains/adminRoutes';
export {mainRoutes} from './domains/mainRoutes';

export function getRouterPath(route: IRouteConfig, ...params: any[]) {
  if (route.buildPath) {
    return route.buildPath(false, ...params);
  }
  return route.absolutePath;
}