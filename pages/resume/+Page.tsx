import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { SpwashiPortfolioOverview2023 } from "../about/_videos/SpwashiPortfolioOverview2023";
import "./_styles/_page.scss";
import { LearnMore } from "@features/learn-more/LearnMore";
import { Popup, PopupActionLink } from "@core/components/popup/UiPopup";
import { mainResumeRoute } from "./route";
import { Helmet } from "react-helmet";
import { mainRoutes } from "@identities/routes";
export { Page };

function Page() {
  return (
    <main id="page__resume">
      <Helmet>
        <title>Resume &bull; Spwashi</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Resume</h1>
        <p>
          learn about this job search{" "}
          <a href={`${mainRoutes.articles.href}/job/search`}>[here]</a>
        </p>
        <br />
        <h2>Portfolio Overview</h2>
        <SpwashiPortfolioOverview2023 />
        <br />
        <h2 id="pdf-version">PDF version</h2>
        <Popup
          forId="pdf-version"
          title="My Resume as a PDF (outdated)"
          Component={() => (
            <LearnMore
              learnMoreLink="/sites/spwashi.com/v0.0.1/spwashi/samwashington-resume-2023.pdf"
              learnMoreText="PDF version &bull; v2023.1"
            />
          )}
        />
        <br />
        <h2 id="svg-version">SVG version</h2>
        <Popup
          forId="svg-version"
          title="My Resume as an SVG"
          Component={() => (
            <section id="svg-resume-popup">
              <section>
                <h3>Object</h3>
                <p>this page uses an object tag to include the SVG</p>
                <PopupActionLink
                  href={mainResumeRoute.subConfigMap.svgObject.href}
                  title={">> v2023.11"}
                />
              </section>
              <section>
                <h3>React Component</h3>
                <p>this page uses a React component to include the SVG</p>
                <PopupActionLink
                  href={mainResumeRoute.subConfigMap.svgComponent.href}
                  title={">> v2023.11"}
                />
              </section>
            </section>
          )}
        />
        <br />
        <br />
      </article>
    </main>
  );
}
