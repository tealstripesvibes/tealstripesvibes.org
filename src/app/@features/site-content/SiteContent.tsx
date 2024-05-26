type SiteName =
  | "tealstripesvibes.org"
  | "tealstripesvibes.com"
  | "fionadivine.com"
  | "artbymagpie.com"
  | "rskrules.com"
  | "kristynacole.com"
  | "newaura.club"
  | "spwashi.com";

export function SiteContent({
  siteName,
  children,
}: {
  siteName: SiteName;
  children: React.ReactNode;
}) {
  switch (siteName) {
    case import.meta.env.VITE_SITE_DOMAIN:
      return children;
  }
}
