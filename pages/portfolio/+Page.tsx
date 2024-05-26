import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { Helmet } from "react-helmet";
import { mainRoutes } from "@identities/routes";
import { VimeoVideo } from "@widgets/video/vimeo/VimeoVideo";

export { Page };

function Page() {
  return (
    <main id="page__portfolio">
      <Helmet>
        <title>Portfolio &bull; Spwashi</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Portfolio</h1>
        <h2>Skills</h2>
        <ul className="skills">
          <li>Design</li>
          <li>Architecture</li>
          <li>Development</li>
        </ul>
        <VimeoVideo
          videoId="938799228"
          videoHash="b091bcee08"
          title="The Clown Animation"
        />
        <h2>Projects</h2>
        <ul className="websites">
          <li>
            <a href="https://factshift.com">https://factshift.com</a>
          </li>
          <li>
            <a href="https://spwashi.com">https://spwashi.com</a>
          </li>
          <li>
            <a href="https://rskrules.com">https://rskrules.com</a>
          </li>
        </ul>
        <h2>See Also</h2>
        <ul>
          <li>
            I'm{" "}
            <a href={mainRoutes.articles.href + "/job/search"}>
              looking for work
            </a>
          </li>
        </ul>
      </article>
    </main>
  );
}
