import React, { ReactElement, useContext, useEffect, useRef } from "react";
import "./_styles/_popup.scss";
import { UiContext } from "@core/context/UiContext";
import { usePageContext } from "vike-react/usePageContext";

export interface UiPopup {
  title: string;
  Component: () => ReactElement;
}

export type UiOpenPopupAction = {
  type: "open-ui-popup";
  popup: UiPopup;
  id: string;
};
export type UiClosePopupAction = { type: "close-ui-popup"; id: string };
export type UiClearPopupsAction = { type: "clear-ui-popups" };

interface UiPopupsParams {
  popups: any;
}

export function Popup(popup: UiPopup & { forId?: string }) {
  const pageContext = usePageContext();
  const { dispatch } = useContext(UiContext);
  useEffect(() => {
    if (pageContext.urlParsed.hash === `${popup.forId}`) openPopup();
  }, []);
  const openPopup = () => {
    // set hash
    if (popup.forId) {
      window.location.hash = popup.forId;
    }
    dispatch({
      type: "open-ui-popup",
      id: "main-popup",
      popup,
    });
  };
  return <button onClick={openPopup}>{popup.title}</button>;
}

export function PopupActionLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children?: any;
}) {
  const { dispatch } = useContext(UiContext);
  const clearPopups = () => dispatch({ type: "clear-ui-popups" });
  return (
    <a href={href} onClick={clearPopups}>
      {title}
      {children}
    </a>
  );
}

export function UiPopups({ popups }: UiPopupsParams) {
  const { dispatch } = useContext(UiContext);
  const clearPopups = () => {
    window.location.hash = "";
    dispatch({ type: "clear-ui-popups" });
  };
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (stageRef.current) stageRef.current.focus();
  }, [popups.length]);

  if (!popups.length) return null;
  return (
    <section className="ui--popup__stage" tabIndex={0} ref={stageRef}>
      <div className="ui--popup__wrapper" tabIndex={0} autoFocus={true}>
        <ul className="ui--popup__container">
          {popups.map((popup: UiPopup) => (
            <li key={popup.title} className="ui--popup__item">
              <article>
                <header>{popup.title}</header>
                <>{popup.Component()}</>
              </article>
            </li>
          ))}
        </ul>
        <div className="button__container">
          <button onClick={clearPopups}>close</button>
        </div>
      </div>
    </section>
  );
}
