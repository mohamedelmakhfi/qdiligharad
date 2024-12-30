import { useReducer } from "react";

const usePagination = (pageSize = 10) => {
  const paginationInitialState = {
    page: 0,
    pageSize,
  };

  const paginationReducer = (state, { type, payload }) => {
    switch (type) {
      case "CHANGE_PAGE":
        return { ...state, page: payload.page, pageSize: payload.pageSize };
      default:
        return state;
    }
  };

  const [paginationState, paginationDispatch] = useReducer(
    paginationReducer,
    paginationInitialState,
  );

  const changePage = (page) => {
    paginationDispatch({ type: "CHANGE_PAGE", payload: page });
  };

  return [paginationState, changePage];
};

export default usePagination;
