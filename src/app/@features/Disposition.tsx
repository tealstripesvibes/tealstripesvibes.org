import { IDispositionName } from "@core/dispositions/types";
import { createContext, useContext, useEffect, useState } from "react";
import { trackEvent } from "@features/analytics/initAnalytics";
const siteName = import.meta.env.VITE_PROJECT_NAME;
const DispositionContext = createContext({
  disposition: siteName as IDispositionName,
  setDisposition: (_: IDispositionName) => {},
});

export function useDisposition(): [
  IDispositionName,
  (disposition: IDispositionName) => void,
] {
  const { disposition, setDisposition } = useContext(DispositionContext);
  const [previousDisposition, setPreviousDisposition] = useState(disposition);
  useEffect(() => {
    setPreviousDisposition(disposition);
    trackEvent("disposition:change", {
      props: {
        dispositionFrom: previousDisposition,
        dispositionTo: disposition,
      },
    });
    return () => {};
  }, [disposition]);

  return [disposition, setDisposition];
}

export function DispositionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [disposition, setDisposition] = useState(siteName);

  return (
    <DispositionContext.Provider value={{ disposition, setDisposition }}>
      {children}
    </DispositionContext.Provider>
  );
}

export function DispositionSwitch(items: {
  [key in IDispositionName]?: React.ReactNode;
}) {
  const [disposition] = useDisposition();
  return <>{items[disposition] ? items[disposition] : null}</>;
}
