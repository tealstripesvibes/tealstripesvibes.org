import { trackEvent } from "@features/analytics/initAnalytics";
import "./styles/_learn-more.scss";
import { mainRoutes } from "@identities/routes";

export function LearnMore({
  learnMoreLink = mainRoutes.about.href,
  learnMoreText = "Learn More",
  button = false,
}) {
  return (
    <section id="learn-more">
      {button && (
        <button
          onClick={() =>
            trackEvent("click", { props: { subject: "learn-more" } })
          }
        >
          {learnMoreText}
        </button>
      )}
      <a href={learnMoreLink}>{learnMoreText}</a>
    </section>
  );
}
