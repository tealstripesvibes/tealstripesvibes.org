import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { LearnMore } from "@features/learn-more/LearnMore";
import { mainRoutes } from "@identities/routes";
import { Helmet } from "react-helmet";

export { Page };

function Page() {
  return (
    <main id="page__index">
      <Helmet>
        <title>Teal // Stripes // Vibes</title>
      </Helmet>
      <article>
        <h1>Teal // Stripes // Vibes</h1>
        <figure>
          <img
            src="/sites/tealstripesvibes.org/v0.0.1/og/og-image-tealstripesvibes.png"
            alt="Teal // Stripes // Vibes"
          />
        </figure>
      </article>
      <MainHeader />
    </main>
  );
}
