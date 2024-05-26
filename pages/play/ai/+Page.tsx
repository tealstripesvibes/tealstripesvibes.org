import { Helmet } from "react-helmet";
import "../_styles/_page.scss";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { TextToImg } from "./TextToImg";

export { Page };

function Page() {
  return (
    <main>
      <Helmet>
        <title> &bull; Spwashi</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Hello.</h1>
        <h2>I'm spwashi.</h2>
        <h3>I build software and make art.</h3>
        <TextToImg />
      </article>
    </main>
  );
}
