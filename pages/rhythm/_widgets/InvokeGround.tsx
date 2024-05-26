import weneed from "../_assets/website/WebP/17.weneed@2x.webp";
import invoke from "../_assets/website/WebP/17.invoke@2x.webp";
import hmm2 from "../_assets/website/WebP/17.hmm@2x.webp";
import wind from "../_assets/website/WebP/17.wind.webp";
import { mainRoutes } from "@identities/routes";
import React, { useEffect, useState } from "react";

export function InvokeGround({ count = 10 }) {
  const multiplier = 0.5;
  const urls = [
    [weneed, { width: 271, height: 110 }],
    [hmm2, { width: 230, height: 160 }],
    [invoke, { width: 271, height: 160 }],
  ] as [string, { width: number; height: number }][];
  const core = {
    display: "block",
  };
  const windWidth = urls.reduce((total, [, { width }]) => width + total, 0);
  const windHeight = 186;
  const [tick, setTick] = useState(0);
  const eleme = tick % 13;
  const windMultiplier =
    0.45 * (1 + 0.01 * eleme * Math.sin((eleme * Math.PI) / 2));
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <a href={mainRoutes.scene.href}>
      <figure
        id="wonder-invoke-ground__3"
        style={{
          position: "relative",
          borderBottom: `thick solid hsl(${tick % 360}, 30%, 50%)`,
        }}
      >
        <div
          id="wind"
          style={{
            ...core,
            width: `${windWidth * windMultiplier}px`,
            height: `${windHeight * windMultiplier}px`,
            backgroundImage: `url(${wind})`,
            backgroundSize: "cover",
            filter: "contrast(" + 100 + "%)",
            position: "absolute",
            top: 0,
          }}
        ></div>
        {Array(count)
          .fill(null)
          .map((_, i) => i)
          .map((i) => (
            <section key={i} style={{ display: "flex" }}>
              {urls.map(([url, { width, height }], j) => (
                <div
                  key={j}
                  style={{
                    ...core,
                    width: `${width * multiplier}px`,
                    height: `${height * multiplier}px`,
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                    filter: "contrast(" + (100 - i) + "%)",
                  }}
                ></div>
              ))}
            </section>
          ))}
        <figcaption>WebP &bull; Scene</figcaption>
      </figure>
    </a>
  );
}
