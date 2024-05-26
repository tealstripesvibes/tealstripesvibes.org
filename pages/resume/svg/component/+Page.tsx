import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "../../_styles/_page.scss";
import { Resume } from "../../Resume";
export { Page };

function Page() {
  return (
    <main id="page__resume">
      <MainHeader />
      <article>
        <h1>Resume</h1>
        <h2>SVG version</h2>
        <h3>React Component</h3>
        <Resume />
      </article>
    </main>
  );
}
