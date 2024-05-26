import {
  UiClearPopupsAction,
  UiClosePopupAction,
  UiOpenPopupAction,
  UiPopup,
} from "@core/components/popup/UiPopup";
import { createContext, ReactElement } from "react";
export type UiContextState = {
  dispatch: (action: UiAction) => void;
  popups: UiPopup[];

  openPopup: (popup: UiPopup) => void;
};
export const uiContextDefault: UiContextState = {
  popups: [],
  dispatch: ({}: { type: string }) => {},
  openPopup: ({}: { title: string; Component: () => ReactElement }) => {},
};
export const UiContext = createContext(uiContextDefault);
type UiAction = UiOpenPopupAction | UiClosePopupAction | UiClearPopupsAction;

export function uiReducer(state: UiContextState, action: UiAction) {
  switch (action.type) {
    case "open-ui-popup":
      return {
        ...state,
        popups: [
          ...state.popups.filter((p) => p.title !== action.popup.title),
          action.popup,
        ],
      };
    case "close-ui-popup":
      return {
        ...state,
        popups: state.popups.filter((popup: any) => popup.id !== action.id),
      };
    case "clear-ui-popups":
      return {
        ...state,
        popups: [],
      };
    default:
      return state;
  }
}
