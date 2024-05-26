import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import React from "react";

import boonhonkWebP from "./_assets/concepts/boonhonk/WebP/boonhonk@2x.webp";

import image1 from "./_assets/tealstripesvibes/display.guild.webp";
import image2 from "./_assets/tealstripesvibes/display.word.consistent.webp";
import image3 from "./_assets/tealstripesvibes/display.word.practice.webp";
import image4 from "./_assets/tealstripesvibes/icon.arrow-down.webp";
import image5 from "./_assets/tealstripesvibes/icon.discourse.webp";
import image6 from "./_assets/tealstripesvibes/icon.figures.webp";
import image7 from "./_assets/tealstripesvibes/icon.spells.webp";
import image8 from "./_assets/tealstripesvibes/logo.tealstripesvibes.webp";
import image9 from "./_assets/tealstripesvibes/wiggles.stripes.webp";
import image10 from "./_assets/tealstripesvibes/wiggles.teal.webp";
import image11 from "./_assets/tealstripesvibes/wiggles.vibes.webp";
import image12 from "./_assets/tealstripesvibes/word.stripes.webp";
import image13 from "./_assets/tealstripesvibes/word.teal.webp";
import image14 from "./_assets/tealstripesvibes/word.vibes.webp";
import skill__content from "./_assets/portfolio/WebP/content.webp";
import skill__languages from "./_assets/portfolio/WebP/languages.webp";
import skill__php from "./_assets/portfolio/WebP/php.webp";
import skill__priorities from "./_assets/portfolio/WebP/priorities.webp";
import skill__Sites from "./_assets/portfolio/WebP/Sites.webp";
import skill__skills from "./_assets/portfolio/WebP/skills.webp";
import skill__typescript from "./_assets/portfolio/WebP/typescript.webp";
import spw_concept from "./_assets/days/04-27/spw/WebP/concept.webp";
import spw_ground from "./_assets/days/04-27/spw/WebP/ground.webp";
import spw_integration from "./_assets/days/04-27/spw/WebP/integration.webp";
import spw_interaction from "./_assets/days/04-27/spw/WebP/interaction.webp";
import spw_perspective from "./_assets/days/04-27/spw/WebP/perspective.webp";
import spw_potential from "./_assets/days/04-27/spw/WebP/potential.webp";
import spw_subject from "./_assets/days/04-27/spw/WebP/subject.webp";
import spw_value from "./_assets/days/04-27/spw/WebP/value.webp";
import spw_vibration from "./_assets/days/04-27/spw/WebP/vibration.webp";
import spw_wonder from "./_assets/days/04-27/spw/WebP/wonder.webp";
import { Helmet } from "react-helmet";
import "./_assets/scss/_rhythm.scss";
import { InvokeGround } from "./_widgets/InvokeGround";
import { mainRoutes } from "@identities/routes";

import day_24_04_27_item_1 from "./_assets/days/04-27/hodgepodge/WebP/1.webp";
import day_24_04_27_item_2 from "./_assets/days/04-27/hodgepodge/WebP/2.webp";
import day_24_04_27_item_3 from "./_assets/days/04-27/hodgepodge/WebP/3.webp";
import day_24_04_27_item_concept from "./_assets/days/04-27/hodgepodge/WebP/concept.webp";
import day_24_04_27_item_container from "./_assets/days/04-27/hodgepodge/WebP/container.webp";
import day_24_04_27_item_ground from "./_assets/days/04-27/hodgepodge/WebP/ground.webp";
import day_24_04_27_item_integration from "./_assets/days/04-27/hodgepodge/WebP/integration.webp";
import day_24_04_27_item_interaction from "./_assets/days/04-27/hodgepodge/WebP/interaction.webp";
import day_24_04_27_item_meaning from "./_assets/days/04-27/hodgepodge/WebP/meaning.webp";
import day_24_04_27_item_meditation from "./_assets/days/04-27/hodgepodge/WebP/meditation.webp";
import day_24_04_27_item_message from "./_assets/days/04-27/hodgepodge/WebP/message.webp";
import day_24_04_27_item_perspective from "./_assets/days/04-27/hodgepodge/WebP/perspective.webp";
import day_24_04_27_item_potential from "./_assets/days/04-27/hodgepodge/WebP/potential.webp";
import day_24_04_27_item_subject from "./_assets/days/04-27/hodgepodge/WebP/subject.webp";
import day_24_04_27_item_value from "./_assets/days/04-27/hodgepodge/WebP/value.webp";
import day_24_04_27_item_vibration from "./_assets/days/04-27/hodgepodge/WebP/vibration.webp";
import day_24_04_27_item_wonder from "./_assets/days/04-27/hodgepodge/WebP/wonder.webp";
import day_24_04_27_role_backend from "./_assets/days/04-27/roles/WebP/backend.webp";
import day_24_04_27_role_frontend from "./_assets/days/04-27/roles/WebP/frontend.webp";
import day_24_04_27_role_marketing from "./_assets/days/04-27/roles/WebP/marketing.webp";
import day_24_04_27_role_systems from "./_assets/days/04-27/roles/WebP/systems.webp";
import day_24_04_27_role_uiux from "./_assets/days/04-27/roles/WebP/uiux.webp";
import day_24_04_27_salary_90 from "./_assets/days/04-27/salaries/WebP/90.webp";
import day_24_04_27_salary_107 from "./_assets/days/04-27/salaries/WebP/107.webp";
import day_24_04_27_salary_113 from "./_assets/days/04-27/salaries/WebP/113.webp";
import day_24_04_27_salary_129 from "./_assets/days/04-27/salaries/WebP/129.webp";
import day_24_04_27_salary_200 from "./_assets/days/04-27/salaries/WebP/200.webp";

