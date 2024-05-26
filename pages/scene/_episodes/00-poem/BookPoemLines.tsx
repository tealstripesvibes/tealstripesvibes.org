import one from "./images/WebP/scene-1@2x.webp";
import two from "./images/WebP/scene-2@2x.webp";
import three from "./images/WebP/scene-3@2x.webp";
import four from "./images/WebP/scene-4@2x.webp";
import five from "./images/WebP/scene-5@2x.webp";
const lines: [string, string][] = [
  [
    one,
    `Book; I hold you; You come with me; Location; The Location Inn; Our relationship is shared; With the postcard I use; Book`,
  ],
  [two, `you are like (The Respectful Older Sibling 2: A Website)`],
  [
    three,
    `{maybe I just} (like) the <kind> of <websites> that <keep> it <fast>.`,
  ],
  [four, `I am a (web developer); I am supposed to (fix the internet)`],
  [five, `what is wrong with my website ?`],
];
export function BookPoemLines() {
  return (
    <>
      {lines.map(([src, desc]) => {
        return <img key={desc} src={src} alt={desc} />;
      })}
    </>
  );
}
