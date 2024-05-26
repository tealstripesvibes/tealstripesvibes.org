import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { LearnMore } from "@features/learn-more/LearnMore";
import { funRoutes, mainRoutes } from "@identities/routes/domains/mainRoutes";
import confetti from "canvas-confetti";
import { IDispositionName } from "@core/dispositions/types";
import { useDisposition } from "@features/Disposition";
import { Helmet } from "react-helmet";

export { Page };

function ActionButton({
  text = "spwashi",
  site = "lore",
}: {
  text?: string;
  site?: IDispositionName;
}) {
  const [disposition, setDisposition] = useDisposition();
  return (
    <button
      onClick={() => {
        setDisposition(site);
        confetti();
      }}
      className="action-button"
    >
      {text}
    </button>
  );
}
function Page() {
  return (
    <main id="page__home">
      <Helmet>
        <title>Home &bull; Spwashi</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Hello.</h1>
        <h2>I'm spwashi.</h2>
        <a href="/articles/software/optimization">
          <figure>
            <img
              src="/sites/spwashi.com/v0.0.1/spwashi/spwashi.webp"
              alt="spwashi logo"
            />
            <figcaption>spwashi</figcaption>
          </figure>
        </a>
        <h3>
          <ActionButton site="bone" text="Links" />
        </h3>
        <ul>
          <li>
            <a href={mainRoutes.scene.href}>Scene</a>
          </li>
          <li>
            <a href={mainRoutes.articles.href}>Articles</a>
          </li>
          <li>
            <a href={funRoutes.fantasyTitleGenerator.href}>
              Fantasy Title Generator
            </a>
          </li>
        </ul>
        <h3>
          <ActionButton site="boon" text="Emphasis" />
        </h3>
        <ul>
          <li>Software Architecture</li>
          <li>UI/UX Design</li>
          <li>Brand Management</li>
        </ul>
        <h4>
          <ActionButton site="honk" text="Learn More" />
        </h4>
        <LearnMore />
      </article>
    </main>
  );
}
