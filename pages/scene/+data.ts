import { Cue, parseSync } from "subtitle";
import { subtitles } from "./_widgets/subtitles/_data/subtitles";

const timeMap = new Map<number, [string, string]>();

export async function data() {
  parseSync(subtitles)
    .filter(({ type }) => type === "cue")
    .map(({ data }) => {
      const { start, end, text } = data as Cue;
      timeMap.set(start, ["add", text]);
      timeMap.set(end, ["remove", text]);
      return {
        start,
        end,
        text,
      };
    });

  return {
    timeMap: [...timeMap.entries()],
  };
}
