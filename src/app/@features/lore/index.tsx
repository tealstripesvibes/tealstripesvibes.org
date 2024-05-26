import React, { useEffect, useState } from "react";
import "./_lore.scss";
import md5 from "md5";
import lore from "./lore.land.events.json";
import { Link } from "react-router-dom";

const images = {
  "3bfde546267a7dd6b2255959a3d27d37": "3bfde546267a7dd6b2255959a3d27d37.webp",
  "258d7d5ad8b2fde5d5672ced42eaf418": "258d7d5ad8b2fde5d5672ced42eaf418.webp",
  "17e423cc376dc9cd18ab6156064c5024": "17e423cc376dc9cd18ab6156064c5024.webp",
  "005187365ed36cb2e77dc7b4c007c537": "005187365ed36cb2e77dc7b4c007c537.webp",
  "9934f44615c7045e6c140aa2e5e8917d": "9934f44615c7045e6c140aa2e5e8917d.webp",
  cdfb421c162faa61c5939bfb2fe14524: "cdfb421c162faa61c5939bfb2fe14524.webp",
  "69f8814e5d12fcd4f023a902e0480cac": "69f8814e5d12fcd4f023a902e0480cac.webp",
  "1a3cac5ebdc959abf69d767772b88d38": "1a3cac5ebdc959abf69d767772b88d38.webp",
  "0aee72649f98176b12e3bc356fcd90b7": "0aee72649f98176b12e3bc356fcd90b7.webp",
  "19ff655939a112a0825171b7028998d3": "19ff655939a112a0825171b7028998d3.webp",
  "795ab908257b6d4c28ac6003a7f328ad": "795ab908257b6d4c28ac6003a7f328ad.webp",
  "7ca62b02e6172bf1aae319506d7c4423": "7ca62b02e6172bf1aae319506d7c4423.webp",
  "066e693634128b278b1a57f29a8714d9": "066e693634128b278b1a57f29a8714d9.webp",
  "054c018f9aecb2b8d605345e91ece63c": "054c018f9aecb2b8d605345e91ece63c.webp",
  "46abd8e3bfe9826821dbfb5972dec41f": "46abd8e3bfe9826821dbfb5972dec41f.webp",
  "820b637b835eeb2deba4fa51eb8ef0b8": "820b637b835eeb2deba4fa51eb8ef0b8.webp",
  "276cb7bc26a48f72c0e39a19846edae9": "276cb7bc26a48f72c0e39a19846edae9.webp",
  "5b05d4d070f803fe029089ff78f36745": "5b05d4d070f803fe029089ff78f36745.webp",
  "1d0e0bb656c02cd515c0c4d06075a394": "1d0e0bb656c02cd515c0c4d06075a394.webp",
} as any;

export function Lore() {
  const timeInterval = 15;
  const currTimeInterval = Math.floor(
    (new Date().getHours() * 60 + new Date().getMinutes()) / timeInterval,
  );
  return (
    <article id="lore">
      <ul>
        {lore.map((episode, i) => {
          if (i !== currTimeInterval) return null;
          const url = `//${episode.domain}/identity/${md5(episode.event)}`;
          const imageSrc = images[md5(episode.event)];
          const [prefix, setPrefix] = useState("/@/WebP/300px/");
          useEffect(() => {
            setTimeout(() => {
              setPrefix("/@/WebP/2048px/");
            }, 500);
          }, []);
          return (
            <li key={episode.time}>
              <h2>{episode.time}</h2>
              {imageSrc && (
                <img height={300} width={300} src={prefix + imageSrc} />
              )}
              <Link
                target="_blank"
                to={url.replace("guest.storyline", "factshift.com")}
              >
                {episode.event}
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
