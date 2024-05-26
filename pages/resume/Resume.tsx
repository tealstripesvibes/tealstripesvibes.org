import ResumeSVG from "./resume.svg?react";
import { useCallback, useState } from "react";
import { Popup } from "@core/components/popup/UiPopup";
import { LearnMore } from "@features/learn-more/LearnMore";
import confetti from "canvas-confetti";

export function Resume() {
  const [hasSelected, setHasSelected] = useState(false);
  const selectAllText = useCallback(() => {
    confetti();
    const selection = window.getSelection();
    const range = document.createRange();
    const node = document.getElementById("spwashi-resume");
    if (!node) return;
    range.selectNodeContents(node);
    selection?.removeAllRanges();
    selection?.addRange(range);
    setHasSelected(true);
  }, []);
  return (
    <>
      <Popup
        title="Paste Text Here"
        Component={() => (
          <section>
            <p>
              There's a secret{" "}
              <a href="https://hbr.org/2016/05/improve-your-resume-by-turning-bullet-points-into-stories">
                narrative resume
              </a>{" "}
              hidden as a{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Selection">
                selection
              </a>{" "}
              in the SVG version of my resume.
            </p>
            <LearnMore
              learnMoreLink="https://www.youtube.com/watch?v=v1xZBUg-e5g"
              learnMoreText="My Resume is an SVG"
            />
            <textarea
              rows={13}
              style={{ display: "block", width: "calc(min(75vw, 90%))" }}
              placeholder="Paste text here"
            />
          </section>
        )}
      />

      <p>copy the text from my resume</p>
      <p>paste it in the popup above</p>

      <strong
        style={{
          fontSize: "2rem",
          padding: "1rem",
          color: "var(--page-accent-color--main)",
        }}
        onClick={selectAllText}
      >
        {hasSelected
          ? "copy the selected text to your clipboard"
          : "click below to select all text"}
      </strong>
      <ResumeSVG
        width={"90vw"}
        height={"calc(4 * 90vw)"}
        id="spwashi-resume"
        onClick={selectAllText}
      />
    </>
  );
}
