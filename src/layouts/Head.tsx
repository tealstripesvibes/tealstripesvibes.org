import React from "react";
import logoUrl from "@core/dispositions/assets/logo/lore/lore-logo.svg";
export default HeadDefault;

export const siteDomain = import.meta.env.VITE_SITE_DOMAIN || "spwashi.com";

function HeadDefault() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <link rel="manifest" href={`/sites/${siteDomain}/v0.0.1/manifest.json`} />
      <link rel="icon" href={`/sites/${siteDomain}/v0.0.1/logo/logo.webp`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#11abab" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://${siteDomain}`} />
      <meta
        property="og:image"
        content={`/sites/${siteDomain}/v0.0.1/og/og-image-tealstripesvibes.png`}
      />
      <meta property="og:title" content={`${siteDomain}`} />
      <meta property="og:description" content={`welcome to ${siteDomain}`} />
      <meta name="description" content={`welcome to ${siteDomain}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={logoUrl} />
    </>
  );
}
