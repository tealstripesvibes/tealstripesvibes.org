import { mainRoutes } from "@identities/routes";
import "./_styles/_job-search.scss";
import { DispositionSwitch, useDisposition } from "@features/Disposition";
import { PaintSplatterVideo } from "../../../../about/_videos/PaintSplatterVideo";
import { LearnMore } from "@features/learn-more/LearnMore";
import React from "react";
import { VimeoVideo } from "@widgets/video/vimeo/VimeoVideo";
import { mainOnRoute } from "@identities/routes/domains/mainRoutes";

function Intro() {
  const [disposition] = useDisposition();
  switch (disposition) {
    case "bane":
      return <p>FUCK the job search.</p>;
    case "boon":
      return (
        <p>There are some exciting opportunities present in the job search!</p>
      );
    case "bone":
      return <p>I have mixed feelings about the job search.</p>;
    default:
      return <p></p>;
  }
}
function ItCanBeSomething() {
  return (
    <DispositionSwitch
      boon={
        <p style={{ fontSize: "2rem" }}>
          it can be a{" "}
          <span
            style={{
              color: "var(--page-accent-color--dark)",
              fontWeight: "bold",
              background: "var(--page-text-color--main)",
            }}
          >
            fun excuse
          </span>{" "}
          to make art!
        </p>
      }
      bane={
        <p style={{ fontSize: "2rem" }}>
          it is a{" "}
          <span
            style={{
              color: "var(--page-accent-color--dark)",
              fontWeight: "bold",
              background: "var(--page-text-color--main)",
            }}
          >
            ROUGH PROCESS
          </span>{" "}
          to experience &#128555;
        </p>
      }
      bone={
        <p style={{ fontSize: "2rem" }}>
          it can be a{" "}
          <span
            style={{
              color: "var(--page-accent-color--dark)",
              fontWeight: "bold",
              background: "var(--page-text-color--main)",
            }}
          >
            tedious process
          </span>{" "}
          to experience.
        </p>
      }
    />
  );
}
function InGeneral() {
  const [disposition] = useDisposition();
  switch (disposition) {
    case "boon":
      return (
        <div id="in-general">
          <p>
            <em>And that's fantastic!</em>
          </p>
          <p>I always make so many interesting things &#128538;</p>
          <p>Anyway...</p>
        </div>
      );
    case "bane":
      return (
        <div id="in-general">
          <p>
            <em>All around.</em>
          </p>
          <p>No one likes it.</p>
          <p>Anyway...</p>
        </div>
      );
    case "bone":
    default:
      return (
        <div id="in-general">
          <p>
            <em>At every turn.</em>
          </p>
          <p>It can be a lot!</p>
          <p>We move.</p>
        </div>
      );
  }
}

export function TheJobSearch() {
  const beVulnerable = false;
  return (
    <article id="the-job-search">
      <Intro />
      <ItCanBeSomething />
      <InGeneral />
      <p style={{ fontSize: "2rem", marginTop: "4rem" }}>
        This is{" "}
        <span
          style={{
            color: "var(--page-accent-color--dark)",
            fontWeight: "bold",
            background: "var(--page-text-color--main)",
          }}
        >
          how I'm approaching it.
        </span>
      </p>

      <section id="i-made-sites" className="intentional-effort">
        <header>I made a bunch of sites.</header>
        <section className="how-this-helps">
          <p>With these tangible domains, I can:</p>
          <ul>
            <li>
              <a href={mainRoutes.resume.href}>demonstrate skills</a> I've had
              for a while, and{" "}
            </li>
            <li>
              <a href={mainRoutes.articles.href}>hone other skills</a> that I
              need for performance.
            </li>
          </ul>
        </section>
        <p className="upcoming-highlight">I'll list some of the sites here.</p>
        <div className="websites">
          <ul>
            <li>
              <header>
                <a href="https://factshift.com/?story=demo">
                  https://factshift.com
                </a>
              </header>
              <ul>
                <li>can be used to train a robot</li>
                <li>mostly useful to demo hashing</li>
                <li>leading-edge UI design for augmented reality</li>
              </ul>
            </li>
            <li>
              <header>
                <a href="https://boon.land">https://boon.land</a>
              </header>
              <ul>
                <li>
                  can be used to seed{" "}
                  <a href="https://lore.land">https://lore.land</a>
                </li>
              </ul>
            </li>
            <li>
              <header>
                <a href="https://spwashi.ai">https://spwashi.ai</a>
              </header>
              <ul>
                <li>hub for language processing explorations</li>
                <li>python, prolog, rust</li>
              </ul>
            </li>
            <li>
              <header>
                <a href="https://lore.land">https://lore.land</a>
              </header>
              <ul>
                <li>hub for creative expression</li>
                <li>centralizes a 7 site ecosystem</li>
                <li>html, css, and javascript as storytelling media</li>
              </ul>
            </li>
            <li>
              <header>
                <a href="https://rskrules.com">https://rskrules.com</a>
              </header>
              <ul>
                <li>I made this site for a client!</li>
                <li>RSK is an Adventure novelist</li>
                <li>
                  Keep an eye out for The Adventures of Hemera Nyx: Book 2!
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section id="i-recorded-work" className="intentional-effort">
        <header>I practiced making videos</header>
        <br />
        <PaintSplatterVideo />
        <section className="how-this-helps">
          <p>content creation has been a great excuse to practice:</p>
          <ul>
            <li>organizing thoughts</li>
            <li>communicating experiences</li>
            <li>navigating interfaces</li>
          </ul>
        </section>
        <br />
        <br />
        <LearnMore
          learnMoreLink="https://tiktok.com/@spwashi"
          learnMoreText="Check out my TikTok!"
        />
      </section>
      <section id="i-perfected-workflow" className="intentional-effort">
        <header>I found a flow</header>
        <p>I spent a year working in 13 day cycles.</p>
        <p>Two rotations per month.</p>
        <p>Minor release on the 13th.</p>
        <p>Major release on the 26th.</p>
        <VimeoVideo
          title={"Workflow 2024 | Draft 0"}
          videoHash={"778b3afe82"}
          videoId={"938740615"}
        />
        {beVulnerable && (
          <section className="how-this-helps" style={{ display: "none" }}>
            <p>I kinda need to do this:</p>
            <ul>
              <li>
                I have{" "}
                <a href={mainOnRoute.subConfigMap.neurodivergence.href}>OCD</a>
              </li>
              <li>
                I've been{" "}
                <a href={mainOnRoute.subConfigMap.termination.href}>fired</a>{" "}
                before
              </li>
              <li>
                <a href={mainRoutes.rhythm.href}>Rhythm</a> has been helpful
              </li>
            </ul>
          </section>
        )}
      </section>
    </article>
  );
}
