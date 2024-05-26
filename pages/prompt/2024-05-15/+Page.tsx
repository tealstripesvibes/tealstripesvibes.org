import { Helmet } from "react-helmet";
import "../_styles/_page.scss";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { TextToImg } from "../../play/ai/TextToImg";

export { Page };

function Page() {
  return (
    <main>
      <Helmet>
        <title>Prompt</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1></h1>
        <TextToImg
          prompt={
            "A confident person speaking into a microphone on a brightly lit stage. The background features a cheering audience with a mix of colorful lights. The person has a professional appearance, wearing a stylish outfit, and appears to be engaged and expressive."
          }
          negativePrompt={
            "blurry, out of focus, dark, low resolution, pixelated, exaggerated features, unrealistic proportions, background noise, cluttered background, overly bright colors, poor lighting, unnatural expressions."
          }
        />
      </article>
    </main>
  );
}