import day_24_05_01_thoughts from "./_assets/days/05-01/thoughts.webp";
import day_24_05_02_thoughts from "./_assets/days/05-02/WebP/unclear.webp";
export { Page };

function Page() {
  return (
    <main id="page__rhythm">
      <Helmet>
        <title>Rhythm &bull; Spwashi</title>
      </Helmet>
      <MainHeader showUser={false} />
      <article>
        <h1>Rhythm</h1>
        <section>
          <InvokeGround count={1} />
          <section>
            {[day_24_05_02_thoughts].map((src) => (
              <a href={mainRoutes.articles.href} key={src}>
                <figure>
                  <img src={src} alt="May 02, 2024" />
                  <figcaption>May 02, 2024</figcaption>
                </figure>
              </a>
            ))}
          </section>
          <section>
            {[day_24_05_01_thoughts].map((src) => (
              <a href={mainRoutes.articles.href} key={src}>
                <figure>
                  <img src={src} alt="May 01, 2024" />
                  <figcaption>May 01, 2024</figcaption>
                </figure>
              </a>
            ))}
          </section>
          <section>
            {[
              day_24_04_27_salary_90,
              day_24_04_27_salary_107,
              day_24_04_27_salary_113,
              day_24_04_27_salary_129,
              day_24_04_27_salary_200,
            ].map((src) => (
              <a href={mainRoutes.articles.href} key={src}>
                <figure>
                  <img src={src} alt="April 27, 2024" />
                  <figcaption>April 27, 2024</figcaption>
                </figure>
              </a>
            ))}
          </section>
          <section>
            {[
              day_24_04_27_role_backend,
              day_24_04_27_role_frontend,
              day_24_04_27_role_marketing,
              day_24_04_27_role_systems,
              day_24_04_27_role_uiux,
            ].map((src) => (
              <a href={mainRoutes.articles.href} key={src}>
                <figure>
                  <img src={src} alt="April 27, 2024" />
                  <figcaption>April 27, 2024</figcaption>
                </figure>
              </a>
            ))}
          </section>
          <section>
            {[
              day_24_04_27_item_1,
              day_24_04_27_item_2,
              day_24_04_27_item_3,
              day_24_04_27_item_concept,
              day_24_04_27_item_container,
              day_24_04_27_item_ground,
              day_24_04_27_item_integration,
              day_24_04_27_item_interaction,
              day_24_04_27_item_meaning,
              day_24_04_27_item_meditation,
              day_24_04_27_item_message,
              day_24_04_27_item_perspective,
              day_24_04_27_item_potential,
              day_24_04_27_item_subject,
              day_24_04_27_item_value,
              day_24_04_27_item_vibration,
              day_24_04_27_item_wonder,
            ].map((src) => (
              <a href={mainRoutes.articles.href} key={src}>
                <figure>
                  <img src={src} alt="April 27, 2024" />
                  <figcaption>April 27, 2024</figcaption>
                </figure>
              </a>
            ))}
          </section>
          <section>
            {[
              spw_concept,
              spw_ground,
              spw_integration,
              spw_interaction,
              spw_perspective,
              spw_potential,
              spw_subject,
              spw_value,
              spw_vibration,
              spw_wonder,
            ].map((src) => (
              <a href={mainRoutes.articles.href} key={src}>
                <figure>
                  <img src={src} alt="April 27, 2024" />
                  <figcaption>April 27, 2024</figcaption>
                </figure>
              </a>
            ))}
          </section>
          <section>
            {[
              spw_concept,
              spw_ground,
              spw_integration,
              spw_interaction,
              spw_perspective,
              spw_potential,
              spw_subject,
              spw_value,
              spw_vibration,
              spw_wonder,
            ].map((src) => (
              <a href={mainRoutes.articles.href} key={src}>
                <figure>
                  <img src={src} alt="April 27, 2024" />
                  <figcaption>April 27, 2024</figcaption>
                </figure>
              </a>
            ))}
          </section>
          <section>
            {[
              skill__content,
              skill__languages,
              skill__php,
              skill__priorities,
              skill__Sites,
              skill__skills,
              skill__typescript,
            ].map((src) => (
              <a href={mainRoutes.articles.href} key={src}>
                <figure>
                  <img src={src} alt="Articles" />
                  <figcaption>Articles</figcaption>
                </figure>
              </a>
            ))}
          </section>
          <section>
            {[
              image1,
              image2,
              image3,
              image4,
              image5,
              image6,
              image7,
              image8,
              image9,
              image10,
              image11,
              image12,
              image13,
              image14,
            ].map((src) => (
              <a href="https://tealstripesvibes.com/zine" key={src}>
                <figure>
                  <img src={src} alt="Teal Stripes Vibes" />
                  <figcaption>tealstripesvibes &bull; zine</figcaption>
                </figure>
              </a>
            ))}
          </section>
          <a href="https://boonbanebone.com">
            <figure>
              <img src={boonhonkWebP} alt="Boonhonk" />
              <figcaption>Concept &bull; Boonhonk</figcaption>
            </figure>
          </a>
        </section>
      </article>
    </main>
  );
}
