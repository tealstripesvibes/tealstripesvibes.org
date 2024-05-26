import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { Helmet } from "react-helmet";

export { Page };

const ecosystem = {
  fiona: { website: "https://fionadivine.com/" },
  magpie: { website: "https://artbymagpie.com/" },
  rsk: { website: "https://rskrules.com/" },
  spwashi: { website: "https://spwashi.com/" },
};

function Page() {
  return (
    <main id="page__ecosystem">
      <Helmet>
        <title></title>
      </Helmet>
      <article>
        <h1>Our Ecosystem</h1>
        <ul>
          {Object.entries(ecosystem).map(([name, { website }]) => (
            <li key={name}>
              <h2>{name}</h2>
              <a href={website}>{website}</a>
            </li>
          ))}
        </ul>
      </article>
      <MainHeader />
    </main>
  );
}
