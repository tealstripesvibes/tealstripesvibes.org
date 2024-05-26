// @ts-nocheck

declare global {
  interface Window {
    SnipcartSettings: any;
    LoadSnipcart: any;
    Snipcart: any;
  }
}
const API_KEYS = {
  test: "YjdkMTUyMDEtZWJiZC00ZDMwLTg5MzQtNTEzNGMzN2Q3ZTZhNjM4NDA3ODYyMzg2MzAyOTIz",
  prod: "NjgxODY2NWItYzcyNi00YjNhLTlmMmEtODFiNWM4MzQ3YzkzNjM4NDA3ODYyMzg2MzAyOTIz",
};

let publicApiKey = API_KEYS.prod;
export function initShoppingExperience() {
  window.SnipcartSettings = window.SnipcartSettings || {};
  window.SnipcartSettings = {
    publicApiKey: publicApiKey,
    modalStyle: "side",
    loadCSS: false,
    addProductBehavior: "none",
    version: "3.7.1",
  };
  initSnipcart();

  function initSnipcart() {
    var c, d;
    (d = (c = window.SnipcartSettings).version) != null || (c.version = "3.0");
    var s, S;
    (S = (s = window.SnipcartSettings).timeoutDuration) != null ||
      (s.timeoutDuration = 2750);
    var l, p;
    (p = (l = window.SnipcartSettings).domain) != null ||
      (l.domain = "cdn.snipcart.com");
    var w, u;
    (u = (w = window.SnipcartSettings).protocol) != null ||
      (w.protocol = "https");
    var f =
        window.SnipcartSettings.version.includes("v3.0.0-ci") ||
        (window.SnipcartSettings.version != "3.0" &&
          window.SnipcartSettings.version.localeCompare("3.4.0", void 0, {
            numeric: !0,
            sensitivity: "base",
          }) === -1),
      m = ["focus", "mouseover", "touchmove", "scroll", "keydown"];
    window.LoadSnipcart = o;
    document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", r)
      : r();
    function r() {
      window.SnipcartSettings.loadStrategy
        ? window.SnipcartSettings.loadStrategy === "on-user-interaction" &&
          (m.forEach((t) => document.addEventListener(t, o)),
          setTimeout(o, window.SnipcartSettings.timeoutDuration))
        : o();
    }
    var a = !1;
    function o() {
      if (a) return;
      a = !0;
      let t = document.getElementsByTagName("head")[0],
        e = document.querySelector("#snipcart"),
        i = document.querySelector(
          `src[src^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][src$="snipcart.js"]`,
        ),
        n = document.querySelector(
          `link[href^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][href$="snipcart.css"]`,
        );
      e ||
        ((e = document.createElement("div")),
        (e.id = "snipcart"),
        e.setAttribute("hidden", "true"),
        document.body.appendChild(e)),
        v(e),
        i ||
          ((i = document.createElement("script")),
          (i.src = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.js`),
          (i.async = !0),
          t.appendChild(i)),
        n ||
          ((n = document.createElement("link")),
          (n.rel = "stylesheet"),
          (n.type = "text/css"),
          (n.href = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.css`),
          t.prepend(n)),
        m.forEach((g) => document.removeEventListener(g, o));
    }
    // @ts-ignore
    function v(t) {
      !f ||
        ((t.dataset.apiKey = window.SnipcartSettings.publicApiKey),
        window.SnipcartSettings.addProductBehavior &&
          (t.dataset.configAddProductBehavior =
            window.SnipcartSettings.addProductBehavior),
        window.SnipcartSettings.modalStyle &&
          (t.dataset.configModalStyle = window.SnipcartSettings.modalStyle),
        window.SnipcartSettings.currency &&
          (t.dataset.currency = window.SnipcartSettings.currency),
        window.SnipcartSettings.templatesUrl &&
          (t.dataset.templatesUrl = window.SnipcartSettings.templatesUrl));
    }
  }
}
document.addEventListener("snipcart.ready", () => {
  document.body.classList.add("snipcart-ready");
});
