export const updateState = (referentiel, oldState, newState) => {
  return {
    ...oldState,
    [referentiel]: {
      ...oldState[referentiel],
      ...newState,
    },
  };
};

export const arrayContentElementInitialState = {
  content: [],
  isLoading: false,
  isSuccessed: false,
  hasError: false,
  error: null,
};

export const objectContentElementInitialState = {
  content: {},
  isLoading: false,
  isSuccessed: false,
  hasError: false,
  error: null,
};

export const noContentElementInitialState = {
  isLoading: false,
  isSuccessed: false,
  hasError: false,
  error: null,
};
