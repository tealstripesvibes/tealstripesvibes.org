import React, { useReducer } from "react";
import { UiPopups } from "@core/components/popup/UiPopup";
import {
  UiContext,
  uiContextDefault,
  uiReducer,
} from "@core/context/UiContext";

export function UiStage({ children }: { children: any }) {
  const [state, dispatch] = useReducer(uiReducer, uiContextDefault);
  state.dispatch = dispatch;

  return (
    <UiContext.Provider value={state}>
      <div className="stage-open" aria-hidden="true" />
      <UiPopups popups={state.popups} />
      {children}
      <div className="stage-close" aria-hidden="true" />
    </UiContext.Provider>
  );
}
