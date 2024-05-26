import React, { useState } from "react";
import { Link } from "@core/components/Link";
import logoUrl from "@core/dispositions/assets/logo/lore/lore-logo.svg";

function Logo() {
  return (
    <div id="logo">
      <a href="/">
        <img alt="logo" src={logoUrl} height={64} width={64} />
      </a>
    </div>
  );
}

export function Sidebar() {
  return (
    <ToggleableMenu>
      <Logo />
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <br />
        <Link href="/resume">Resume</Link>
        <Link href="/articles">Articles</Link>
        <br />
        <Link href="/rhythm">Rhythm</Link>
        <Link href="/scene">Scene</Link>
        <br />
        <Link href="/services">Services</Link>
        <Link href="/shop">Shop</Link>
        <br />
        <Link href="/portfolio">Portfolio</Link>
      </nav>
    </ToggleableMenu>
  );
}

function ToggleableMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div id="sidebar" data-sidebar-toggled={`${open}`}>
      {children}
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        [menu]
      </button>
    </div>
  );
}