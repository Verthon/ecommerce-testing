import * as React from "react";

import { type ApiStatus } from "../models/ApiStatus";

export const useApiStatus = () => {
  const [state, setState] = React.useState<ApiStatus>("idle");

  const setStatus = React.useCallback((status: ApiStatus) => {
    setState(status);
  }, []);

  return {
    apiStatus: state,
    setApiStatus: setStatus,
  };
};
