import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { Helmet } from "react-helmet";

export { Page };

const humans = {
  fiona: { website: "https://fionadivine.com/" },
  magpie: { website: "https://artbymagpie.com/" },
  rsk: { website: "https://rskrules.com/" },
  kristy: { website: "https://kristynacole.com/" },
  spwashi: { website: "https://spwashi.com/" },
};
const brands = {
  tealstripesvibes: { website: "https://tealstripesvibes.com/" },
  newaura: { website: "https://newaura.club/" },
  lore_land: { website: "https://lore.land/" },
};

function Page() {
  return (
    <main id="page__ecosystem">
      <Helmet>
        <title></title>
      </Helmet>
      <article>
        <h1>Our Ecosystem</h1>
        <h2>Humans</h2>
        <ul>
          {Object.entries(humans).map(([name, { website }]) => (
            <li key={name}>
              <h2>{name}</h2>
              <a href={website}>{website}</a>
            </li>
          ))}
        </ul>
        <h2>Brands</h2>
        <ul>
          {Object.entries(brands).map(([name, { website }]) => (
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
