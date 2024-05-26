import { useLayoutEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash/debounce";

function useDebounce(callback: any, delay: number) {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });
  return useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay],
  );
}

export function ResizableImage() {
  const resizeRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const setWidthDebounced = useDebounce(setWidth, 100);
  const setHeightDebounced = useDebounce(setHeight, 100);

  return (
    <figure className="resize-container">
      <p style={{ fontSize: "1.5rem", color: "var(--color-accent-main)" }}>
        {width}
      </p>
      <input
        type="range"
        value={width}
        min={100}
        max={2000}
        onChange={(e) => setWidthDebounced(+e.target.value)}
      />
      <p style={{ fontSize: "1.5rem", color: "var(--color-accent-main)" }}>
        {height}
      </p>
      <input
        type="range"
        value={height}
        min={100}
        max={2000}
        onChange={(e) => setHeightDebounced(+e.target.value)}
      />
      <div className="resizable" ref={resizeRef} style={{ userSelect: "none" }}>
        <img
          src={`https://backend.lore.land/image/${width}/${height}`}
          alt="Image"
        />
      </div>
      <figcaption>resizable image</figcaption>
    </figure>
  );
}
