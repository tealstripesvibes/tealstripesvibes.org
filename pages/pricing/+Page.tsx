import { Helmet } from "react-helmet";
export { Page };

import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_pricing.scss";
import { mainRoutes } from "@identities/routes";

const email = "hello@spwashi.com";

function Page() {
  return (
    <main id="page__pricing">
      <Helmet>
        <title>Pricing &bull; Spwashi</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Pricing</h1>
        <ul>
          <li>Web Development</li>
          <li>Web Design</li>
          <li>Mobile Development</li>
          <li>Consulting</li>
        </ul>
        <p>
          <a className="email" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
        <div className="pricing__container">
          <div className="pricing__card">
            <h2 className="pricing__card__title">Web Development</h2>
            <p className="pricing__card__price">Starting at $500</p>
            <p className="pricing__card__features">
              Custom websites, web apps, and more.
            </p>
            <a href={mainRoutes.shop.href} className="pricing__card__button">
              Learn More
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
