import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { Helmet } from "react-helmet";

export { Page };

function Page() {
  return (
    <main id="page__ai">
      <Helmet>
        <title>AI &bull; Spwashi</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Artificial Intelligence</h1>
        <ul>
          <li>
            <a href="https://spwashi.ai">https://spwashi.ai</a>
          </li>
        </ul>
      </article>
    </main>
  );
}
