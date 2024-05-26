import { useMemo } from "react";
import Cookie from "js-cookie";

export function useJwt(key: any = null) {
  return useMemo(() => Cookie.get("jwt"), [key]);
}
