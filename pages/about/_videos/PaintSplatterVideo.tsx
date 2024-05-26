import React, { useEffect, useRef, useState } from "react";
import Vimeo from "@vimeo/player";
import classNames from "classnames";
export function PaintSplatterVideo() {
  const [loading, setLoading] = useState(true);
  const id = "experimental-painting-sequence";
  useEffect(() => {
    const player = new Vimeo(id);

    player.on("play", function () {
      console.log("play");
      setLoading(false);
    });
  }, []);
  return (
    <figure className="ui--video__stage">
      {loading && <div>Loading...</div>}
      <iframe
        id={id}
        className={classNames({ loading })}
        src="https://player.vimeo.com/video/919315856?badge=0&autopause=0&autoplay=1&loop=1&background=1&muted=1&player_id=0&app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="Experimental Painting Sequence"
      ></iframe>
      <figcaption>Experimental Painting Sequence</figcaption>
    </figure>
  );
}
