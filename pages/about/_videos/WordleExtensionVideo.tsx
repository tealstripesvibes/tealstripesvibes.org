import React, { useEffect, useRef, useState } from "react";
import Vimeo from "@vimeo/player";
import classNames from "classnames";
export function WordleExtensionVideo() {
  const [loading, setLoading] = useState(true);
  const id = "vimeo-player-938406981";
  useEffect(() => {
    const player = new Vimeo(id);

    player.on("play", function () {
      console.log("play");
      setLoading(false);
    });
  }, []);
  return (
    <figure>
      {loading && <div>Loading...</div>}
      <iframe
        id={id}
        className={classNames({ loading })}
        src="https://player.vimeo.com/video/938406981?h=39f7adb355&badge=0&autopause=0&autoplay=1&loop=1&background=1&muted=1&player_id=0&app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="Wordle Extension"
      ></iframe>
      <figcaption>Stop-motion | Wordle Extension</figcaption>
    </figure>
  );
}
