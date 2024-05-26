import { NavigationList } from "@core/components/layout/components/navigation/components/NavigationList";
import { mainRoutes } from "@identities/routes";
import React from "react";
import './styles/_main-nav.scss';

export function MainNavigation() {
  return (
    <nav id="main-nav">
      <NavigationList items={Object.values(mainRoutes)} />
    </nav>
  );
}
