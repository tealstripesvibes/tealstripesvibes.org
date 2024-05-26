import { IDispositionName } from "@core/dispositions/types";
import BoonSvg from "@core/dispositions/assets/logo/boon/boon-logo.svg?react";
import BaneSvg from "@core/dispositions/assets/logo/bane/bane-logo.svg?react";
import BoneSvg from "@core/dispositions/assets/logo/bone/bone-logo.svg?react";
import BonkSvg from "@core/dispositions/assets/logo/bonk/bonk-logo.svg?react";
import HonkSvg from "@core/dispositions/assets/logo/honk/honk-logo.svg?react";
import BoofSvg from "@core/dispositions/assets/logo/boof/boof-logo.svg?react";
import LoreSvg from "@core/dispositions/assets/logo/lore/lore-logo.svg?react";

interface SiteLogoSvgParams {
  siteName: IDispositionName;
}

export function SiteLogoSvg({ siteName }: SiteLogoSvgParams) {
  switch (siteName || import.meta.env.VITE_SITE_NAME) {
    case "boof":
      return <BoofSvg />;
    case "lore":
      return <LoreSvg />;
    case "honk":
      return <HonkSvg />;
    case "bonk":
      return <BonkSvg />;
    case "bone":
      return <BoneSvg />;
    case "bane":
      return <BaneSvg />;
    default:
    case "boon":
      return <BoonSvg />;
  }
}
