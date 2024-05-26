import { IDispositionName } from "@core/dispositions/types";

import { Button as BoonButton } from "@core/dispositions/boon/Button";
import { Button as BaneButton } from "@core/dispositions/bane/Button";
import { Button as BoneButton } from "@core/dispositions/bone/Button";
import { Button as BonkButton } from "@core/dispositions/bonk/Button";
import { Button as HonkButton } from "@core/dispositions/honk/Button";
import { Button as BoofButton } from "@core/dispositions/boof/Button";
import { Button as LoreButton } from "@core/dispositions/lore/Button";

interface MultiDimensionalButtonParams {
  site: IDispositionName;
  onClick: () => void;
}
export function MultiDimensionalButton({
  site,
  onClick,
}: MultiDimensionalButtonParams) {
  switch (site) {
    case "boon":
      return <BoonButton onClick={onClick} />;
    case "bane":
      return <BaneButton onClick={onClick} />;
    case "bone":
      return <BoneButton onClick={onClick} />;
    case "bonk":
      return <BonkButton onClick={onClick} />;
    case "honk":
      return <HonkButton onClick={onClick} />;
    case "lore":
      return <LoreButton onClick={onClick} />;
    case "boof":
      return <BoofButton onClick={onClick} />;
  }
}
