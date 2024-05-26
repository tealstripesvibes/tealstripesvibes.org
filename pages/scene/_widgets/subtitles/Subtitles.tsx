import { useEffect, useState } from "react";
import "./styles/_subtitles.scss";
import md5 from "md5";
import { useSubtitleContext } from "./hooks/useSubtitleContext";
import { useDisposition } from "@features/Disposition";

function getFactshiftLink(phraseHistory: string) {
  return phraseHistory
    ? `https://factshift.com/identity/${md5(phraseHistory)}/?story=${phraseHistory}`
    : "";
}

function usePhraseHistory() {
  const [phraseHistory, setPhraseHistory] = useState("");
  return {
    link: {
      href: getFactshiftLink(phraseHistory),
      title: phraseHistory,
    },
    setPhraseHistory,
  };
}

async function train(disposition: string, phrase: string) {
  try {
    let response = await fetch(
      "https://spwashi.ai/verb/say/" +
        disposition +
        "/" +
        encodeURIComponent(phrase),
    );
    if (response.ok) {
      console.log("trained", phrase);
    } else {
      console.log("failed to train", phrase);
    }
    return response.text();
  } catch (error) {
    console.error("failed to train", phrase, error);
    return "";
  }
}

export function Subtitles({ onWord }: { onWord: (word: string) => void }) {
  const { stop, play, activePhrase, started } = useSubtitleContext();
  const { link: externalLink, setPhraseHistory } = usePhraseHistory();
  const [trainingResponse, setTrainingResponse] = useState("");
  const [disposition] = useDisposition();
  function activatePhrase() {
    activePhrase && setPhraseHistory(activePhrase);
    activePhrase && onWord(activePhrase);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " ") {
        if ((e.target as HTMLElement).nodeName === "BUTTON") return;
        activatePhrase();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhrase]);

  return (
    <section id="subtitles">
      {!started ? (
        <button className="playpause" onClick={play}>
          start
        </button>
      ) : (
        <button className="playpause" onClick={stop}>
          stop
        </button>
      )}
      <section>
        <header>
          <a href="https://www.youtube.com/watch?v=6Fi2C_07m2g">spwashi.ai</a>
        </header>
        <p>
          <em>
            clicking the button below trains{" "}
            <a href="https://spwashi.ai/">spwashi.ai</a>
          </em>
        </p>
        <blockquote className="training-button">
          <button
            onClick={() =>
              activePhrase &&
              train(disposition, activePhrase).then(setTrainingResponse)
            }
          >
            {"{"}
            {activePhrase}
            {"}"}
          </button>
        </blockquote>{" "}
        <pre>{trainingResponse}</pre>
      </section>
      <section>
        <header>factshift.com</header>
        <p>
          <em>clicking the button below opens a portal</em>
        </p>
        <p>
          <em>use the dropdown at the top of this page to change the scene</em>
        </p>
        <blockquote onClick={() => activatePhrase()} className="active-phrase">
          <button>[{(activePhrase || "").split(",").join(" ")}]</button>
        </blockquote>
        <blockquote>
          <a href={externalLink.href}>{externalLink.title}</a>
        </blockquote>
      </section>
    </section>
  );
}
