import { useState } from "react";

const key = "hSqWSKB6yKLoTsGHCQFtyQne2JIhhhcG0dKb15VqLcL5hdNKPjF1zOsQjDuq";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function textToImage(positivePrompt: string, negativePrompt?: string) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    key: key,
    prompt: positivePrompt,
    negative_prompt: negativePrompt,
    width: "400",
    height: "400",
    safety_checker: false,
    samples: 1,
    base64: false,
    webhook: null,
    track_id: null,
  });

  try {
    let response = await fetch(
      "https://modelslab.com/api/v6/realtime/text2img",
      {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      },
    );
    let result: any = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    return console.log("error", error);
  }
}

interface MapOutputParams {
  output: string;
  prompt: string;
}
function MapOutput({ output, prompt }: MapOutputParams) {
  return <img width={400} height={400} src={output} alt={prompt} />;
}
function OutputList({ images, prompt }: { images: any; prompt: string }) {
  return images?.map((output: string) => (
    <MapOutput key={output} output={output} prompt={prompt} />
  ));
}
function TextToImgResponse({
  response,
  prompt,
}: {
  response:
    | {
        status: "error";
        error_id: "66456606847ed";
        response: { message: string };
      }
    | {
        status: "success";
        output: string[];
        proxy_links: string[];
      }
    | {
        status: "processing";
        eta: number;
        output: string[];
        future_links: string[];
        fetch_result: string;
      };
  prompt: string;
}) {
  if (!response) return null;
  if (response.status === "error") {
    return <pre>{response.response.message}</pre>;
  }

  const proxyLinks = response.status === "success" ? response.proxy_links : [];
  const proxies = <OutputList images={proxyLinks} prompt={prompt} />;

  const output = response?.output;
  const immediateReturn = <OutputList images={output} prompt={prompt} />;

  const future_links =
    response.status === "processing" ? response?.future_links : [];
  const futureLinks = <OutputList images={future_links} prompt={prompt} />;

  return (
    <>
      <>
        <h4>output</h4>
        {immediateReturn}
        {proxies}
        {futureLinks}
      </>
      {response && <pre>{JSON.stringify(response, null, 3)}</pre>}
    </>
  );
}

function dispatch(
  prompt: string,
  negativePrompt: string,
  setResponse: (value: any) => void,
) {
  textToImage(prompt, negativePrompt).then(async (response) => {
    if (response.eta) {
      await sleep((response.eta || 100) * 1000);
      return setResponse(response);
    }
    if (!!response.tip) {
      console.log("WAITING FIVE SECONDS");
      await sleep(10 * 1000);
      console.log("DONE WAITING");
      return dispatch(prompt, negativePrompt, setResponse);
    }
    return setResponse(response);
  });
}

export function TextToImg({
  prompt: originalPrompt = "silhouette of a person standing on a hill",
  negativePrompt:
    originalNegativePrompt = "silhouette of a person standing on a hill",
}: {
  prompt?: string;
  negativePrompt?: string;
}) {
  const [response, setResponse] = useState<any>();
  const [prompt, setPositivePrompt] = useState<string>(originalPrompt);
  const [negativePrompt, setNegativePrompt] = useState<string>(
    originalNegativePrompt,
  );

  const disabled = response === null;
  return (
    <>
      {disabled && <>loading...</>}
      {response !== null && (
        <button
          onClick={() => {
            setResponse(null);
            dispatch(prompt, negativePrompt, setResponse);
          }}
        >
          send request
        </button>
      )}
      <section style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <h4>Positive Prompt</h4>
          <textarea
            disabled={disabled}
            value={prompt}
            rows={prompt.split("\n").length + 2}
            onChange={(e) => setPositivePrompt(e.target.value)}
          />
        </div>
        <div>
          <h4>Negative Prompt</h4>
          <textarea
            disabled={disabled}
            value={negativePrompt}
            rows={negativePrompt.split("\n").length + 2}
            onChange={(e) => setNegativePrompt(e.target.value)}
          />
        </div>
      </section>
      <TextToImgResponse response={response} prompt={prompt} />
    </>
  );
}
