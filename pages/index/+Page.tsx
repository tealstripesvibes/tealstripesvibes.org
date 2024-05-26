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
        <title>Index &bull; Spwashi</title>
      </Helmet>
      <article>
        <h1>Hello.</h1>
        <h2>I'm spwashi.</h2>
        <a href={mainRoutes.about.href}>
          <figure>
            <img
              src="/sites/spwashi.com/v0.0.1/spwashi/spwashi.webp"
              alt="spwashi logo"
            />
            <figcaption>spwashi</figcaption>
          </figure>
        </a>
        <h3>I build software and make art.</h3>
        <LearnMore learnMoreLink={mainRoutes.home.href} />
      </article>
      <MainHeader />
    </main>
  );
}
