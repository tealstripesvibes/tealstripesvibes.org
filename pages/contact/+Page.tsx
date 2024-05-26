import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { LearnMore } from "@features/learn-more/LearnMore";
import { mainRoutes } from "@identities/routes";
import { Helmet } from "react-helmet";
import { VimeoVideo } from "../_include";

export { Page };

function Page() {
  return (
    <main id="page__index">
      <Helmet>
        <title>Contact &bull; Spwashi</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Hi, I'm Spwashi!</h1>
        <h2>I build software and make art.</h2>
        <h3>How to reach me</h3>
        <ul>
          <li>
            <a href="https://tiktok.com/@spwashi">TikTok</a>
          </li>
          <li>
            <a href="mailto:hello@spwashi.com">Email</a>
          </li>
        </ul>
        <h3>What I do</h3>
        <ul>
          <li>Optimize traffic</li>
          <li>Clarify abstraction</li>
          <li>Teach code</li>
        </ul>
        <VimeoVideo
          videoId="938799228"
          videoHash="b091bcee08"
          title="The Clown Animation"
        />
      </article>
    </main>
  );
}
