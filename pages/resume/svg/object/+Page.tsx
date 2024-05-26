import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "../../_styles/_page.scss";
export { Page };

function Page() {
  return (
    <main id="page__resume">
      <MainHeader />
      <article>
        <h1>Resume</h1>
        <h2>SVG version</h2>
        <h3>Object</h3>
        <object
          width={"90%"}
          type="image/svg+xml"
          data="https://resume.spwashi.com/resume.svg"
        ></object>
      </article>
    </main>
  );
}
