const dataReducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_QID":
      return { ...state, qid: action.payload };
    case "SET_QIDOPTIONS":
      return { ...state, qidOptions: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    default:
      return state;
  }
};

const initialState = {
  qid: null,
  qidOptions: [],
  score: 0,
};

export { dataReducerFunc, initialState };
