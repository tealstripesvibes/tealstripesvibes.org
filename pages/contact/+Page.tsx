import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { Helmet } from "react-helmet";

export { Page };

function Page() {
  return (
    <main id="page__contact">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Contact Us</h1>
        <ul>
          <li>
            <a href="mailto:tealstripesvibes@gmail.com">
              tealstripesvibes@gmail.com
            </a>
          </li>
        </ul>
      </article>
    </main>
  );
}
