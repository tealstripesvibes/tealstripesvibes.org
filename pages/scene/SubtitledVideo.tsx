import React, { useState } from "react";
import { Subtitles } from "./_widgets/subtitles/Subtitles";
import { Portal } from "@widgets/portal/Portal";
import { IDispositionName } from "@core/dispositions/types";
import { useData } from "vike-react/useData";
import {
  ISubtitlesData,
  SubtitleTime,
} from "./_widgets/subtitles/context/SubtitleTimerContext";
import { useSubtitleContext } from "./_widgets/subtitles/hooks/useSubtitleContext";
import { VimeoVideo } from "@widgets/video/vimeo/VimeoVideo";

interface RenderedScene {
  videoFileId: string;
  videoAnchorId: string;
  setActiveWord: (value: ((prevState: string) => string) | string) => void;
  videoTitle: string;
}
function RenderedScene({
  videoFileId,
  videoAnchorId,
  setActiveWord,
  videoTitle,
}: RenderedScene) {
  const subtitleContext = useSubtitleContext();
  return (
    <section>
      <figure style={{ marginBottom: "3rem" }}>
        <VimeoVideo
          doAutoplay={false}
          videoId={videoFileId}
          videoHash={videoAnchorId}
          onPlay={() => subtitleContext.play()}
        />
        <figcaption>{videoTitle}</figcaption>
      </figure>
      <Subtitles onWord={setActiveWord} />
    </section>
  );
}
export function SubtitledVideo({
  videoTitle,
  videoFileId,
  videoAnchorId,
  disposition,
}: {
  videoTitle: string;
  videoFileId: string;
  videoAnchorId: string;
  disposition: IDispositionName;
}) {
  const [activeWord, setActiveWord] = useState("");
  const data = useData<ISubtitlesData>();

  return (
    <SubtitleTime data={data}>
      <article>
        <h2>{videoTitle}</h2>
        <RenderedScene
          videoFileId={videoFileId}
          videoAnchorId={videoAnchorId}
          setActiveWord={setActiveWord}
          videoTitle={videoTitle}
        />
        <section>
          <Portal
            disposition={disposition}
            title={activeWord.replaceAll("\n", " ")}
          />
        </section>
      </article>
    </SubtitleTime>
  );
}
