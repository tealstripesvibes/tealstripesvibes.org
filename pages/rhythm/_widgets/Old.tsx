import { mainRoutes } from "@identities/routes";
import hmm2 from "../_assets/website/WebP/17.hmm@2x.webp";
import weneed from "../_assets/website/WebP/17.weneed@2x.webp";
import fullScene from "../_assets/lore/WebP/WeNeed.LoreCloud.Forms@2x.webp";
import wonderForms from "../_assets/lore/WebP/WonderForms@2x.webp";
import wonderInvokes from "../_assets/lore/WebP/WonderInvokingFrameOfGroundedness@2x.webp";
import hmm from "../_assets/lore/WebP/Hmm@2x.webp";
import lorecloud from "../_assets/lore/WebP/LoreCloud.Card@2x.webp";
import boonbane from "../_assets/lore/WebP/boon-bane@2x.webp";
import boonbanebone from "../_assets/concepts/boonbanebone/WebP/boonbanebone@2x.webp";
import boonbanebonebonkhonk from "../_assets/concepts/boonbanebonebonkhonk/WebP/boonbanebonebonkhonk@2x.webp";
import home from "../_assets/website/WebP/home.webp";
import menu from "../_assets/website/WebP/menu.webp";
import scene from "../_assets/website/WebP/scene.webp";
import specialMenu from "../_assets/website/WebP/special-menu.webp";
import shop from "../_assets/website/WebP/shop.webp";
import React from "react";

function Old() {
  return (
    <>
      <a href={mainRoutes.scene.href}>
        <figure>
          <img src={hmm2} alt="Scene" />
          <figcaption>WebP &bull; Scene</figcaption>
        </figure>
      </a>
      <a href={mainRoutes.scene.href}>
        <figure>
          <img src={weneed} alt="Scene" />
          <figcaption>WebP &bull; Scene</figcaption>
        </figure>
      </a>
      <a href={mainRoutes.scene.href}>
        <figure>
          <img src={fullScene} alt="Scene" />
          <figcaption>WebP &bull; Scene</figcaption>
        </figure>
      </a>
      <a href={mainRoutes.scene.href}>
        <figure>
          <img src={wonderForms} alt="Wonder Forms" />
          <figcaption>WebP &bull; Wonder Forms</figcaption>
        </figure>
      </a>
      <a href={mainRoutes.scene.href}>
        <figure>
          <img src={wonderInvokes} alt="Hmm" />
          <figcaption>WebP &bull; Wonder Invokes New Ground</figcaption>
        </figure>
      </a>
      <a href={mainRoutes.scene.href}>
        <figure>
          <img src={hmm} alt="Hmm" />
          <figcaption>WebP &bull; Hmm</figcaption>
        </figure>
      </a>
      <a href="https://www.kickstarter.com/projects/spwashi/loreland/rewards#reward-UmV3YXJkLVVtVjNZWEprTFRrNE1qRTFPVE09">
        <figure>
          <img src={lorecloud} alt="Lore CLoud" />
          <figcaption>WebP &bull; The Lore Cloud</figcaption>
        </figure>
      </a>
      <a href="https://boonbanebone.com/">
        <figure>
          <img src={boonbane} alt="Boon & Bane" />
          <figcaption>WebP &bull; Boon & Bane</figcaption>
        </figure>
      </a>
      <a href="https://boonbanebone.com/">
        <figure>
          <img src={boonbanebone} alt="BoonBaneBone" />
          <figcaption>WebP &bull; Boonbanebone</figcaption>
        </figure>
      </a>
      <a href="https://lore.land">
        <figure>
          <img src={boonbanebonebonkhonk} alt="Boon Bane Bone Bonk Honk" />
          <figcaption>WebP &bull; Boon Bane Bone Bonk Honk</figcaption>
        </figure>
      </a>
      <section>
        {[
          [home, "Home"],
          [menu, "Menu"],
          [scene, "Scene"],
          [specialMenu, "Special Menu"],
          [shop, "Shop"],
        ].map(([src], i) => {
          return (
            <figure key={i}>
              <img src={src} alt="Website" />
              <figcaption>WebP &bull; Website</figcaption>
            </figure>
          );
        })}
      </section>
    </>
  );
}
