import * as React from 'react';

export const useToggle = (initialState = false) => {
  const [state, setState] = React.useState<boolean>(initialState);
  const toggle = React.useCallback((): void => setState((currentState) => !currentState), []);
  const resetToInitialState = React.useCallback((): void => setState(false), []);

  return { state, toggle, resetToInitialState };
};
