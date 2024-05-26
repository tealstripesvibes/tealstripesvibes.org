import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_about.scss";
import { mainRoutes } from "@identities/routes";
import "react-multi-carousel/lib/styles.css";
import { lazy, Suspense } from "react";
import { PaintSplatterVideo } from "./_videos/PaintSplatterVideo";
import { MontageAnimationVideo } from "./_videos/MontageAnimationVideo";
import { EntropyStopMotionVideo } from "./_videos/EntropyStopMotionVideo";
import { StopMotionClayExperimentVideo } from "./_videos/StopMotionClayExperimentVideo";
import { TopicalMontageVideo } from "./_videos/TopicalMontageVideo";
import { WordleExtensionVideo } from "./_videos/WordleExtensionVideo";
import { CareerOverviewVideo } from "./_videos/CareerOverviewVideo";
import { NoseClaymationVideo } from "./_videos/NoseClaymationVideo";
import { Helmet } from "react-helmet";

const Videos = lazy(() =>
  import("@widgets/video/VideoCarousel").then((module) => ({
    default: module.VideoCarousel,
  })),
);

export { Page };

function Page() {
  return (
    <main id="page__about">
      <Helmet>
        <title>About &bull; Spwashi</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>About</h1>
        <h2>spwashi</h2>
        <h3>I build software and make art.</h3>
        <h4>Links</h4>
        <ul>
          <li>
            <a href={mainRoutes.resume.href}>Resume</a>
          </li>
          <li>
            <a href="https://github.com/spwashi/">GitHub</a>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Videos
            videos={[
              PaintSplatterVideo,
              MontageAnimationVideo,
              EntropyStopMotionVideo,
              StopMotionClayExperimentVideo,
              TopicalMontageVideo,
              WordleExtensionVideo,
              CareerOverviewVideo,
              NoseClaymationVideo,
            ]}
          />
        </Suspense>
        <h4>More Links</h4>
        <ul>
          <li>
            <a href="https://tiktok.com/@spwashi">TikTok</a>
          </li>
          <li>
            <a href="https://youtube.com/@spwashi">YouTube</a>
          </li>
          <li>
            <a href="https://linktr.ee/spwashi/">Linktree</a>
          </li>
          <li>
            <a href="https://instagram.com/spwashi">Instagram</a>
          </li>
        </ul>
        <h4>Timeline</h4>
        <ul id="timeline">
          <li data-year="2015">
            <a href="https://github.com/spwashi/factshift">2015</a>
            <div>started Factshift</div>
          </li>
          <li data-year="2017">
            <a href={mainRoutes.resume.href}>2017</a>
            <div>software industry work</div>
          </li>
          <li data-year="2023">
            <a href="https://factshift.com">2023</a>
            <div>Factshift prototype finished</div>
          </li>
          <li data-year="2024">
            <a href="https://lore.land">2024</a>
            <div>literacy project</div>
          </li>
        </ul>
        <h4>Testimonials</h4>
        <iframe
          src="https://www.tiktok.com/embed/7348853109403307306"
          width={300}
          height={530}
          allowFullScreen
          allow="encrypted-media;"
        ></iframe>
      </article>
    </main>
  );
}
