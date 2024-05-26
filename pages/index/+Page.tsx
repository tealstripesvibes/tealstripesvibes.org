import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { Helmet } from "react-helmet";
import { SiteContent } from "@features/site-content/SiteContent";

export { Page };

function Page() {
  return (
    <main id="page__index">
      <Helmet>
        <title>Teal // Stripes // Vibes</title>
      </Helmet>
      <article>
        <h1>Teal // Stripes // Vibes</h1>
        <h2>{import.meta.env.VITE_SITE_DOMAIN}</h2>
        <SiteContent siteName="tealstripesvibes.org">
          <figure>
            <img
              src="/sites/tealstripesvibes.org/v0.0.1/og/og-image.png"
              alt="Teal // Stripes // Vibes"
            />
          </figure>
        </SiteContent>
      </article>
      <MainHeader />
    </main>
  );
}
