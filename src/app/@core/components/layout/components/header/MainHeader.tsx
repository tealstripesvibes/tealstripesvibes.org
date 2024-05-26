import "./styles/_header.scss";
import { MainLogo } from "@core/components/layout/components/logo/MainLogo";
import { MainNavigation } from "@core/components/layout/components/navigation/MainNavigation";
import React from "react";

export function MainHeader({ showUser = true }: { showUser?: boolean }) {
  return (
    <header className="main-header">
      <MainLogo />
      <MainNavigation />
    </header>
  );
}
