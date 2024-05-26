import { useEffect, useRef, useState } from "react";
import Vimeo from "@vimeo/player";
import classNames from "classnames";
export function SpwashiPortfolioOverview2023() {
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLIFrameElement>(null);
  const current = ref.current;
  useEffect(() => {
    if (!current) return;
    const player = new Vimeo(current);

    player.on("play", function () {
      console.log("play");
      setLoading(false);
    });
  }, [current]);
  return (
    <figure id="portfolio-overview">
      <iframe
        ref={ref}
        className={classNames({ loading })}
        src="https://player.vimeo.com/video/938295352?h=b0547094d3&badge=0&player_id=0&app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="Nov 25 | 2023 | Portfolio Walkthrough"
      ></iframe>
    </figure>
  );
}
