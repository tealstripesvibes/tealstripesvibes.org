import Plausible from "plausible-tracker";
import { useEffect } from "react";
import { EventOptions } from "plausible-tracker/src/lib/request";
import { PlausibleOptions } from "plausible-tracker/src/lib/tracker";

let localTracker = (...params: any) => {};
export const trackEvent = (
  eventName: string,
  options?: EventOptions,
  eventData?: PlausibleOptions,
) => {
  localTracker(eventName, options, eventData);
};
export function initAnalytics() {
  const { trackEvent, enableAutoPageviews, enableAutoOutboundTracking } =
    Plausible({});

  localTracker = trackEvent;
  let cleanup1 = enableAutoPageviews();
  let cleanup2 = enableAutoOutboundTracking();
  return () => {
    cleanup1();
    cleanup2();
  };
}
function Analytics() {
  useEffect(() => initAnalytics(), []);
  return null;
}
export { Analytics };
