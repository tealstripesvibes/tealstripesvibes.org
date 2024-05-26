import React, { useEffect, useRef, useState } from "react";
import Vimeo from "@vimeo/player";
import classNames from "classnames";
export function NoseClaymationVideo() {
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
    <figure>
      {loading && <div>Loading...</div>}
      <iframe
        ref={ref}
        className={classNames({ loading })}
        src="https://player.vimeo.com/video/938411172?h=1766f68593&badge=0&autopause=0&autoplay=1&loop=1&background=1&muted=1&player_id=0&app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="Claymation | Nose"
      ></iframe>
      <figcaption>Claymation | Nose</figcaption>
    </figure>
  );
}
