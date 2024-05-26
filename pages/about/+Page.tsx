import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_about.scss";
import "react-multi-carousel/lib/styles.css";
import { Helmet } from "react-helmet";

export { Page };

function Page() {
  return (
    <main id="page__about">
      <Helmet>
        <title>Teal // Stripes // Vibes</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Teal // Stripes // Vibes</h1>
      </article>
    </main>
  );
}
