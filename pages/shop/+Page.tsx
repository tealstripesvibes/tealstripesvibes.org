import { Helmet } from "react-helmet";
export { Page };

import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { lazy, Suspense } from "react";
import "./_styles/_shop.scss";

const Shop = lazy(() =>
  import("@features/shop/components/Shop").then((module) => ({
    default: module.Shop,
  })),
);

function Page() {
  return (
    <main id="page__shop">
      <Helmet>
        <title>Shop &bull; Spwashi</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Offerings</h1>
        <ul>
          <li>Hosting Packages</li>
          <li>Character Seeds</li>
        </ul>
        <h3>I build software and make art.</h3>
        <Suspense fallback={""}>
          <Shop />
        </Suspense>
      </article>
    </main>
  );
}
