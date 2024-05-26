import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { FormWidget } from "@widgets/form/FormWidget";
import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { formId__fantasyTitleGenerator } from "@identities/forms/ids";
import { ChangeEventHandler, FocusEventHandler, useState } from "react";
import "./styles/_title-generator.scss";
import confetti from "canvas-confetti";
import { Helmet } from "react-helmet";
import md5 from "md5";
import { IFormItemConfig } from "@widgets/form/features/fields/types/fieldConfig";

export { Page };

let onFocus: FocusEventHandler<HTMLInputElement> = (e) => {
  let input = e.target as HTMLInputElement | null;
  if (!input) return;
  input.setSelectionRange(0, input.value.length);
};
let onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  let input = e.target as HTMLInputElement | null;
  if (!input) return;
  input.value = input.value.toUpperCase();
};
const formConfig: IFormConfig = {
  formId: formId__fantasyTitleGenerator,
  title: "Fantasy Title Generator",
  items: (
    [
      {
        type: "text",
        title: "First Initial",
        name: "firstInitial",
        maxLength: 1,
        onFocus: onFocus,
      },
      {
        type: "text",
        title: "Middle Initial",
        name: "middleInitial",
        maxLength: 1,
        onFocus: onFocus,
      },
      {
        type: "text",
        title: "Last Initial",
        name: "lastInitial",
        maxLength: 1,
        onFocus: onFocus,
      },
    ] as IFormItemConfig[]
  ).map((config) => {
    return {
      ...config,
      onFocus,
    } as IFormItemConfig;
  }),
};

const options = {
  first: [
    ["A", "Queen"],
    ["B", "War"],
    ["C", "Girl"],
    ["D", "Kingdom"],
    ["E", "Palace"],
    ["F", "Garden"],
    ["G", "King"],
    ["F", "Court"],
    ["I", "Fairy"],
    ["J", "Goddess"],
    ["K", "City"],
    ["L", "Fortress"],
    ["M", "Song"],
    ["N", "Angel"],
    ["O", "Crown"],
    ["P", "Heir"],
    ["Q", "Throne"],
    ["R", "Dagger"],
    ["S", "Curse"],
    ["T", "Battle"],
    ["U", "Prince"],
    ["V", "Fire"],
    ["W", "Wrath"],
    ["X", "Children"],
    ["Y", "Princess"],
    ["Z", "Forest"],
  ],
  middle: [
    ["A", "Roses"],
    ["B", "Storms"],
    ["C", "Magic"],
    ["D", "Ravens"],
    ["E", "Darkness"],
    ["F", "Rain"],
    ["G", "Bone"],
    ["F", "Sword"],
    ["I", "Oceans"],
    ["J", "Wings"],
    ["K", "Moons"],
    ["L", "Dimensions"],
    ["M", "Smoke"],
    ["N", "Death"],
    ["O", "Sorcery"],
    ["P", "Dawn"],
    ["Q", "Jewels"],
    ["R", "Gold"],
    ["S", "Night"],
    ["T", "Stone"],
    ["U", "Depths"],
    ["V", "Time"],
    ["W", "Light"],
    ["X", "Thorns"],
    ["Y", "Bone"],
    ["Z", "Gods"],
  ],
  last: [
    ["A", "Stars"],
    ["B", "Truth"],
    ["C", "Snakes"],
    ["D", "Thistle"],
    ["E", "Flame"],
    ["F", "Glass"],
    ["G", "Air"],
    ["F", "Mercy"],
    ["I", "Sapphires"],
    ["J", "Ash"],
    ["K", "Shadow"],
    ["L", "Vengeance"],
    ["M", "Strife"],
    ["N", "Embers"],
    ["O", "Rage"],
    ["P", "Fury"],
    ["Q", "Reverie"],
    ["R", "Sun"],
    ["S", "Dread"],
    ["T", "Scorn"],
    ["U", "Infinity"],
    ["V", "Fear"],
    ["W", "Sorrow"],
    ["X", "Fortune"],
    ["Y", "Ether"],
    ["Z", "Lightning"],
  ],
};

function generateTitle([first, middle, last]: [string, string, string]) {
  const firstWord = options.first.find(([letter]) => letter[0] === first)?.[1];
  const middleWord = options.middle.find(
    ([letter]) => letter[0] === middle,
  )?.[1];
  const lastWord = options.last.find(([letter]) => letter[0] === last)?.[1];
  return `The ${firstWord} of the ${middleWord} and ${lastWord}`;
}

let defaultValue = {
  firstInitial: "A",
  middleInitial: "B",
  lastInitial: "C",
};
function Page() {
  const [form, setForm] = useState<[string, string, string]>(["A", "B", "C"]);
  const generatedTitle = generateTitle(form);
  return (
    <main id="page__fantasyTitleGenerator">
      <MainHeader />
      <Helmet>
        <title>Fantasy Title Generator</title>
        <meta
          name="description"
          content="Enter your initials to generate a fantasy title!"
        />
        <meta property="og:title" content="Fantasy Title Generator" />
        <meta
          property="og:description"
          content="Enter your initials to generate a fantasy title!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/images/fantasy-title-generator-og.png"
        />
        <meta
          name="keywords"
          content="fantasy, title, generator, initials, roleplay, rpg"
        />
      </Helmet>
      <article>
        <h1>Fantasy Title Generator</h1>
        <p>Enter your initials to generate a fantasy title!</p>
        <FormWidget
          defaultValue={defaultValue}
          config={formConfig}
          onSubmit={({ currentValue }) => {
            const firstInitial = currentValue.firstInitial;
            const middleInitial = currentValue.middleInitial;
            const lastInitial = currentValue.lastInitial;
            setForm(
              [firstInitial, middleInitial, lastInitial].map((s) =>
                `${s}`.toUpperCase(),
              ) as [string, string, string],
            );
            confetti();
          }}
        />
        <p>Your Title:</p>
        <output>
          <strong>{generatedTitle}</strong>
        </output>
        <br />
        <output>{md5(generatedTitle)}</output>
      </article>
    </main>
  );
}
