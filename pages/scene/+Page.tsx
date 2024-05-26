import { PoemContent } from "./_episodes/00-poem/PoemContent";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import React from "react";
import "./_styles/_page.scss";
import { useDisposition } from "@features/Disposition";
import { SubtitledVideo } from "./SubtitledVideo";
import { Helmet } from "react-helmet";
export { Page };

function Page() {
  const [disposition] = useDisposition();

  return (
    <main id="page__scene">
      <Helmet>
        <title>Scene &bull; Spwashi</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Scene</h1>
        <SubtitledVideo
          videoTitle={"Specialist Overview"}
          videoFileId={"944684644"}
          videoAnchorId={"95a3903b32"}
          disposition={disposition}
        />
      </article>
    </main>
  );
}
