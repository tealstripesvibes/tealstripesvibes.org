import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { LearnMore } from "@features/learn-more/LearnMore";
import confetti from "canvas-confetti";
import { IDispositionName } from "@core/dispositions/types";
import { useDisposition } from "@features/Disposition";
import { Helmet } from "react-helmet";

export { Page };

function Page() {
  return (
    <main id="page__home">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Teal // Stripes // Vibes</h1>
        <LearnMore />
      </article>
    </main>
  );
}
